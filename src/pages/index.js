import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/hero/hero'
import computer from '../images/computer.jpg'
import get from 'lodash/get'
import './index.css'

class IndexPage extends React.Component {
  render() {
    let posts = get(this, 'props.data.allMarkdownRemark.edges')
    posts = posts.slice(0, 3)

    return (
      <main id="main-content">
        <Hero header="My Mission" />
        <div className="blog">
          <h2>Recent Blog Posts</h2>
          <div className="blog__items">
            {posts.map(({ node }) => {
              return (
                <div className="blog__item">
                  <h3 className="blog__title">
                    <Link to={node.frontmatter.path}>
                      {node.frontmatter.title}
                    </Link>
                  </h3>
                  <time>{node.frontmatter.date}</time>
                  <div>
                    <p>{node.excerpt}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="blog__more-link">
            <Link to="/blog">See All Blog Posts</Link>
          </div>
        </div>
      </main>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
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
