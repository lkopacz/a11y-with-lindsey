import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

const Contact = ({ data }) => (
  <div>
    <Helmet
      title="Contact | a11y with Lindsey"
      meta={[
        {
          name: 'description',
          content:
            "a11y with Lindsey, where we want to make our internet, Everyone's internet!",
        },
        {
          name: 'keywords',
          content: 'accessibility, DC, inclusion, empathy',
        },
      ]}
    />
    <div className="wrapper">
      <nav className="breadcrumb">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Contact</li>
        </ol>
      </nav>
      <div className="content">
        <main id="main-content">
          <h1>Contact</h1>
          <p>
            The best way to contact me for a quick question is on{' '}
            <a href="https://twitter.com/LittleKope">my Twitter page.</a>
          </p>
          <p>
            Feel free to reach out to me for speaking inquiries, blog
            partnerships, or if you have questions or comments feel free to
            email me at{' '}
            <a href="mailto:hello@a11ywithlindsey.com">
              hello@a11ywithlindsey.com
            </a>
          </p>
          <p>
            To get updates from me, to get discounts on my upcoming content,{' '}
            <a href="https://pages.convertkit.com/4218bd5fb5/68dc4e412a">
              subscribe to my newsletter
            </a>
          </p>
        </main>
      </div>
    </div>
  </div>
)

export default Contact
