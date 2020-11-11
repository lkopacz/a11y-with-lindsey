import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Cover from '../images/cover.png'

const PreOrder = () => {
  return (
    <div>
      <Helmet title="Pre-order | a11y with Lindsey" />
      <div className="content">
        <main id="main-content">
          <div className="content__heading">
            <div className="wrapper">
              <nav className="breadcrumb">
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Pre-order The Bootcampers Guide to Web Accessibility</li>
                </ol>
              </nav>
              <h1>Pre-order The Bootcampers Guide to Web Accessibility</h1>
            </div>
          </div>
          <div className="content__body">
            <div className="wrapper">
              <p>
                Preorder price has ended. You can now order the book for $19.97
              </p>
              <a
                style={{
                  borderRadius: '16px',
                  border: '2px solid',
                  padding: '12px 14px',
                  fontWeight: 500,
                  fontSize: '1.25rem',
                  // margin: '1rem 0',
                  display: 'inline-block',
                }}
                href="https://a11y-with-lindsey.ck.page/products/pre-order-the-bootcampers-guide-to-web"
              >
                Order through Convertkit
              </a>
              <div className="landing-page">
                <img
                  src={Cover}
                  alt=""
                  width="200"
                  style={{ float: 'left', marginRight: '2rem' }}
                />
                <p>
                  <strong>
                    Accessibility is often glazed over in education. I'm
                    creating a guide of everything I've learned as a self-taught
                    accessibility expert to help bootcampers and self-guided
                    learners.
                  </strong>
                </p>
                <p>
                  Accessibility is often glazed over in education. I'm creating
                  a guide of everything I've learned as a self-taught
                  accessibility expert to help bootcampers and self-guided
                  learners.
                </p>
                <p>
                  As our industry expands to include more self-guided learners
                  and bootcamp graduates, unfortunately, we have to start
                  seeking out accessibility education on our own. Most
                  introductions to HTML classes don't even mention
                  accessibility.
                </p>
                <p>
                  After reading my ebook, you'll understand:
                  <ul>
                    <li>
                      The crucial takeaways of Accessibility standards, making
                      them less intimidating
                    </li>
                    <li>
                      The negative impact of inaccessible sites and web apps
                    </li>
                    <li>
                      The most common accessibility errors and how to fix them
                    </li>
                    <li>
                      Common interactive patterns in JavaScript (and React)
                    </li>
                    <li>How to comprehensively test</li>
                  </ul>
                </p>
                <p>And much more 🤓</p>
                <p>
                  I'll be launching the ebook on November 2nd.{' '}
                  <strong>
                    People who pre-order the ebook will pay the low price of
                    $9.97
                  </strong>
                  , which will increase post launch. 15% of all profits will go
                  to the Equal Justice Initiative.
                </p>
              </div>
              <a
                style={{
                  borderRadius: '16px',
                  border: '2px solid',
                  padding: '12px 14px',
                  fontWeight: 500,
                  fontSize: '1.25rem',
                }}
                href="https://a11y-with-lindsey.ck.page/products/pre-order-the-bootcampers-guide-to-web"
              >
                Order here for $19.97
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default PreOrder
