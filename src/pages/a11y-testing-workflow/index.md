---
title: My Accessibility Testing Workflow and Thought Process
date: '2019-04-09'
path: '/blog/accessibility-testing-workflow-thought-process'
tags: ['accessibility', 'navigation', 'css', 'front end web development']
published: true
affiliate: false
featuredImage: './a11y-testing-workflow.png'
hasAudio: false
---

Hi friends! It's been a hot minute since I wrote a blog post. If you follow me [on Twitter](https://twitter.com/LittleKope/status/1101112031355260928) you know that I took a very strategic break in March to work on getting ahead of things! So now I am up and running and I asked some followers what they wanted me to write next!

It sounded like people were curious about my testing workflow! So I'm going to walk you through my thought process, what I test for, how early I test, and how I test!

## Getting started

My testing process begins before I even start writing code! Hopefully, I wasn't siloed away from the designer and had input in design decisions. Even if I didn't, I start looking at the design and how I can ensure that everything is accessible.

I take a look at the design and assess any potential accessibility issues. For example, if I am taking a look at a design of my site below:

![Screenshot of a11y with Lindsey blog page. There are teasers with  a title, a date, and a read more link.](./design.png)

I'll start mentally thinking about how I will lay this out in markup.

- The "Blog" title will be an `<h1>`
- The date will be a `<time>`
- The blog post titles will be linked `<h2>`
- The blog teasers will be in a `<main>` tag

I won't go further into how I think through a design things because that could be it's own post. But taking the time to think through your semantic markup is a very important part of my process, and I didn't want to neglect it.

## Running it through automated tools

While I am working, I take a first try at running things through something like the Wave tool. This works really well on local environments when I want to get a sense of where my issues are. Through this, I learned that I have some redundant links.

While this is not as detrimental as say a missing form label, it is important to address. I admittedly should have fixed this before, but I am leaving it here for the sake of transparency and learning. I may have corrected this by the time I have posted, but the screenshots will still be here.

![](./wave-tool-blog.png)

As you can see here, I have 0 errors (yay) and 18 alerts for redundant links. Alerts are lower priority than errors, but because I don't have any errors
