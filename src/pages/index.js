import React from 'react'
import Link from 'gatsby-link'
import Hero from '../components/hero/hero'
import Quote from '../components/quote/quote'
import computer from '../images/computer.jpg'
import get from 'lodash/get'
import './index.css'

class IndexPage extends React.Component {
  render() {
    let posts = get(this, 'props.data.allMarkdownRemark.edges')
    posts = posts.slice(0, 3);

    return (
      <main id="main-content">
        <Hero header="My Mission" img={computer} />
        <Quote 
          header="Did you know?" 
          text="Nearly 1 in 5 People in the U.S. Have a Disability." 
          link="https://www.census.gov/newsroom/releases/archives/miscellaneous/cb12-134.html" 
          linkText="U.S. Census, 2010"
        />
        <div className="block">
          <h2 className="block__header">What is "a11y?"</h2>
          <div className="block__body">
            <p>"a11y" stands for accessibility. It comes from the 11 letters between 
            the first and last letter. This has become a common phrase for 
            Web Accessibility.</p>
          </div>
        </div>
        <div className="block">
          <h2 className="block__header">What to expect from this blog?</h2>
          <div className="block__body">
            <p>I plan to write mostly about web accessibility. However, sometimes you'll 
            see a sprinkle of entreprenuership, mental health, and working remotely.</p>
          </div>
        </div>
        <div style={{margin: '6rem 0'}}>
          <h2 style={{ textAlign: 'center' }}>Recent Blog Posts</h2>
          <div className="blog__items">
            {posts.map(({ node }) => {
              return(
                <div 
                  className="blog__item" 
                  style={{
                    margin: '1.5rem 0',
                    padding: '1.5rem',
                    background: '#fff', 
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.11)',
                    boxSizing: 'border-box',
                  }} 
                >
                  <time>{node.frontmatter.date}</time>
                  <h2 className="blog__title">{node.frontmatter.title}</h2>
                  <div><p>{node.excerpt}</p></div>
                  <Link to={node.frontmatter.path}>
                    Read more 
                    <span className="visually-hidden">about {node.frontmatter.title}</span>
                  </Link>
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



