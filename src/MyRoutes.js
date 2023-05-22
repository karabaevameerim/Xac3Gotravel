import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddProductPage from "./pages/AddProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import TripListPage from "./pages/TripListPage";
import EditProductPage from "./pages/EditProductPage";
import TripDetailsPage from "./pages/TripDetailsPage";
import CartPage from "./pages/CartPage";
import CreditCard from "./components/CreditCard/CreditCard";
import PaymentCheck from "./components/PaymentCheck/PaymentCheck";
import AboutUsPage from "./pages/AboutUsPage";
import ContactsPage from "./pages/ContactsPage";
import Like from "./components/like/Like";
import AuthPage from "./pages/AuthPage";
import AdminPage from "./pages/AdminPage";
import FavoritesPage from "./pages/FavoritesPage";
import { useAuth } from "./contexts/AuthContextProvider";
import { ADMIN } from "./helpers/consts";

const MyRoutes = () => {
  const { user } = useAuth();
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/add", element: <AddProductPage />, id: 2 },
    { link: "/card", element: <TripListPage />, id: 3 },
    { link: "*", element: <NotFoundPage />, id: 4 },
    { link: "/details/:id", element: <TripDetailsPage />, id: 6 },
    { link: "/cart", element: <CartPage />, id: 7 },
    { link: "/creditCard", element: <CreditCard />, id: 8 },
    { link: "/paymentCheck", element: <PaymentCheck />, id: 9 },
    { link: "/about", element: <AboutUsPage />, id: 10 },
    { link: "/contacts", element: <ContactsPage />, id: 11 },
    { link: "/likes", element: <Like />, id: 12 },
    { link: "/auth", element: <AuthPage />, id: 13 },
    { link: "/favorites", element: <FavoritesPage />, id: 14 },
  ];

  const PRIVATE_ROUTES = [
    { link: "/admin", element: <AdminPage />, id: 16 },
    { link: "/edit/:id", element: <EditProductPage />, id: 5 },
  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
        {user
          ? PRIVATE_ROUTES.map((item) => (
              <Route
                path={item.link}
                key={item.id}
                element={
                  user.email === ADMIN ? (
                    item.element
                  ) : (
                    <Navigate replace to="*" />
                  )
                }
              />
            ))
          : null}
      </Routes>
    </>
  );
};

export default MyRoutes;
