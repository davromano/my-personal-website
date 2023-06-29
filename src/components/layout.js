import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from "../styles/layout.module.css";

const Layout = ({ pageTitle, children }) => {
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
    <>
      <nav className="bg-gray-800 h-12">
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link to="/" className="text-white font-bold">
            Davide Romano
          </Link>
          <div className="flex space-x-4">
            <Link to="/about" className="text-white">
              About
            </Link>
            <Link to="/projects" className="text-white">
              Projects
            </Link>
            <Link to="/articles" className="text-white">
              Articles
            </Link>
            <Link to="/contacts" className="text-white">
              Contacts
            </Link>
          </div>
        </div>
      </nav>
      <div>
        <main>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
