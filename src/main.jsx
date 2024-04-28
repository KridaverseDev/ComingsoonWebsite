import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ComingSoon from "./pages/ComingSoon.jsx";
import Home from "./pages/Home.jsx";
import TalentoCraft from "./pages/TalentoCraft.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "coming-soon",
    element: <ComingSoon />,
  },
  {
    path: "talento-craft",
    element: <TalentoCraft />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
