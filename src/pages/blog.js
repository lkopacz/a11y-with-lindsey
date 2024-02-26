import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class BlogIndex extends React.Component {
  render() {
    const siteTitle =
      'Blog | ' + get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMdx.nodes')

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
                <p style={{ fontStyle: 'italic' }}>
                  Note: this blog is an archive and not actively maintained.
                  Some information may be out of date. If you'd like to see what
                  I am working on or work with me in a consulting capacity,
                  visit my website{' '}
                  <a href="https://lindseykopacz.com/">lindseykopacz.com</a>.
                </p>
                {posts.map(({ excerpt, frontmatter }, i) => {
                  return (
                    <article
                      style={{ marginTop: 24, marginBottom: 24 }}
                      key={i}
                    >
                      <h2 style={{ marginTop: 10, marginBottom: 10 }}>
                        <Link
                          style={{ boxShadow: 'none' }}
                          to={frontmatter.path}
                        >
                          {frontmatter.title}
                        </Link>
                      </h2>
                      <time>{frontmatter.date}</time>
                      <p dangerouslySetInnerHTML={{ __html: excerpt }} />
                    </article>
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
