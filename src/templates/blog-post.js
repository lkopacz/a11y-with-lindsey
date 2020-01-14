import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Bio from '../components/bio/bio'
import './blog-post.css'

const Template = ({ data: { mdx: post, site } }) => {
  const { frontmatter, excerpt, body } = post
  const siteTitle = site.siteMetadata.title
  const {
    title,
    tags,
    path,
    date,
    affiliate,
    audioLink,
    hasAudio,
    featuredImage,
  } = frontmatter

  const affiliateText =
    'This post contains affiliate links. If you buy something through those links I may earn a small commission at no cost to you. This helps pay for the costs associated with running a11y with Lindsey. I promise to only recommend products I use and love!'
  const audio = hasAudio ? audioLink : ''

  const cover = featuredImage.childImageSharp
    ? featuredImage.childImageSharp
    : false

  return (
    <div>
      <Helmet
        title={`${title} | ${siteTitle}`}
        meta={[
          {
            name: 'description',
            content: excerpt,
          },
          {
            name: 'keywords',
            content: tags.join(', '),
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
            content: title,
          },
          {
            name: 'twitter:description',
            content: excerpt,
          },
          {
            name: 'twitter:image',
            content: 'https://www.a11ywithlindsey.com' + cover.fluid.src,
          },
          {
            name: 'og:url',
            content: 'https://www.a11ywithlindsey.com' + path,
          },
          {
            name: 'og:type',
            content: 'article',
          },
          {
            name: 'og:title',
            content: title,
          },
          {
            name: 'og:image',
            content: 'https://www.a11ywithlindsey.com' + cover.fluid.src,
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
                  <li>{title}</li>
                </ol>
              </nav>
              <h1>{title}</h1>
            </div>
          </div>
          <div className="content__body">
            <div className="wrapper">
              <time>{date}</time>
              {hasAudio ? <audio src={audio} controls /> : ''}
              {affiliate ? (
                <p>
                  <em>{affiliateText}</em>
                </p>
              ) : (
                ''
              )}
              <MDXRenderer>{body}</MDXRenderer>
              <Bio />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Template

export const pageQuery = graphql`
  query BlogPostBySlug($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(frontmatter: { path: { eq: $path } }) {
      excerpt
      body
      frontmatter {
        title
        tags
        path
        date(formatString: "MMMM D, YYYY")
        affiliate
        audioLink
        hasAudio
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1240) {
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
