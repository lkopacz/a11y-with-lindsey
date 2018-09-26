import React from 'react'
import Link from 'gatsby-link'
import './hero.css'

const Hero = (props) => (
  <div className="hero">
    <h2 style={{fontSize: '3rem', margin: 0}}>{props.header}</h2>
    <div className="hero__background-image">
			<img src={props.img} width="4831" height="3221" alt="" typeof="foaf:Image" />
		</div>
    <div className="hero__text-wrapper">
      <div className="hero__body" style={{fontSize: '1.5rem', width: '57%', margin: '0 auto 10px'}}>
        <p>Empowering and teaching developers to make their Internet, <br/><strong>Everyone's Internet.</strong></p>
      </div>
      <div className="hero__cta">
        <Link to="/about">About Me</Link>
      </div>
    </div>
  </div>
);

export default Hero;