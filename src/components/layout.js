import * as React from "react";
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

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gradient-to-r from-dark-minsk to-white-minsk h-16 flex items-center fixed top-0 w-full z-10">
        <div
          className="container mx-auto flex justify-between items-center text-dark-minsk"
          style={{ fontFamily: "tt-norms" }}
        >
          <Link to="/" className="text-white-minsk font-normal text-2xl">
            Davide Romano
          </Link>
          <div className="flex space-x-10 text-lg font-normal">
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
      <div className="flex-grow mt-16">
        <main className="bg-white-minsk w-full">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
