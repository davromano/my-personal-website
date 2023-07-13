// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import "../styles/style.css"
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const ContactsPage = () => {
  return (
    <Layout pageTitle="ContactsPage">
      <img src='./images/me.JPG' alt='me'/>
      <p>Linkedin</p>
      <p>davidesmail00@gmail.com</p>
      <p>Instagram</p>
    </Layout>
  )
}

export const Head = () => <Seo title="ContactsPage" />

// Step 3: Export your component
export default ContactsPage