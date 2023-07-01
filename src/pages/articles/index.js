import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'

const BlogPage = ({ data }) => {
  const articles = data.allMdx.nodes.filter(node => node.fields.source === 'articles')

  return (
    <Layout pageTitle="Articles">
      <h1 style={{ fontFamily: 'tt-norms' }}>Articles</h1>
      {
        articles.map((node) => (
          <article key={node.id} style={{ fontFamily: 'tt-norms' }}>
            <h2><Link to={`/articles/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
            </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx (sort: { frontmatter: { date: DESC }}) {
      nodes {
        id
        fields {
          source
        }
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        excerpt
      }
    }
  }
`
export const Head = () => <Seo title="Articles" />

export default BlogPage