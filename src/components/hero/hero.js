import React from 'react'
import './hero.css'

const Hero = props => (
  <div className="hero">
    <div className="hero__text-wrapper">
      <h2 style={{ fontSize: '3rem', margin: 0 }}>{props.header}</h2>
      <div
        className="hero__body"
        style={{
          fontSize: '1.5rem',
          margin: '0 auto 10px',
          boxSizing: 'border-box',
        }}
      >
        <p>
          To help developers navigate accessibility jargon, write better code,
          <span className="hero__body--break">
            and to empower them to make their Internet,{' '}
          </span>
          <span className="hero__body--break">
            <strong>Everyone's Internet.</strong>
          </span>
        </p>
      </div>
      <div className="hero__cta">
        <a
          className="hero__cta__link"
          href="https://pages.convertkit.com/4218bd5fb5/68dc4e412a"
        >
          Get Updates <span className="right-arrow" />
        </a>
      </div>
    </div>
  </div>
)

export default Hero
