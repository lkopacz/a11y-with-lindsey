import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'


const About = ({data}) => (
  <div>
    <Helmet title="a11y with Lindsey - About" />
    <div className="main">
      <nav className="breadcrumb">
        <ol>
          <li>
            <a href="/">Home</a>
          </li>
          <li>About</li>
        </ol>
      </nav>
      <h1>About</h1>
      <p>My passion for web accessibility started in 2016, 
        when I realized how much it combined my love of technology 
        and the web with my passion of diversity and inclusion. 
        I stopped thinking about it as a purely technical issue and 
        more of an empathy and inclusion issue. After that, my love and 
        desire to teach people about it and how approachable the problem can be has been my 
        desire to create this blog.</p>
      <blockquote>
      My mission is to empower developers to make their Internet, <strong>everyone's</strong> Internet.
      </blockquote>

      <p>My approach to accessibility focuses more on the human aspect and 
        less on the technical. Don't get me wrong, as a detail oriented person, 
        we do get into the technical nitty gritty. However, it is my believe that 
        anyone can code, but human empathy is something we are born with. I would 
        rather tap into your empathetic nature to understand <strong>why</strong> before 
        the how.</p>
        
      <h2>My Story</h2>

      <p>I've been passionate about accessibility since 2016, but because I am able-bodied, 
        I never was able to fully relate to anyone with a physical disability.</p>

      <p>Back in September of 2017, I dropped a 45lb plate on the tip of my finger while 
        I was at the gym at the squat rack. It turns out I had broken my right middle finger. 
        It wasn't until that day that I realized how much we take our able-bodies for granted. 
        I never realize how important my middle right finger was to my entire day until I was 
        unable to use it. I was unable to use my mouse. I was unable to type in the way that 
        I was used to. I had difficulty chopping veggies. My whole life was impacted for 2 months 
        because the technology and day to day things I use, do not take into account people with a 
        broken finger.</p>

      <blockquote>
      At any given time in our life, we can become temporarily or permanently disabled.
      </blockquote>

      <p>As someone whose specialty is in web accessibility, it was an eye-opening experience 
        for me. It changed how I think about accessibility, how I empathize with my end users, 
        and it also changed my perspective on user experience. My goal is to help others learn 
        about web accessibility by sharing why it's important. Once I learned why my skills as 
        a developer improved tremendously.</p>
    
      <h2>About Me</h2>
      <p>I am a self-taught web developer with 4 years of experience. I taught myself by 
        studying for 1 hour before my day job every single day. That is the same drive I am 
        bringing to this blog, and to my business.</p>

      <p>Currently, I am a front-end developer who specializes in Drupal. In my free time, I also help 
        with website development for <a href="https://www.drupalgovcon.org/">Drupal GovCon</a> and I also 
        help lead the Front End Group for <a href="https://www.womenwhocode.com/dc">Women Who Code DC</a>. 
        My interests vary depending on the topic, but I love fitness, learning more about JavaScript, marketing, 
        craft beer, cooking, and my cat!</p>
    </div>
  </div>
)

export default About

    





  