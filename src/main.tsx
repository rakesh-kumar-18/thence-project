import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, Registration, Success } from "./pages/index.ts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "registration",
    element: <Registration />
  },
  {
    path: "success",
    element: <Success />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);