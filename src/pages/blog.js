import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Sidebar from '../components/sidebar/sidebar'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = 'Blog | ' + get(this, 'props.data.site.siteMetadata.title') 
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <div>
        <Helmet title={siteTitle} />
        <div className="wrapper with-sidebar">
          <nav className="breadcrumb">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Blog</li>
            </ol>
          </nav>
          <div className="content">
            <main>
              <h1>Blog</h1>
              {posts.map(({ node }) => {
                const title = get(node, 'frontmatter.title');
                const path = get(node, 'frontmatter.path');
                return (
                  <div style={{marginTop: 24, marginBottom: 24}} key={path}>
                    <h2 style={{marginTop: 10, marginBottom: 10}} >
                      <Link style={{ boxShadow: 'none' }} to={path}>
                        {title}
                      </Link>
                    </h2>
                    <time>{node.frontmatter.date}</time>
                    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    <Link to={path}>
                      Read more<span className="visually-hidden"> about {title}</span>
                    </Link>
                  </div>
                )
              })}
            </main>
            <Sidebar location="blog" />
          </div>
        </div>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            date
            title
            path
          }
        }
      }
    }
  }
`
