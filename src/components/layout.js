import React, { useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <nav className=" bg-nav-mobile-minsk md:bg-gradient-to-r from-dark-minsk to-white-minsk md:to-90% h-16 flex justify-center fixed top-0 w-full z-20">
        {/* Mobile Code */}
        <div className="container flex justify-between items-center text-dark-minsk md:hidden">
          <Link
            to="/"
            className="md:hidden text-dark-minsk font-normal text-2xl ml-4"
            style={{ fontFamily: "tt-norms" }}
          >
            Davide Romano
          </Link>
          <div className="md:hidden mr-4">
            <button className="h-8 w-8" onClick={toggleMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Original Code */}
        <div
          className="container md:flex justify-between items-center text-dark-minsk hidden"
          style={{ fontFamily: "tt-norms" }}
        >
          <Link
            to="/"
            className="hidden md:block text-white-minsk font-normal text-2xl"
          >
            Davide Romano
          </Link>
          <div className="flex space-x-10 md:text-lg font-normal text-base justify-center mx-2">
            <Link
              to="/about"
              className="hover:text-clicked-minsk hover:underline"
            >
              About me
            </Link>
            <Link
              to="/projects"
              className="hover:text-clicked-minsk hover:underline"
            >
              Projects
            </Link>
            <Link
              to="/articles"
              className="hover:text-clicked-minsk hover:underline"
            >
              Articles
            </Link>
            <Link
              to="/contacts"
              className="hover:text-clicked-minsk hover:underline"
            >
              Contacts
            </Link>
          </div>
        </div>
      </nav>

      {/* Hamburger Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full overflow-y-hidden transition-transform duration-500 ease-in-out transform z-10 ${
          isMenuOpen
            ? " translate-y-0 bg-white-minsk bg-opacity-60 backdrop-blur-3xl "
            : "-translate-y-full"
        }`}
      >
        <div
          className="flex flex-col text-dark-minsk space-y-20 justify-center items-center mt-40 text-4xl"
          style={{ fontFamily: "tt-norms" }}
        >
          {/* Add menu links here */}
          <Link
            to="/about"
            className="hover:text-clicked-minsk hover:underline"
          >
            About me
          </Link>
          <Link
            to="/projects"
            className="hover:text-clicked-minsk hover:underline"
          >
            Projects
          </Link>
          <Link
            to="/articles"
            className="hover:text-clicked-minsk hover:underline"
          >
            Articles
          </Link>
          <Link
            to="/contacts"
            className="hover:text-clicked-minsk hover:underline"
          >
            Contacts
          </Link>
        </div>
      </div>

      <div className="flex-grow mt-16"
      style={{
        maxHeight: '100vh',
        position: isMenuOpen ? 'fixed' : 'static',
      }}>
        <main className="bg-white-minsk w-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
