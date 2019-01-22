import React from 'react'
import Bio from '../bio/bio'
import Subscribe from '../subscribe/subscribe'

const Sidebar = (props) => {
  if (props.location === 'blog') {
    return (
      <aside>
        <Bio />
        <Subscribe color="#1E3650" hasBackground={true} title="Learn more about Accessibility!" id="sidebar" />
      </aside>
    )
  }
}



export default Sidebar

