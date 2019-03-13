import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class BlogIndex extends React.Component {
  render() {
    const siteTitle =
      'Blog | ' + get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet
          title={siteTitle}
          meta={[
            {
              name: 'description',
              content:
                'a11y with Lindsey blog, where you can learn tidbits of accessibility tips for developers',
            },
            {
              name: 'keywords',
              content: 'accessibility, blogging, DC, inclusion, empathy',
            },
          ]}
        />
        <div className="content">
          <main id="main-content">
            <div className="content__heading">
              <div className="wrapper">
                <nav className="breadcrumb">
                  <ol>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>Blog</li>
                  </ol>
                </nav>
                <h1>Blog</h1>
              </div>
            </div>
            <div className="content__body">
              <div className="wrapper">
                {posts.map(({ node }) => {
                  const title = get(node, 'frontmatter.title')
                  const path = get(node, 'frontmatter.path')
                  return (
                    <div style={{ marginTop: 24, marginBottom: 24 }} key={path}>
                      <h2 style={{ marginTop: 10, marginBottom: 10 }}>
                        <Link style={{ boxShadow: 'none' }} to={path}>
                          {title}
                        </Link>
                      </h2>
                      <time>{node.frontmatter.date}</time>
                      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    </div>
                  )
                })}
              </div>
            </div>
          </main>
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
    allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            path
          }
        }
      }
    }
  }
`
