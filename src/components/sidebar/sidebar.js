import React from 'react'
import Bio from '../bio/bio'
import Subscribe from '../subscribe/subscribe'

const Sidebar = (props) => {
  if (props.location === 'blog') {
    return (
      <aside>
        <Bio />
        <Subscribe color="#1E3650" hasBackground={true} title="Learn more about Accessibility!" id="sidebar" />
        <div className="sidebar--white-bg" style={{marginTop: '3rem', marginLeft: '-5px'}}>
          <h2 style={{ marginTop: 0 }}>Want to learn more? 👩‍🏫</h2>
          <p>I've made a playlist for Egghead PRO members!</p>
          <a href="https://egghead.io/playlists/accessibility-tips-tricks-49286904" style={
            {
              borderRadius: '5px',
              border: 'none',
              padding: '0.4375rem',
              fontWeight: 500,
              color: '#fff',
              background: '#C03711',
              display: 'inline-block'
            }
          }>
            Accessibility Tips & Tricks <span className="right-arrow"></span>
          </a>
        </div>
      </aside>
    )
  }
}



export default Sidebar

