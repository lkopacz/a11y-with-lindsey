import React from 'react'
import Hero from '../components/hero/hero'
import Quote from '../components/quote/quote'
import computer from '../images/computer.jpg'
import Subscribe from '../components/subscribe/subscribe'

const IndexPage = () => (
  <div>
    <Hero header="My Mission" img={computer} />
    <Quote 
      header="Did you know?" 
      text="Nearly 1 in 5 People Have a Disability in the U.S." 
      link="https://www.census.gov/newsroom/releases/archives/miscellaneous/cb12-134.html" 
      linkText="U.S. Census, 2010"
    />
    <Subscribe />
  </div>
)

export default IndexPage


