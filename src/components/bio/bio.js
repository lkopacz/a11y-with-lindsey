import React from 'react'
import headshot from './headshot.jpg'
import './bio.css'

const Bio = () => (
  <div className="featured-image-block">
    <div className="featured-image-block__wrapper">
      <div className="featured-image-block__img">
        <img src={headshot} width="100" height="100" alt="test" />
      </div>
      <div className="featured-image-block__content">
        <h2 style={{margin: 0}}>About Lindsey </h2>
        <p>Lindsey is an accessibility expert, a JavaScript lover, a Front End Developer specializing in Drupal, and passionate about inclusivity outside the web. Read more about her on the <a href="&lt;front&gt;">About Page</a></p>
      </div>
    </div>
  </div>
);

export default Bio