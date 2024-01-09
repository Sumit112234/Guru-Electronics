import React from "react";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./features/cart0/Cart";
import Cartcomp from "./Pages/Cartcomp";
import Cheakout from "./Pages/Cheakout";
import Home from "./Pages/Home";
import ProductDetails from "./Pages/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signu",
    element: <SignupPage />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "cart0",
    element: <Cartcomp />,
  },
  {
    path: "cheakout",
    element: <Cheakout />,
  },
  {
    path: "ProductDetail/:id",
    element: <ProductDetails />,
  },
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
