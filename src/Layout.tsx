// import React from "react";

import { Outlet, useLocation } from "react-router-dom";
import { Home } from "./pages";
import { Navbar } from "./components/home-page";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <>
      {/* NAVBAR */}
      <nav>
        <Navbar />
      </nav>
      {/* MAIN CONTENT */}
      <main>
        {pathname === "/" || pathname === "/home" ? <Home /> : <Outlet />}
      </main>
      {/* FOOTER */}
      <footer></footer>
    </>
  );
};

export default Layout;
