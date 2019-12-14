import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import selfie from '../../static/Lindsey.jpg'
import halloween from '../../static/Halloween.jpg'

const About = () => (
  <div>
    <Helmet
      title="About | a11y with Lindsey"
      meta={[
        {
          name: 'description',
          content:
            "In 2017, I broke my right middle finger. It wasn't until then I realized how much we take our ability for granted. At any given time, we can become temporarily or permanently disabled.",
        },
        {
          name: 'keywords',
          content: 'accessibility, DC, inclusion, empathy',
        },
      ]}
    />
    <div className="content">
      <main id="main-content">
        <div className="content__heading">
          <div className="wrapper">
            <nav className="breadcrumb">
              <ol>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>About</li>
              </ol>
            </nav>
            <h1>About</h1>
          </div>
        </div>
        <div className="content__body">
          <div className="wrapper">
            <p
              style={{
                fontSize: '2rem',
                textAlign: 'center',
              }}
            >
              👋🏻 Hi! I am Lindsey! I am so glad you're here!
            </p>
            <img
              src={selfie}
              alt=""
              style={{
                width: '30%',
                float: 'left',
                marginRight: '1rem',
                minWidth: '200px',
              }}
            />
            <p>
              I am a self-taught web developer with ADHD. I never really
              considered myself cognitively disabled, despite how much I
              struggled teaching myself to code. When I was starting out, I
              taught myself by studying for 1 hour before my desk job every
              single day. That's more time than a lot of people have, but it
              took me 18 months to get my first developer job in May 2014. Even
              then, I felt behind. I felt like I didn't understand "simple"
              things.
            </p>
            <p>
              Then in 2016, I learned about web accessibility. I got a ticket at
              work to do some accessibility testing. I was told to download the
              Wave chrome extension and make a ticket for every error or alert
              that we came across. Quite frankly, I was copying and pasting the
              errors, having no clue what any of them meant. I didn't have any
              concept of how to fix any of them.
            </p>
            <p>
              That's when I started really diving in and learning why it was
              important. Once I did that, the errors became so much easier to
              decipher.
            </p>

            <h2>Learning about Ableism</h2>
            <p>
              Back in September of 2017, I dropped a 45lb plate on the tip of my
              finger while I was at the gym at the squat rack. It turns out I
              had broken my right middle finger. It wasn't until that day that I
              realized how much I centered around my own abled body experience.
              I was unable to use my mouse. I was unable to type in the way that
              I was used to. I had difficulty chopping veggies. My whole life
              was impacted for 2 months because the technology and day to day
              things I use, do not take into account people with a broken
              finger.
            </p>
            <p>I was selfish.</p>
            <p>
              This story made me think, EVERYONE will have the need for
              accessibility at some point. I have previously used the phrase
              "Accessibility is for everyone". Sure, it does benefit everyone.
              But I have learned so much in the past year about my own ableism.
              This perspective centers around me, a physically abled person, not
              around the people I ultimately want to make space for in this
              Internet space.
            </p>
            <p>
              As someone whose specialty is in web accessibility, it was an
              eye-opening experience for me to realize how much I had framed
              accessibility. How I hadn't really reflected about my own ableism.
              It changed how I think about accessibility, how I empathize with
              my end users, and it also changed my perspective on user
              experience. My goal is to help others learn about web
              accessibility by sharing why it's important. Once I learned why my
              skills as a developer improved tremendously.
            </p>
            <blockquote>
              I'm on my journey to becoming anti-ableist. <br />
              I'd love to have you join me.
            </blockquote>

            <h2>Why I created this blog</h2>
            <p>
              I want people to confront their own ableism and use their tech
              skills to make the web more accessible. Accessibility literally
              helps a marginalized group of people access the web and assures
              they aren't excluded from using your technology. I stopped
              thinking about it as a purely technical issue and more of an
              inclusion and trust issue. After that, my love and desire to teach
              people about it and how approachable the problem can be has been
              my desire to create this blog.
            </p>
            <blockquote>
              My mission is to empower developers to make their Internet,{' '}
              <strong>an inclusive</strong> Internet.
            </blockquote>
            <p>
              My approach to accessibility focuses more on the human aspect and
              less on the technical. Don't get me wrong, as a detail-oriented
              person, we do get into the technical nitty gritty. However, it is
              my belief that anyone can learn to code, but human trust and
              compassion is something we are born with. I would rather tap into
              your empathetic nature to understand <strong>why</strong> before
              the how.
            </p>
            <h2>A Bit More About Me</h2>
            <p>
              Currently, I am a software developer who works as a contractor for
              the government. I play around a lot with React and data viz at my
              day job and a lot of it inspires my blog posts. My day job also
              inspires a lot of my{' '}
              <a href="https://egghead.io/instructors/lindsey-kopacz">
                Egghead videos
              </a>
            </p>
            <p>
              My interests vary depending on the topic, but I love weight
              lifting, makeup artistry, learning more about JavaScript,
              marketing, craft beer, cooking, and my cat!
            </p>
            <img
              src={halloween}
              alt="Lindsey with her upper half of her face covered in blue, pink, and black colors being an interpretation of a galaxy."
              style={{
                width: '30%',
                display: 'block',
                margin: '0 auto',
                minWidth: '200px',
              }}
            />
            <p>
              Stay in touch! If you want to hear more from me and when my next
              blog post comes out,{' '}
              <a href="https://a11y-with-lindsey.ck.page/4218bd5fb5">
                sign up for updates
              </a>
              .
            </p>
          </div>
        </div>
      </main>
    </div>
  </div>
)

export default About
