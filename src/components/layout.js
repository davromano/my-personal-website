import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

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
      <nav className="bg-gradient-to-r from-dark-minsk to-white-minsk h-16 flex items-center">
        <div className="container mx-auto flex justify-between items-center  text-dark-minsk" style={{ fontFamily: 'tt-norms' }}>
          <Link to="/" className="text-white-minsk font-bold text-lg">
            Davide Romano
          </Link>
          <div className="flex space-x-10 text-lg">
            <Link to="/about">
              About
            </Link>
            <Link to="/projects">
              Projects
            </Link>
            <Link to="/articles">
              Articles
            </Link>
            <Link to="/contacts">
              Contacts
            </Link>
          </div>
        </div>
      </nav>
      <div>
        <main className=" bg-white-minsk">
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
