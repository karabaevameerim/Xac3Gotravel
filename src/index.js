import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import TripContextProvider from "./contexts/TripContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import CreditCardProvider from "./contexts/CreditCardProvider";
import LikeContextProvider from "./contexts/LikeContextProvider";
import AuthContextProvider from "./contexts/AuthContextProvider";
import FavoriteContextProvider from "./contexts/FavoriteContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <CreditCardProvider>
          <FavoriteContextProvider>
            <LikeContextProvider>
              <CartContextProvider>
                <TripContextProvider>
                  <App />
                </TripContextProvider>
              </CartContextProvider>
            </LikeContextProvider>
          </FavoriteContextProvider>
        </CreditCardProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
