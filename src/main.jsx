import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import BuyerScreen from "./Pages/BuyerScreens/BuyerScreen/BuyerScreen.jsx";
import Landing from "./Pages/Landing/Landing/Landing.jsx";
import PropertyDetails from "./Pages/PropertyDetails/PropertyDetails/PropertyDetails.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <PropertyDetails></PropertyDetails>,
      },
      {
        path: "/landingPage",
        element: <Landing></Landing>,
      },
      {
        path: "/buyerPage",
        element: <BuyerScreen></BuyerScreen>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
