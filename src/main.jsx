import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root/Root";
import Home from "./pages/Home/Home/Home";
import BloodBridge from "./pages/ProjectDetails/BloodBridge/BloodBridge";
import CompHarbor from "./pages/ProjectDetails/CompHarbor/CompHarbor";
import TopShelf from "./pages/ProjectDetails/TopShelf/TopShelf";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // PROJECT DETAILS ROUTES
      {
        path: "/bloodbridge",
        element: <BloodBridge></BloodBridge>,
      },
      {
        path: "/compharbor",
        element: <CompHarbor></CompHarbor>,
      },
      {
        path: "/topshelf",
        element: <TopShelf></TopShelf>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
