import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About/About";
import ErrorPage from "./components/pages/ErrorPage";
import Projects from "./components/pages/Project_page/Projects";

import Director from "./components/pages/Director/Director";
import News from "./components/pages/News/New";
import Contact from "./components/pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    indexRoute: true,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/director",
    element: <Director />,
  },

  // {
  //   path: "/about",
  //   action: () => import("../pages/About"),
  // },
  // {
  //   path: "/projects",
  //   action: () => import("./pages/Projects"),
  // },
  // {
  //   path: "/news",
  //   action: () => import("./pages/News"),
  // },
  // {
  //   path: "/contact",
  //   action: () => import("./pages/Contact"),
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
