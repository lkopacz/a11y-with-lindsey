import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Bio from '../components/bio/bio'
import './blog-post.css'

export default function Template({ data }) {
  const { markdownRemark } = data
  const siteTitle = data.site.siteMetadata.title
  const { frontmatter, html, excerpt } = markdownRemark

  const affiliate =
    'This post contains affiliate links. If you buy something through those links I may earn a small commission at no cost to you. This helps pay for the costs associated with running a11y with Lindsey. I promise to only recommend products I use and love!'
  const audio = frontmatter.hasAudio ? frontmatter.audioLink : ''
  const cover = frontmatter.featuredImage.childImageSharp
    ? frontmatter.featuredImage.childImageSharp
    : false
  return (
    <div>
      <Helmet
        title={`${frontmatter.title} | ${siteTitle}`}
        meta={[
          {
            name: 'description',
            content: excerpt,
          },
          {
            name: 'keywords',
            content: frontmatter.tags.join(', '),
          },
          {
            name: 'twitter:card',
            content: 'summary_large_image',
          },
          {
            name: 'twitter:site',
            content: '@littlekope0903',
          },
          {
            name: 'twitter:creator',
            content: '@littlekope0903',
          },
          {
            name: 'twitter:title',
            content: frontmatter.title,
          },
          {
            name: 'twitter:description',
            content: excerpt,
          },
          {
            name: 'twitter:image',
            content: 'https://www.a11ywithlindsey.com' + cover.sizes.src,
          },
          {
            name: 'og:url',
            content: 'https://www.a11ywithlindsey.com' + frontmatter.path,
          },
          {
            name: 'og:type',
            content: 'article',
          },
          {
            name: 'og:title',
            content: frontmatter.title,
          },
          {
            name: 'og:image',
            content: 'https://www.a11ywithlindsey.com' + cover.sizes.src,
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
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>{frontmatter.title}</li>
                </ol>
              </nav>
              <h1>{frontmatter.title}</h1>
            </div>
          </div>
          <div className="content__body">
            <div className="wrapper">
              <time>{frontmatter.date}</time>
              {frontmatter.hasAudio ? <audio src={audio} controls /> : ''}
              {frontmatter.affiliate ? (
                <p>
                  <em>{affiliate}</em>
                </p>
              ) : (
                ''
              )}
              <div dangerouslySetInnerHTML={{ __html: html }} />
              <p>Stay in touch! If you liked this article:</p>
              <ul>
                <li>
                  Let me know on{' '}
                  <a href="https://twitter.com/LittleKope">Twitter</a> and share
                  this article with your friends! Also, feel free to tweet me
                  any follow up questions or thoughts.
                </li>
                <li>
                  Support me on{' '}
                  <a href="https://www.patreon.com/a11ywithlindsey">patreon</a>!
                  If you like my work, consider making a $1 monthly pledge.
                  You’ll be able to vote on future blog posts if you make a $5
                  pledge or higher! I also do a monthly Ask Me Anything Session
                  for all Patrons!
                </li>
                <li>
                  <a href="https://pages.convertkit.com/4218bd5fb5/68dc4e412a">
                    Be the first to learn about my posts
                  </a>{' '}
                  for more accessibility funsies!
                </li>
              </ul>
              <p>Cheers! Have a great week!</p>
              <Bio />
            </div>
          </div>
        </main>
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
        affiliate
        hasAudio
        audioLink
        featuredImage {
          childImageSharp {
            sizes(maxWidth: 1240) {
              srcSet
              sizes
              src
            }
          }
        }
      }
    }
  }
`
