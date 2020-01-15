import React from 'react'

import './call-to-action.css'

const CallToAction = ({ link, linkText, body, title }) => (
  <aside className="call-to-action">
    <h2>{title}</h2>
    <p>{body}</p>
    <a href={link}>{linkText}</a>
  </aside>
)

export default CallToAction
