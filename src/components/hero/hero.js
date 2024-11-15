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
            and to empower them to make the Internet,{' '}
          </span>
          <span className="hero__body--break">
            <strong>An Inclusive Internet.</strong>
          </span>
        </p>
      </div>
    </div>
  </div>
)

export default Hero
