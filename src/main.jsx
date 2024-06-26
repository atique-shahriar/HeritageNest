import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import About from "./Pages/About/About/About.jsx";
import BuyerScreen from "./Pages/BuyerScreens/BuyerScreen/BuyerScreen.jsx";
import ErrorPage from "./Pages/ErrorPage/ErrorPage.jsx";
import Landing from "./Pages/Landing/Landing/Landing.jsx";
import PropertyDetails from "./Pages/PropertyDetails/PropertyDetails/PropertyDetails.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Landing></Landing>,
      },
      {
        path: "/buyerScreen",
        element: <BuyerScreen></BuyerScreen>,
      },

      {
        path: "/propertyDetails",
        element: <PropertyDetails></PropertyDetails>,
      },
      {
        path: "/aboutUs",
        element: <About></About>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
