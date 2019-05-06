import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Sidebar from '../components/sidebar/sidebar'

import './support.css'

const SupportMe = ({ data }) => (
  <div>
    <Helmet
      title="Support Me | a11y with Lindsey"
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
    <div className="wrapper with-sidebar">
      <nav className="breadcrumb">
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Support Me</li>
        </ol>
      </nav>
      <div className="content">
        <main id="main-content">
          <h1>Support Me</h1>
          <p>
            I've created a patreon to both support my writing and reward the
            people who subscribe to it! Here are the current levels:
          </p>
          <ul>
            <li>
              <strong>Thank you - $1</strong>: This is for people who don't have
              a lot to give, but also want to support me!
            </li>
            <li>
              <strong>Vote on future posts - $5</strong>: You can vote on the
              blog topic for the week! I'll be doing this twice a month!
            </li>
            <li>
              <strong>Supporter - $10</strong>: If you subscribe to this tier
              you'll get a shout out on my Supporter Page of my blog. Plus you
              get to vote like the previous tier!
            </li>
            <li>
              <strong>Top Supporter - $20</strong>: If you subscribe to this
              tier you'll get a shout out on my Top Supporter Page of my blog.
              Plus you get to vote like the previous tiers!
            </li>
          </ul>
          <div className="cta">
            <a href="https://www.patreon.com/a11ywithlindsey">
              Support me on Patreon!
            </a>
          </div>

          <h2>Top Supporters - $20 Tier</h2>
          <div className="supporters-tier__top">
            <p>
              There are currently no patrons at this level.{' '}
              <a href="https://www.patreon.com/join/a11ywithlindsey">
                Make a pledge
              </a>
              .
            </p>
          </div>
          <h2>Supporters - $10 Tier</h2>
          <div className="supporters-tier">
            <ul>
              <li>Alex Riviere</li>
              <li>Craig Drummond</li>
              <li>Jessica Dembe</li>
            </ul>
          </div>
        </main>
        <Sidebar location="blog" />
      </div>
    </div>
  </div>
)

export default SupportMe
