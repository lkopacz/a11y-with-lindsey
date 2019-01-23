---
title: a11y and JS - A Seemingly Unconventional Romance
date: '2019-01-28'
path: '/blog/a11y-js-seemingly-unconventional-romance'
tags: ['accessibility', 'javascript', 'front end web development', ]
published: true
affiliate: false
---
This post was inspired by a few things. First, a few months ago Rian Rietveld announced she was [resigning as the WordPress accessibility lead](https://rianrietveld.com/2018/10/09/i-have-resigned-the-wordpress-accessibility-team/). I read through the post and found there to be a huge opportunity to educate communities and help to spread the word.

In Rian's blog post, a few things stuck out to me as main problems (these are directly from her site)
- "The codebase of Gutenberg is difficult for all of us, because no one in the wpa11y team is a skilled React developer. So it was hard to implement changes and write PRs ourselves."
- "There was no React developer with accessibility experience in the community."

These comments are really interesting to me because it was all about the lack of intersection. It wasn't about not wanting to understand the other side. 

Then more recently (last week as of this writing), Chris Coyier came out with an article [The Great Divide](https://css-tricks.com/the-great-divide/) which illustrates how there's a great divide in Front End Developers - the ones that are a11y/html/css focused and ones that are JS focused. It caused quite a stir, particularly when a11y was paired with the html/css side. Ultimately, I thought the article was good, but I think that accessibility is a multifaceted issue that isn't limited to HTML/CSS. And Dan Abramov pointed this out, and I agree with his sentiment. I didn't agree with how unnecessarily heated it got, but that's a topic for another time.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Nitpick: I think it would be great to avoid juxtaposing e.g. “JavaScript” with “accessibility” as if those skillsets were somehow at odds. <a href="https://t.co/8OSjWoP2E1">pic.twitter.com/8OSjWoP2E1</a></p>&mdash; Dan Abramov (@dan_abramov) <a href="https://twitter.com/dan_abramov/status/1087398276817666048?ref_src=twsrc%5Etfw">January 21, 2019</a></blockquote>

I've never been the type to avoid JavaScript like the plague. In fact, that would probably be bad because I write JavaScript every single day for my day job. But there seems to be this myth that JavaScript and accessibility are enemies. I wanted to accumulate my own list of how vanilla JavaScript, when used properly, can actually **enhance** accessibility and not harm it. 

## Menus and Megamenus 

Menus are a great place to think through your JavaScript because almost all sites have them. I usually use vanilla JavaScript to open and close menus on focus. I wrote about that in my blog post about [building a basic keyboard accessible navigation](/blog/create-accessible-dropdown-navigation) that uses vanilla JavaScript. You can also use them to toggle the state of `aria-expanded` when submenu's are open. I'll be writing a bit more about ARIA in a future post, but just know that `aria-expanded` will tell a screenreader the state of something that opens and closes. 

Something I mentioned in my previous post about [manual accessibility testing](/blog/4-things-always-manually-test) is thinking through MegaMenus. I mentioned thinking through an e-commerce store and how one make it easier for someone who is using a keyboard to navigate it. I thought that if I were looking for women's clothing, I wouldn't want to `tab` through all **49** links of the Men's section to get there.

![Under Armor menu expanded under mens, showing 49 sub menu links.](./underarmor-menu.png)

What are some things we could do? Maybe create a button to close the menu that focuses on the top of the content (similar to how a Skip to Content link would). We may want to create a button that says something like "Skip to 'Women's." Maybe we only want to include these links IF we use our keyboard to navigate and don't want to put those in if someone is using their mouse. These are all questions we can think through to make things easier. 

## Accordions 

## Modals

## Interactivity 
 
## React / VueJS

## Conclusion
Something I also mentioned in my previous post is that Accessibility is empathy-driven. I think the beauty of combining JavaScript and accessibility is it lends itself to being an empathy exercise. You think through questions like "What would I like this MegaMenu to be if I were a user who was unable to use a mouse? What would make my life easier navigating through this?" 