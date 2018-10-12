---
title: Keyboard Accessibility 101
date: "2018-10-16"
path: "/blog/keyboard-accessibility-101"
tags: ["accessibility", "keyboard", "javascript", "tech"]
published: true
---
I wanted to write a blog post about one of my favorite accessibility topics - keyboard accessibility! I test this so much without even trying because as a developer I use my keyboard so much. I use it to navigate around apps, within a web page, and scrolling through my millions of tabs on my browser (who else is guilty of that haha).

![Gif of Tom Hanks in You Got Mail movie typing at his computer.](https://media.giphy.com/media/LPn77YyDIqfhm/giphy.gif)

##What is Keyboard Accessibility
Keyboard accessibility is ensuring that you're not 100% reliant on your mouse at any given time. This means you're able to get around the webpage using your keyboard. Have you ever tried that? I'm so accustomed to using my keyboard to navigate now because I hate using mouses, but I am always shocked when I hear both technical and non-technical people alike look at me in shock because they hadn't thought about the fact that you could actually use a keyboard to navigate through a page. 

Aside from my preference of using a keyboard, why is this important for accessibility? Some people suffer from motor tremors that make it difficult for muscle control. Some are hardly able to use their hands. Blind people frequently use the keyboard in conjunction with their screen reader. Even those people who have to use more advanced assistive technologies, most of them emulate the functionality of a normal keyboard. So this means that making our sites and applications accessible to keyboards can solve a variety of accessibility issues! And if you think about it early enough and don't hack around too much, it's usually a very fun process!


##Tip 1: Stop using divs and use semantic HTML
I've seen a lot of people create beautifully designed interactive apps. I click on a fancy hamburger icon and the menu appears beautifully with a subtle animation from the top of the screen. I go to the blog page and start using the select list to filter through topics. The select list has a clean and elegant drop down of a. Then I try to use my `tab` key.....

What gives? My focus indicator passes RIGHT past the hamburger icon. Does this mean I cannot open the menu? Is there another way to open the menu that I am unaware of? I go to that fancy select list to find a topic and I cannot even open it up. Imagine how you might feel if you literally depend on your keyboard? I am having a fit while writing this, because it ticks me off when people don't pay attention to this. Thank you for listening to my soap box. 

Why are these items not working with our keyboard? Let's take a look at that html for that menu?
```
<div class="hamburger-menu">
  <span class="line"></span>
  <span class="line"></span>
  <span class="line"></span>
</div>
<nav>
  <ul>
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
  </ul>
</nav>
```