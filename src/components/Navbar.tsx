import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#031123]">
      <div className="max-w-screen-xl flex mx-auto p-4">
        <Link to="/" className="flex items-center">
          <img src="/logo.png" className="h-8 mr-3" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            eCommerce
          </span>
        </Link>
        <div className="flex items-center justify-between px-6">
          <ul className="text-white flex items-center gap-2">
            <Link to="/">
              <li className="hover:text-[#793FDF]">Home</li>
            </Link>
            <Link to="/about">
              <li className="hover:text-[#793FDF]">About</li>
            </Link>
            <Link to="/contact">
              <li className="hover:text-[#793FDF]">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
