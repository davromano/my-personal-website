// Step 1: Import React
import * as React from "react";
import "../styles/style.css";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <div
        style={{ fontFamily: "tt-norms" }}
        className="flex-col items-center justify-center w-4/5 md:w-3/5 mt-12"
      >
        <h1 className="text-4xl pb-6 text-dark-minsk">About me</h1>
        <div className="md:flex md:space-x-8">
          <div className="md:w-1/2">
            <StaticImage
              src="../images/me-other-photo.jpg"
              alt="Davide Romano profile photo"
              placeholder="blurred"
              width={400}
              height={600}
              className="shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-105 pb-6"
            />
          </div>
          <div className="text-lg text-dark-minsk md:w-1/2 md:mt-0 mt-4">
            <p className="pb-3 md:pb-0">
              Hi there! I'm Davide, a Digital Humanities master student at
              EPFL. I am mostly interested in NLP, Language Models and anything related to Data.
            </p>
            <p className="pb-3">
              I love learning languages and exploring new cultures and places.
              When I need a break from all the brain power, I love hanging out
              with friends, listen to music or podcasts. Oh, and I read about
              anything that satisfy my curiosity! I am a non-fictional book
              enthusiast. <br />
              From cognitive science to nutrition, self-help, statistics,
              history or personal finance. Anything that is thought provoking is
              welcomed!
            </p>
          </div>
        </div>
        <div
          className="items-center justify-center text-dark-minsk text-lg mt-4"
          style={{ fontFamily: "tt-norms" }}
        >
          <p className="pb-3">
            I was born in Rapallo, a small city close to Genoa, Italy. Some
            people know it because it's close to Portofino. It's a beautiful
            city but I've always felt it was a bit small for me :O
          </p>
          <p className="pb-3">
            Since when I was in high school I was always interested in two
            things : Computer Science and Psychology (now I know it's Cognitive
            Psychology specifically).
          </p>
          <p className="pb-3">
            However, I chose to do Computer Science for my Bachelor at
            University of Genoa, as I was too amazed by AI and the potential of
            these new technologies.
          </p>
          <p className="pb-3">
            In my final year of Bachelor's, I embarked on a transformative
            exchange journey in Valencia, Spain. This incredible experience has
            shaped me profoundly as a person.
          </p>
          <p className="pb-3">
            In 2022 I was accepted for the Digital Humanities master at EPFL and
            I couldn't be more happy!
          </p>
          <p className="pb-3">
            From August 2024 I am working for at AXA Group Operations in Lausanne as a Data Scientist / LLM Engineer. My work revolves around improving the in-house LLM agent for the insurance related use cases.
          </p>
        </div>
        <div className="flex pt-4">
          <Link
            to="/projects"
            className=" text-dark-minsk text-2xl hover:text-clicked-minsk hover:underline pb-8"
          >
            Have a look at the projects I am doing at EPFL
          </Link>
          <Link to="/projects">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-dark-minsk transition-transform hover:translate-x-[5px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />;

// Step 3: Export your component
export default AboutPage;
