import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/images/logo.png";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="hidden lg:flex header z-50 fixed top-0 w-full bg-white shadow-lg py-3  items-center justify-between">
      <div className="px-20 flex justify-between items-center text-black w-full">
        <div className="font-wix-madefor-display text-black flex items-center justify-center my text-3xl font-semibold">
          <Link to={"/"} className="w-40 mt-2">
            <img
              src={logo}
              alt="logo"
              className="w-full h-full pb-2 object-cover"
            />
          </Link>
        </div>
        <div className="hidden lg:flex font-semibold gap-10 mr-3">
          <NavItem to="/" currentPath={location.pathname}>
            Home
          </NavItem>
          <NavItem to="/about" currentPath={location.pathname}>
            About
          </NavItem>
          <NavItem to="/contact-us" currentPath={location.pathname}>
            Contact
          </NavItem>
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  currentPath: string;
}

const NavItem = ({ to, children, currentPath }: NavItemProps) => (
  <div className="relative">
    <Link
      to={to}
      className={`hover:text-blue-500 transition duration-300 ${
        currentPath === to ? "text-blue-500" : "text-black"
      }`}
    >
      {children}
    </Link>
    {currentPath === to && (
      <div className="absolute left-0 right-0 mx-auto mt-1 w-8 h-[2px] bg-blue-500 rounded-xl"></div>
    )}
  </div>
);

export default Navbar;
