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
            <Link to="/">Home</Link>
          </li>
          <li>About</li>
        </ol>
      </nav>
      <h1>About</h1>
      <p>I started learning about web accessibility started in 2016 when I got 
        a ticket at work to do some accessibility testing. I was told to 
        download the Wave chrome extension and make a ticket for every 
        error or alert that we came across. Quite frankly, I was copying 
        and pasting the errors, having no clue what any of them meant. 
        I knew accessibility was important, but I had no idea what any 
        of it meant.</p>

      <p>It wasn't until 2016 Tech Lady Hackathon (now Tech Rebalanced) where 
        I challenged myself to speak about accessibility publicly that I forced 
        myself to understand why it's important. I tried to explain it to my former 
        and current self and had many a-ha moments. I was honest in explaining 
        those to my audience and a lot of people came to me afterwards telling 
        me how much they connected to it.</p>

      <p>I realized how much accessibility combined my love of technology 
        and the web with my passion of diversity and inclusion. Accessibility literally 
        helps people access the web and assures everyone can use your technology.
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
      <p>I am a self-taught web developer with 4 years of <em>professional</em> experience. When 
        I was starting out, I taught myself by studying for 1 hour before my desk job every single 
        day. I started getting involved with the Drupal Community and that landed me my first job. 
        That is the same drive I am bringing to this blog, and to my business.</p>

      <p>Currently, I am a front-end developer who specializes in Drupal with Acquia Professional Services. 
        In my free time, I also help lead the Front End Group for <a href="https://www.womenwhocode.com/dc">Women Who Code DC</a>. 
        My interests vary depending on the topic, but I love weight lifting, makeup artistry, learning more 
        about JavaScript, marketing, craft beer, cooking, and my cat!</p>
    </div>
  </div>
)

export default About

    





  