import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import StripePreorder from '../components/stripe-preorder/StripePreorder'
import Cover from '../images/cover.png'

const Gift = () => {
  return (
    <div>
      <Helmet title="The Bootcamper's Guide to Web Accessibility | a11y with Lindsey" />
      <div className="content">
        <main id="main-content">
          <div className="content__heading">
            <div className="wrapper">
              <nav className="breadcrumb">
                <ol>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>The Bootcampers Guide to Web Accessibility</li>
                </ol>
              </nav>
              <h1>The Bootcampers Guide to Web Accessibility</h1>
            </div>
          </div>
          <div className="content__body">
            <div className="wrapper">
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
                <p>And much more 🤓 for the low price of $19.97</p>
              </div>
              <div style={{ margin: '3.25rem 0' }}>
                <h2>Ordering for one person?</h2>
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
                  Order through Convertkit
                </a>
              </div>
              <StripePreorder />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Gift
