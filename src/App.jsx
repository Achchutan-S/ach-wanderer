/* eslint-disable */
import React from "react";
import { createHashRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const router = createHashRouter([
  {
    path: "/",
    element: <NavbarWrapper />,
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
    <div>
      <Navbar />
      <div className="outlet">
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
