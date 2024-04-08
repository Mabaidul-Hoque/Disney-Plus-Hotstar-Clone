// import React from "react";

import { Outlet, useLocation } from "react-router-dom";
import { Home } from "./pages";
import { Footer, Navbar } from "./components/home-page";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <>
      {/* NAVBAR */}
      <nav className="">
        <Navbar />
      </nav>
      {/* MAIN CONTENT */}
      <main className="">
        {pathname === "/" || pathname === "/home" ? <Home /> : <Outlet />}
      </main>
      {/* FOOTER */}
      <footer className="bg-gray-900 text-white p-6 mt-20">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
