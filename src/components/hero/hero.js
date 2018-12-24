import React from 'react'
import './hero.css'

const Hero = (props) => (
  <div className="hero">
    <div className="hero__background-image">
			<img src={props.img} width="4831" height="3221" alt="" typeof="foaf:Image" />
		</div>
    <div className="hero__text-wrapper">
      <h2 style={{fontSize: '3rem', margin: 0}}>{props.header}</h2>
      <div className="hero__body" style={{fontSize: '1.5rem', margin: '0 auto 10px', boxSizing: 'border-box'}}>
        <p>To help developers navigate accessibility jargon, write better code, 
          <span className="hero__body--break">and to empower them to make their Internet, </span>
          <span className="hero__body--break"><strong>Everyone's Internet.</strong></span>
        </p>
      </div>
      <div className="hero__cta">
        <a href="http://eepurl.com/dy1USP">Get Updates</a>
      </div>
    </div>
  </div>
);

export default Hero;