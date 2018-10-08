import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Sidebar from '../components/sidebar/sidebar'

export default function Template({ data }) {
  const { markdownRemark } = data
  const siteTitle = data.site.siteMetadata.title;
  const { frontmatter, html, excerpt } = markdownRemark

    return (
      <div>
        <Helmet 
          title={`${frontmatter.title} | ${siteTitle}`}
          meta={[
            {
              name: "description",
              content: excerpt
            },
            {
              name: "keywords",
              content: frontmatter.tags.join(", ")
            }
          ]}
        />
        <div className="wrapper with-sidebar">
          <nav className="breadcrumb">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>{frontmatter.title}</li>
            </ol>
          </nav>
          <div className="content">
            <main id="main-content">
            <h1>{frontmatter.title}</h1>
            <time>
              {frontmatter.date}
            </time>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            </main>
            <Sidebar location="blog" />
          </div>
        </div>
      </div>
    )
  
}

export const pageQuery = graphql`
  query BlogPostBySlug($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 150)
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        path
        title
        tags
      }
    }
  }
`