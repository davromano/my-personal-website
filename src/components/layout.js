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
              className="bi bi-house"
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
          {/* Home Button */}
          <div className="flex items-center">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
              </svg>
            </Link>
          </div>

          {/* Center Links */}
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
          </div>

          {/* Right Links */}
          <div className="flex space-x-6 items-center">
            <a
              href="https://www.linkedin.com/in/davide-romano-4b722b214/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-clicked-minsk hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>
            <a
              href="mailto:davidesmail00@gmail.com"
              className="hover:text-clicked-minsk hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>

      {/* Hamburger Menu */}
      <div
        className={`fixed top-16 left-0 w-full h-full overflow-y-hidden transition-opacity duration-700 ease-in-out z-10 pointer-events-none ${
          isMenuOpen
            ? "opacity-100 bg-white-minsk bg-opacity-10 backdrop-blur-3xl shadow-md pointer-events-auto"
            : "opacity-0"
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