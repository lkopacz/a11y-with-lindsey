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
            {posts.map(({excerpt, frontmatter}, i) => {
              return (
                <div key={i} className="blog__item">
                  <h3 className="blog__title">
                    <Link to={frontmatter.path}>
                      {frontmatter.title}
                    </Link>
                  </h3>
                  <time>{frontmatter.date}</time>
                  <div>
                    <p>{excerpt}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="blog__more">
            <Link to="/blog" className="blog__more-link">
              See All Blog Posts
            </Link>
          </div>
        </div>
        <div className="support">
          <div className="wrapper">
            <h2>Supporters</h2>
            <p>
              Thank you to my supporters! Supporting me financially helps me
              dedicate more time to writing great content!
            </p>
            <h3>Top Supporters - $20 Tier or more</h3>
            <div className="supporters-tier supporters-tier--top">
              <ul>
                <li>
                  <a
                    href="https://webflow.com/"
                    style={{ padding: 0, border: 0 }}
                  >
                    <img src={webflow} alt="Webflow's website" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/er1p">Erik Riedel</a>
                </li>
                <li>
                  Simon Welsh</li>
              </ul>
            </div>
            <h3>Supporters - $10 Tier</h3>
            <div className="supporters-tier">
              <ul>
                <li>
                  <a href="https://twitter.com/fimion">Alex Riviere</a>
                </li>
                <li>
                  <a href="https://twitter.com/JS_Jedi">Craig Drummond</a>
                </li>
                <li>Simon Siefke</li>
              </ul>
            </div>
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

  // allMdx(
  //   filter: { frontmatter: { draft: { eq: false } } }
  //   sort: { order: DESC, fields: frontmatter___date }
  // ) {
  //   edges {
  //     node {
  //       excerpt
  //       frontmatter {
  //         date(formatString: "MMMM D, YYYY")
  //         title
  //         path
  //       }
  //     }
  //   }
  // }