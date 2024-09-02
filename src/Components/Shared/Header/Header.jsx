import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#3944bc] py-2">
      <div className="mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex items-center justify-between h-16">
          <NavLink
            to="/"
            className="mr-10 text-xl lg:text-3xl text-white font-mono font-bold flex-shrink-0"
          >
            Posts
          </NavLink>
          <div className="flex justify-center items-center">
            <div className="hidden lg:block ml-auto">
              <div className="flex justify-center space-x-4">
                <NavLink to="/" className="links text-white text-xl font-bold">
                  Home
                </NavLink>
                <NavLink
                  to="/create-post"
                  className="links text-white text-xl font-bold px-5"
                >
                  Create Post
                </NavLink>
                <NavLink
                  to="/posts"
                  className="links text-white text-xl font-bold pe-5"
                >
                  Posts
                </NavLink>
              </div>
            </div>
            <div className="-mr-2 flex lg:hidden">
              <a
                onClick={toggleNavbar}
                href="#"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-black"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-start">
            <NavLink
              to="/"
              onClick={closeNavbar}
              className="links text-white text-xl px-3 pb-3 font-bold block"
            >
              Home
            </NavLink>
            <NavLink
              onClick={closeNavbar}
              to="/create-post"
              className="link text-xl text-white px-3 pb-3 font-bold block"
            >
              Create Post
            </NavLink>
            <NavLink
              onClick={closeNavbar}
              to="/posts"
              className="link text-xl text-white px-3 pb-3 font-bold block"
            >
              Posts
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
