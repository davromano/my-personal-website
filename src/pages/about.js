// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import "../styles/style.css"
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm Davide, a 1st year Digital Humanities student at EPFL originally from Genoa, Italy. I am mainly interested in data science, UX research and cognitive psychology.</p>
      <p>I read books on different topics</p>
      <ul>
        <li>Learning sciences</li>
        <li>cognitive science</li>
        <li>statistics</li>
        <li>nutrition and sport</li>
        <li>teamwork</li>
        <li>self-help</li>
        <li>history</li>
        <li>personal finance</li>
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />

// Step 3: Export your component
export default AboutPage