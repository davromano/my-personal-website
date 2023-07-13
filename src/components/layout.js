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
          <Link to="/" className="text-white-minsk font-bold text-xl">
            Davide Romano
          </Link>
          <div className="flex space-x-10 text-lg font-bold">
            <Link to="/about" className="hover:text-clicked-minsk hover:underline">
              About me
            </Link>
            <Link to="/projects" className="hover:text-clicked-minsk hover:underline">
              Projects
            </Link>
            <Link to="/articles" className="hover:text-clicked-minsk hover:underline">
              Articles
            </Link>
            <Link to="/contacts" className="hover:text-clicked-minsk hover:underline">
              Contacts
            </Link>
          </div>
        </div>
      </nav>
      <div>
        <main className=" bg-white-minsk" style={{ height: 'calc(100vh - 4rem)' }}>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
