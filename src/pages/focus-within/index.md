---
title: Create an accessible dropdown navigation without JS
date: "2019-01-09"
path: "/blog/create-accessible-dropdown-navigation-without-js"
tags: ["accessibility", "navigation", "css", "front end web development"]
published: true
affiliate: false
---

After cross posting my last post about [dropdowns](/blog/create-custom-keyboard-accesible-checkboxes) on [dev.to](https://dev.to/), I was reading through the comments and someone posted about `:focus-within`. The best thing about sharing my knowledge on the internet is learning how other people are approaching things. Quite frankly, I have never used `:focus-within` before, so this is me learning and testing it out. 

As a reminder, here is the same HTML from the previous post:
```html
<nav>
  <ul class="menu">
    <li class="menu__item">
      <a href="/about" class="menu__link">About</a>
      <ul class="submenu">
        <li class="submenu__item">
          <a class="submenu__link" href="/about/our-mission">Our Mission</a>
        </li>
        <li class="submenu__item">
          <a class="submenu__link" href="/about/our-team">Our Team</a>
        </li>
      </ul>
    </li>
    <li class="menu__item">
      <a href="/news" class="menu__link">News</a>
      <ul class="submenu">
        <li class="submenu__item">
          <a href="/news/press-releases" class="submenu__link">Press Releases</a>
        </li>
        <li class="submenu__item">
          <a href="/news/blog" class="submenu__link">Blog</a>
        </li>
        <li class="submenu__item">
          <a href="/news/in-the-media" class="submenu__link">In the Media</a>
        </li>
      </ul>
    </li>
    <li class="menu__item">
      <a href="/contact" class="menu__link">Contact</a>
    </li>
  </ul>
</nav>
```

I added mostly the same CSS, but frankly, I have deleted the sample code so some of it is minor guesses. 