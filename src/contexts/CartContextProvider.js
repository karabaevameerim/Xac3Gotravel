import React, { useReducer } from "react";
import { createContext, useContext } from "react";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
} from "../helpers/functions";
import { useAuth } from "./AuthContextProvider";
export const cartContext = createContext();
export const useCart = () => useContext(cartContext);

const INIT_STATE = {
  cart: JSON.parse(localStorage.getItem("cart")),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CART":
      return { ...state, cart: action.payload };
    case "GET_CART_LENGTH":
      return { ...state, cartLength: action.payload };
    default:
      return state;
  }
}

const CartContextProvider = ({ children }) => {
  const {
    user: { email },
  } = useAuth();

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      cart = { products: [], totalPrice: 0 };
    }
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };
  console.log();

  const addProductToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart"));

    if (!cart) {
      cart = { products: [], totalPrice: 0 };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: +product.price,
    };

    let productToFind = cart.products.filter(
      (elem) => elem.item.id === product.id
    );

    if (productToFind.length === 0) {
      cart.products.push(newProduct);
    } else {
      cart.products = cart.products.filter(
        (elem) => elem.item.id != product.id
      );
    }
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({ type: "GET_CART", payload: cart });
  };

  const checkProductInCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      let newCart = cart.products.filter((elem) => elem.item.id == id);
      return newCart.length > 0 ? true : false;
    }
  };

  const deleteCartProduct = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.filter((elem) => elem.item.id !== id);

    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({ type: "GET_CART", payload: cart });
  };

  const changeProductCount = (count, id) => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.products = cart.products.map((product) => {
      if (product.item.id == id) {
        product.count = +count;
        product.subPrice = calcSubPrice(product);
      }
      return product;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  };

  const values = {
    getCart,
    addProductToCart,
    checkProductInCart,
    deleteCartProduct,
    changeProductCount,
    cart: state.cart,
  };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
