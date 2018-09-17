import React from 'react'
import Bio from '../bio/bio'

const Sidebar = (props) => {
  if (props.location === 'blog') {
    return (
      <aside>
        <Bio />
      </aside>  
    )
  }
}

  

export default Sidebar

