import React from 'react'

import './call-to-action.css'

const CallToAction = ({ link, body, linkText, title, img, imageAlt }) => (
  <aside className="call-to-action">
    <img src={img} alt={imageAlt} />
    <h2>{title}</h2>
    <p>{body}</p>
    <a href={link}>{linkText}</a>
  </aside>
)

export default CallToAction
