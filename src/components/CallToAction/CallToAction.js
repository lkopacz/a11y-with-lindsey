import React, { Children } from 'react'

import './call-to-action.css'

const CallToAction = ({ children }) => (
  <aside className="call-to-action">{children}</aside>
)

export default CallToAction
