import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AboutPage } from "./pages/AboutPage.tsx";
import { CartPage } from "./pages/CartPage.tsx";
import { ContactPage } from "./pages/ContactPage.tsx";
import { ShopPage } from "./pages/ShopPage.tsx";
import { StoryPage } from "./pages/StoryPage.tsx";
import { NotFoundPage } from "./pages/NotFoundPage.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <NotFoundPage /> },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/shop",
    element: <ShopPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/story",
    element: <StoryPage />,
    errorElement: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
