import React, { useReducer } from "react";
import { createContext, useContext } from "react";
export const favoriteContext = createContext();
export const useFavorite = () => useContext(favoriteContext);

const INIT_STATE = {
  favorite: JSON.parse(localStorage.getItem("favorite")),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_FAVORITE":
      return { ...state, favorite: action.payload };
    case "GET_FAVORITE_LENGTH":
      return { ...state, favoriteLength: action.payload };
    default:
      return state;
  }
}

const FavoriteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getFavorite = () => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));

    if (!favorite) {
      localStorage.setItem(
        "favorite",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      favorite = { products: [], totalPrice: 0 };
    }
    dispatch({
      type: "GET_FAVORITE",
      payload: favorite,
    });
  };

  const addProductToFavorite = (product) => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));

    if (!favorite) {
      favorite = { products: [] };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    let productToFind = favorite.products.filter(
      (elem) => elem.item.id === product.id
    );

    if (productToFind.length === 0) {
      favorite.products.push(newProduct);
    } else {
      favorite.products = favorite.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }
    localStorage.setItem("favorite", JSON.stringify(favorite));
    dispatch({ type: "GET_FAVORITE", payload: favorite });
  };

  const checkFavorite = (id) => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    if (favorite) {
      let newFavorite = favorite.products.filter((elem) => elem.item.id === id);
      return newFavorite.length > 0 ? true : false;
    }
  };

  const deleteFavoriteProduct = (id) => {
    let favorite = JSON.parse(localStorage.getItem("favorite"));
    favorite.products = favorite.products.filter((elem) => elem.item.id !== id);

    localStorage.setItem("favorite", JSON.stringify(favorite));
    dispatch({ type: "GET_FAVORITE", payload: favorite });
  };

  const values = {
    getFavorite,
    addProductToFavorite,
    checkFavorite,
    deleteFavoriteProduct,
    favorite: state.favorite,
  };
  return (
    <favoriteContext.Provider value={values}>
      {children}
    </favoriteContext.Provider>
  );
};

export default FavoriteContextProvider;
