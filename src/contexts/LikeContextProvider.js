import React, { useReducer } from "react";
import { createContext, useContext } from "react";
export const likeContext = createContext();
export const useLike = () => useContext(likeContext);

const INIT_STATE = {
  like: JSON.parse(localStorage.getItem("like")),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_LIKE":
      return { ...state, like: action.payload };
    case "GET_LIKE_LENGTH":
      return { ...state, likeLength: action.payload };
    default:
      return state;
  }
}

const LikeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getLike = () => {
    let like = JSON.parse(localStorage.getItem("like"));

    if (!like) {
      localStorage.setItem(
        "like",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      like = { products: [], totalPrice: 0 };
    }
    dispatch({
      type: "GET_LIKE",
      payload: like,
    });
  };

  const addProductToLike = (product) => {
    let like = JSON.parse(localStorage.getItem("like"));

    if (!like) {
      like = { products: [], totalPrice: 0 };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    let productToFind = like.products.filter(
      (elem) => elem.item.id === product.id
    );

    if (productToFind.length === 0) {
      like.products.push(newProduct);
    } else {
      like.products = like.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }
    localStorage.setItem("like", JSON.stringify(like));
    dispatch({ type: "GET_LIKE", payload: like });
  };

  const checkLike = (id) => {
    let like = JSON.parse(localStorage.getItem("like"));
    if (like) {
      let newLike = like.products.filter((elem) => elem.item.id === id);
      return newLike.length > 0 ? true : false;
    }
  };

  const deleteLikeProduct = (id) => {
    let like = JSON.parse(localStorage.getItem("like"));
    like.products = like.products.filter((elem) => elem.item.id !== id);

    localStorage.setItem("like", JSON.stringify(like));
    dispatch({ type: "GET_LIKE", payload: like });
  };

  const values = {
    getLike,
    addProductToLike,
    checkLike,
    deleteLikeProduct,
    like: state.like,
  };
  return <likeContext.Provider value={values}>{children}</likeContext.Provider>;
};

export default LikeContextProvider;
