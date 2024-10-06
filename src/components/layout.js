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
      {/* Navigation Bar */}
      <nav className="fixed top-4 left-8 right-8 bg-nav-mobile-minsk h-16 flex justify-center items-center z-20 rounded-lg shadow-xl max-w-3xl mx-auto">
        {/* Mobile Code */}
        <div className="flex justify-between items-center text-dark-minsk w-full px-4 md:hidden">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
            </svg>
          </Link>
          <button className="h-8 w-8" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Code */}
        <div
          className="hidden md:flex justify-between items-center text-dark-minsk w-full px-8"
          style={{ fontFamily: "tt-norms" }}
        >
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
            </svg>
          </Link>
          <div className="flex space-x-10 md:text-lg font-normal text-base">
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
            {/* Uncomment when articles page is available
            <Link
              to="/articles"
              className="hover:text-clicked-minsk hover:underline"
            >
              Articles
            </Link>
            */}
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
        className={`fixed top-16 left-0 w-full h-full overflow-y-hidden transition-opacity duration-500 ease-in-out z-10 pointer-events-none ${
          isMenuOpen
            ? "opacity-100 bg-white-minsk bg-opacity-10 backdrop-blur-3xl shadow-md pointer-events-auto" : "opacity-0"
        }`}
      >
        <div
          className="flex flex-col text-dark-minsk space-y-10 justify-center items-center mt-24 text-4xl w-10/12 max-w-lg mx-auto p-6 bg-nav-mobile-minsk rounded-lg"
          style={{ fontFamily: "tt-norms" }}
        >
          {/* Add menu links here */}
          <Link
            to="/about"
            className="hover:text-clicked-minsk hover:underline transition-all duration-300 ease-in-out"
          >
            About me
          </Link>
          <Link
            to="/projects"
            className="hover:text-clicked-minsk hover:underline transition-all duration-300 ease-in-out"
          >
            Projects
          </Link>
          <Link
            to="/articles"
            className="hover:text-clicked-minsk hover:underline transition-all duration-300 ease-in-out"
          >
            Articles
          </Link>
          <Link
            to="/contacts"
            className="hover:text-clicked-minsk hover:underline transition-all duration-300 ease-in-out"
          >
            Contacts
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-grow mt-24 mx-4 ${
          isMenuOpen ? "fixed inset-0 overflow-hidden" : "relative"
        }`}
        style={{
          maxHeight: "100vh",
        }}
      >
        <main className="bg-white-minsk w-full rounded-lg p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;