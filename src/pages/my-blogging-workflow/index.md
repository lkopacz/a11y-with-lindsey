---
title: 'My Blogging Editing Process'
date: '2019-05-28'
path: '/blog/blogging-editing-process'
tags: ['blogging', 'adhd', 'editing', 'accessibility']
published: true
affiliate: false
featuredImage: './blogging-editing-process.png'
---

<span lang="sv">Hej från sverige!</span> I’m writing this from Stockholm Airport! I’m on my way to Copenhagen to visit a friend (although when I publish this, I likely will be back in America). I am coming back into my blogging headspace after a bit of a wild week. I spoke about JavaScript and Accessibility for the Spotify Engineering team! Preparing to speak for my first time internationally was rough. However, I cannot even begin to explain how rewarding this experience has been. It’s a talk I’ve wanted to give for a long time, and for a good reason. It was well received, and I had many folks come up to me afterward.

This post isn’t going to be a talk about speaking. I wanted to give you a glimpse because if you don’t follow me on Twitter, you would have no idea! Onto blogging!

A few weeks ago, I asked people if they had an interest in my blog editing process. I’m very public about my writing process, and the idea popped into my head.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Random question: would people be interested to hear about my editing process?<br><br>I have ADHD and I&#39;m a Type A perfectionist. Editing used to be a challenge, but I&#39;ve gotten way better and shortened my process a ton! <a href="https://t.co/3HdXdgHMM1">https://t.co/3HdXdgHMM1</a></p>&mdash; Lindsey Kopacz 🐞in Stockholm 🇸🇪 (@LittleKope) <a href="https://twitter.com/LittleKope/status/1124278521378037760?ref_src=twsrc%5Etfw">May 3, 2019</a></blockquote>

I had an overwhelming response that said yes. I also asked on my [Patreon](https://www.patreon.com/join/a11ywithlindsey). While my last post about [JavaScript and Accordions](/blog/javascript-accessibility-accordions) won out, this topic was a close second. So here we are!

## Starting out

First comes writing the thing. Many people have formats like writing outlines and where their points are. I wish I could say I consistently write outlines...but I don’t. I either look to Patreon, Twitter, or a long list of ideas I have written down and pick a topic and get to writing.

Instead of creating a formal outline, I pull up my Markdown file. In the markdown file, I start creating headings about how I want to group my thoughts. These headings are pseudo outlining, I suppose, but I don’t go through the bullet-pointed list. I tend to add structure during my editing process and let my creative juices flow. I firmly believe that my blog posts are unique because I start this way, then make it more coherent later. That energy is part of who I am, and I also think it helps me relate to people and helps me creatively solve problems.

![Writing a list.](https://media.giphy.com/media/IuMDWLXhjOQ1O/giphy.gif)

If you struggle with feeling all over the place, remember you can always edit it out later. I use tools to help me edit my sloppy writing into cohesive sentences. Some of my best writing comes from going with the flow.

My only exception is when I write code-heavy posts, which takes a little more planning.

### If I am writing my code-heavy posts

If I am writing a more technical blog post, writing code samples is the most time-consuming part. I try to note when I want to schedule a blog post because writing coding examples from scratch adds time. I should take my advice - I still think I can write these on a Sunday afternoon. Then it ends up taking 3-4 more days than I thought it would.

I tend to be more outlined in these posts than usual because these types of posts follow a step by step nature. I like to organize how **I would solve the problem** first. My blogging organization for code-heavy posts is about the following:

1. Come up with a goal of what I want to teach and what type of examples I would want to do.
2. Create a few CodePen's showing where I want to be at different stages of the code
3. Through each step of the code, use the markdown code syntax and `diff` to show where the code changes

````
```diff
- some code I am deleted
+ some code I am adding
```
````

![Cat Programming at a computer.](https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif)

I try not to overanalyze this part because as I said before, it is the most time-consuming part. The more I overanalyze, the longer it takes me to write my code.

## The Editing Process

The editing process has been one of the hardest things for me to learn. I often get distracted, but I also have perfectionist tendencies. The anxiety of leaving an error or typo is challenging to overcome. Logically, I know it is not the end of the world. Editing used to turn into a long process. Every single time I paused or got distracted, I would lose my place and start over.

I’ve refined my process a bit based on tips I’ve received from friends and what works best from me.

### Run through Hemingway

When I was researching [accessibility and dyslexia](/blog/learn-dyslexia-web), I found the [Hemingway App](http://hemingwayapp.com). It quickly became one of my favorite tools. This app lets you know when your sentences are becoming hard to read. It’s a helpful first step for me in narrowing down the creative energy into cohesion. It helps me translate any word vomit into coherent sentences. The app also catches wordiness, useless adverbs, passive voice, etc.

### Run it through Grammarly

I love the [Grammarly app](https://www.grammarly.com/)! I pay for the premium version, but the free version is excellent as well! Grammarly helps me catch many typos, words I use too often, and improper punctuation. With the paid version, it even knows to capitalizes CSS and HTML. These corrections are a feature where you can specify that you are writing something technical (this is for the Premium version).

### Run it through VoiceOver

This is my favorite part of the process. I learned the commands of VoiceOver as I learn about accessibility. VoiceOver is the built-in screen reader for MacOS. I had never thought to have it read to me as a way to edit until one of my Twitter followers suggested it!

To have VoiceOver start reading it to me, I will:

1. Turn on voiceover by pressing cmd + F5.
1. I will double click on the title header and start pressing ctrl + option + The right arrow.
1. The screen reader reads it out to me.

Reading something out loud is one of the best ways to learn that something sounds off. However, sometimes, I get so distracted in the process that I’ll start over or get lost. Without using my screen reader, editing takes forever.

### Walk through my code samples

If I am writing code for that blog post (which many times I am), I want to go through every single step of the post. I will copy and paste the code from a CodePen into an index.html file. I’ll follow my diffs to make sure that I accounted for every single step.

Going through this step by step ensures:

1. My code works if someone else were to go through it
2. I didn't forget to show my readers a crucial step
3. Catch any assumptions you make.

This last one is important. There were a couple of times where I thought something was working, but it **wasn't**. Giving my audience code that doesn't work isn't particularly helpful!

## Conclusion

I love using tools to help me edit. The anxiety and time that it takes to write and publish a post can be downright daunting. I’ve used this process to cut down the amount of time it takes me to edit, and I hope it helps you as well! Blogging as a developer is very rewarding, and I’m glad I’ve found a process that works for me.

Let me know on [Twitter](https://twitter.com/LittleKope/) what you think! Also, I now have a [patreon](https://www.patreon.com/a11ywithlindsey)! If you like my work, consider becoming a patron. You’ll be able to vote on future blog posts if you make a $5 pledge or higher! Cheers! Have a great week!
