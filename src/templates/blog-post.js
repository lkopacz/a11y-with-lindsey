import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Sidebar from '../components/sidebar/sidebar'
import './blog-post.css'

export default function Template({ data }) {
  const { markdownRemark } = data
  const siteTitle = data.site.siteMetadata.title;
  const { frontmatter, html, excerpt } = markdownRemark
  const { src, srcSet, sizes } = frontmatter.cover_image.childImageSharp.responsiveSizes;


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
            },
            {
              name: "twitter:card",
              content: "summary_large_image"
            },
            {
              name: "twitter:site",
              content: "@littlekope0903"
            },
            {
              name: "twitter:creator",
              content: "@littlekope0903"
            },
            {
              name: "twitter:title",
              content: frontmatter.title
            },
            {
              name: "twitter:description",
              content: excerpt
            },
            {
              name: "twitter:image",
              content: "https://www.a11ywithlindsey.com" + src
            },
            {
              name: "og:url",
              content: "https://www.a11ywithlindsey.com" + frontmatter.path
            },
            {
              name: "og:type",
              content: "article"
            },
            {
              name: "og:title",
              content: frontmatter.title
            },
            {
              name: "og:image",
              content: "https://www.a11ywithlindsey.com" + src
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
            <img className="cover" srcSet={srcSet} sizes={sizes} src={src} alt="" />
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
        cover_image {
          childImageSharp {
            responsiveSizes(maxWidth: 590) {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`