import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/hero/hero'
import Quote from '../components/quote/quote'
import computer from '../images/computer.jpg'
import get from 'lodash/get'
// import Subscribe from '../components/subscribe/subscribe'
import './index.css'

class IndexPage extends React.Component {
  render() {
    let posts = get(this, 'props.data.allMarkdownRemark.edges')
    posts = posts.slice(0, 3);

    return (
      <div>
        <Hero header="My Mission" img={computer} />
        <Quote 
          header="Did you know?" 
          text="Nearly 1 in 5 People Have a Disability in the U.S." 
          link="https://www.census.gov/newsroom/releases/archives/miscellaneous/cb12-134.html" 
          linkText="U.S. Census, 2010"
        />
        <div style={{margin: '6rem 0'}}>
          <h2 style={{ textAlign: 'center' }}>Recent Blog Posts</h2>
          <div className="blog__items">
            {posts.map(({ node }) => {
              return(
                <div 
                  className="blog__item" 
                  style={{
                    background: '#fff', 
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.11)', 
                    padding: '1.5rem',
                    boxSizing: 'border-box',
                  }} 
                >
                  <time>{node.frontmatter.date}</time>
                  <h2 className="blog__title">{node.frontmatter.title}</h2>
                  <div><p>{node.excerpt}</p></div>
                  <Link to={node.fields.slug}>
                    Read more 
                    <span className="visually-hidden">about {node.frontmatter.title}</span>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`



