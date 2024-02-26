import React from 'react'
import { Link, graphql } from 'gatsby'
import Hero from '../components/hero/hero'
import webflow from './webflow.svg'
import get from 'lodash/get'
import './index.css'

class IndexPage extends React.Component {
  render() {
    let posts = get(this, 'props.data.allMdx.nodes')
    posts = posts.slice(0, 3)

    return (
      <main id="main-content">
        <Hero header="My Mission" />
        <div className="blog">
          <h2>Recent Blog Posts</h2>
          <div className="blog__items">
            <p style={{ fontStyle: 'italic' }}>
              Note: this blog is an archive and not actively maintained. Some
              information may be out of date. If you'd like to see what I am
              working on or work with me in a consulting capacity, visit my
              website <a href="https://lindseykopacz.com/">lindseykopacz.com</a>
              .
            </p>
            {posts.map(({ excerpt, frontmatter }, i) => {
              return (
                <article key={i} className="blog__item">
                  <h3 className="blog__title">
                    <Link to={frontmatter.path}>{frontmatter.title}</Link>
                  </h3>
                  <time>{frontmatter.date}</time>
                  <div>
                    <p>{excerpt}</p>
                  </div>
                </article>
              )
            })}
          </div>
          <div className="blog__more">
            <Link to="/blog" className="blog__more-link">
              See All Blog Posts
            </Link>
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
    allMdx(
      filter: { frontmatter: { draft: { eq: false } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        excerpt
        frontmatter {
          path
          title
          date(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
`
