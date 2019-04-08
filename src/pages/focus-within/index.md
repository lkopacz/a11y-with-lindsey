---
title: Create an accessible dropdown navigation without JS
date: '2019-01-09'
path: '/blog/create-accessible-dropdown-navigation-without-js'
tags: ['accessibility', 'navigation', 'css', 'front end web development']
published: true
affiliate: false
featuredImage: './dropdown-no-js.png'
hasAudio: true
audioLink: 'https://www.parler.io/audio/7119149108/2cdfdce373d5b6114644114a22a9fb7fd60ab264.5e9775fc-2449-4d02-ac37-3627f767bfdd.mp3'
---

After cross-posting my last accessibility post about [dropdowns](/blog/create-accessible-dropdown-navigation) on [dev.to](https://dev.to/), I was reading through the comments and someone posted about `:focus-within`. The best thing about sharing my knowledge on the internet is learning how other people are approaching things. Quite frankly, I have never used `:focus-within` before, so this is me learning and testing it out. Because this blog post will primarily be based on a continuation of the [previous dropdown post](/blog/create-accessible-dropdown-navigation), I highly suggest reading that beforehand if you haven't already.

As a reminder, here is the same HTML structure from the previous post:

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
          <a href="/news/press-releases" class="submenu__link"
            >Press Releases</a
          >
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

## What is `:focus-within`

`:focus-within` takes the `:focus` pseudo-class a step further. It represents an element that receives focus or if one of its children receives focus. This is really helpful for our scenario because we want to target the top level `li` element and not just the top level `a` element. As a reminder, the reason for this is because we want to keep the submenu expanded as we tab through its children. The reason why it would be difficult to do this for just the top level `a` is because `ul.submenu` are siblings and not children.

I added mostly the same CSS, but frankly, I have deleted the sample code so some of it is a few minor guesses, so if it's not exact, I am sorry :). Also, if you haven't read my previous post about this, I suggest you do for context. It would be highly repetitive to repeat all the code, but the necessary parts in this post. So instead of adding my JS as I did in my previous post, all I did was add `.menu__item:focus-within .submenu` to the existing CSS.

```css
.menu__item:hover .submenu,
.menu__item:focus-within .submenu {
  padding: 0.5rem 0;
  width: 9rem;
  height: auto;
  background: #eedbff;
  clip: auto;
}
```

![Two men saying That was Easy Office Space Movie](https://media.giphy.com/media/zcCGBRQshGdt6/giphy.gif)

Well, that was easy. So I guess I'll go into some of the Pros and Cons of using this technique.

## Pros

The first pro is that you can do the same thing in CSS that I was doing in JS. I don't try to avoid JS all the time as some people do, but hey this is way easier than debugging all the things. In the last dropdown post, I wrote 15 lines of JavaScript to achieve the same thing. In retrospect, 15 lines of JavaScript is worth it for me to ensure accessibility. But as developers, the less code we have to write, the better.

The second pro is that it works seamlessly forward and backward. If you remember a con of my last post on this topic, it's that you cannot tab back and have it open and close the same way. This is not the case here. If you press `tab` and `shift` at the same time and go back into the navigation, it opens up as soon as I tab on the last menu child.

## Cons

The major con here is browser support. This is not supported in the latest version of IE or Edge. If it were only IE, I would probably laugh it off, but it is also not supported in Microsoft Edge. I'd be cautious before implementing this without a fallback. If I had consistent traffic to my site, I would check the browser usage of your users in Google Analytics. Currently, only 1% of my users use Edge, and none use IE. In theory, I would likely be safe to use this feature without a fallback.

## My thoughts

The stubborn part of me really wanted to create a small polyfill. I tried what was suggested to me on [dev.to](https://dev.to/link2twenty/comment/7bp1) with no success. I also attempted [a solution](https://gomakethings.com/testing-for-css-pseudo-class-support-with-vanilla-javascript/) after scouring the Internet, and I couldn't seem to get this to work either. In the end, I was spending way more time searching the Internet and writing and rewriting JS. It took away the simplicity of that one line of CSS for me. In the end, I gave up and didn't figure out a polyfill for the issue.

If there's a simple way to polyfill support for pseudo classes in Vanilla JS, I am all about it. In fact, if you get something working, please let me know. Send me a codepen or jsfiddle! However, I get anxious at the thought of leaving the latest versions of browsers unsupported. In fact, part of [WCAG's POUR principles](https://webaim.org/articles/pour/) is that sites should have **robust** support across browsers. While I love to use modern tricks, I may stick to my way for now, and try to improve the JS I had to make it work backward and forward.

So that's it for now! If you find a simple, non-bloated way to polyfill `:focus-within`, let me know on [Twitter](https://twitter.com/LittleKope/)!
