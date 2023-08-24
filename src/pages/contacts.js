// Step 1: Import React
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

// Step 2: Define your component
const ContactsPage = () => {
  return (
    <Layout pageTitle="ContactsPage">
      <h1 className="text-4xl pt-6 text-dark-minsk md:hidden" style={{ fontFamily: "tt-norms" }}>Contacts</h1>
      <div className="md:flex items-center justify-center md:space-x-60" style={{ height: 'calc(100vh - 4rem)' }}>
        <StaticImage
          src="../images/profile_photo.jpg"
          alt="Davide Romano profile photo"
          placeholder="blurred"
          width={400}
          height={400}
          className="shadow-xl transition-transform duration-500 ease-in-out transform md:hover:scale-105 md:scale-100 scale-75"
          />
        <div
          style={{ fontFamily: "tt-norms" }}
          className="text-2xl text-dark-minsk md:px-0 px-10"
        >
          <a
            href="https://www.linkedin.com/in/davide-romano-4b722b214/"
            className="hover:text-clicked-minsk hover:underline block mb-4"
          >
            @Linkedin
          </a>
          <a
            href="https://www.instagram.com/_davide.romano/?next=%2F"
            className="hover:text-clicked-minsk hover:underline block mb-4"
          >
            @Instagram
          </a>
          <a
            href="mailto:davidesmail00@gmail.com"
            className="hover:text-clicked-minsk hover:underline block mb-4"
          >
            davidesmail00@gmail.com
          </a>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="ContactsPage" />;

// Step 3: Export your component
export default ContactsPage;
