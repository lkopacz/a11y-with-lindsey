import React from 'react'
import headshot from './headshot.jpg'
import Link from 'gatsby-link'
import './bio.css'

const Bio = () => (
  <div className="featured-image-block">
    <div className="featured-image-block__wrapper">
      <div className="featured-image-block__img">
        <img src={headshot} width="100" height="100" alt="" />
      </div>
      <div className="featured-image-block__content">
        <h2 style={{margin: 0}}>About Lindsey </h2>
        <p>Lindsey is an accessibility expert, JavaScript lover, and Front End Developer who's passionate about 
        inclusivity both inside and outside the web. Read more 
        about her on the <Link to="/about">About Page</Link></p>
      </div>
    </div>
  </div>
);

export default Bio