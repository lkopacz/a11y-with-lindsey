---
title: Demystifying ARIA and HTML5
date: '2019-02-05'
path: '/blog/demystifying-aria-html5'
tags: ['accessibility', 'html', 'front end web development', 'aria']
published: true
affiliate: false
---

This post wasn't in my plans originally, but I've been seeing a ton of confusion about ARIA and when it should and shouldn't be used. What do these ARIA items even mean? Is there a list of all the attributes. I am going to make this into a bit more of a series, maybe going over a few ARIA attributes a week and how they can be used, whether I like them, etc. Before I get into the weeds about all the ARIA attributes though, I really need to get a few things straight about what ARIA is used for and I don't think you should use it for. 

## What the hell is ARIA?
Aria are a bunch of attributes that you can add to your elements to give them extra context and meaning. This can be useful to a lot of things. Here is personally what I find useful about ARIA:
- Telling you when you are loading dynamic content 
- Telling screen readers when the state changes 
- Adding some extra context if needed

