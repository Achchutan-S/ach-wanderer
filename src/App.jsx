/* eslint-disable */
import React from "react";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ErrorElement from "./components/ErrorElement";

const router = createHashRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

function NavbarWrapper() {
  return (
    <div className="navbar-wrapper top-0 h-screen flex">
      <Navbar />
      <div className="outlet flex-grow pl-20">
        <Outlet />
      </div>
    </div>
  );
}
const App = () => {
  return (
    <div className="parent">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
