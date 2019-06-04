---
title: An Introduction to ARIA States
date: '2019-06-03'
path: '/blog/introduction-aria-states'
tags: ['accessibility', 'states', 'aria']
published: true
affiliate: false
featuredImage: './aria-states.png'
---

Hey friends! Today's blog post comes to you from my [Patreon folks](https://www.patreon.com/a11ywithlindsey) voting as a follow up from one of my previous posts about [Demystify ARIA](/blog/beginning-demystify-aria). ARIA can still be this really confusing thing, but one of my favorite ways to use it is to communicate state to screen readers. Something that I am starting to do after observing some awesome a11y folks in the community is tie the styling to the attributes instead of classes. This was you can enforce accessibilities standards and make it more difficult for people to cheat.
The aria attributes that I will be going over in this blog post are `aria-expanded`, `hidden`, and `aria-current`.

## The `aria-expanded` attribute

`aria-expanded` is probably the one of the few aria attributes that does not have an HTML5 equivalent (please tweet me if I am wrong, but at the time of writing, I believe this to be correct). As you may have noticed in the [Accessible Accordion post](/blog/javascript-accessibility-accordions), I used the `aria-expanded` attribute to convey the state of whether a section was expanded or collapsed.
Why is this helpful? Let's take the accordion example that I went through in the blog post that I linked in the previous paragraph:

<iframe height="450" style="width: 100%;" scrolling="no" title="Accordion - aria-expanded" src="//codepen.io/littlekope0903/embed/OYqNOd/?height=450&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
See the Pen <a href='https://codepen.io/littlekope0903/pen/OYqNOd/'>Accordion - aria-expanded</a> by Lindsey Kopacz
(<a href='https://codepen.io/littlekope0903'>@littlekope0903</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

_Note: I changed the code in the above sample to have the CSS tied more to the attributes and less to CSS classes._

If you go through this on a screen reader, you'll get something like this:

<video controls>
  <source src="/aria-expanded.mov" type="video/mp4">
</video>

Imagine if we took off the `aria-expanded` attribute which I did in a [separate CodePen](https://codepen.io/littlekope0903/pen/GazpwN/).

_Note: I kept the original code in here so that way I could demonstrate how it was opening and closing for a visually abled user and not for a screen reader user._

<video controls>
  <source src="/no-aria-expanded.mov" type="video/mp4">
</video>

Do you notice how when I open the button, it doesn't communicate whether the section is open or closed? This is really important for a screen reader user to know what is going on. Without the proper toggling and communication with the state, this is really confusing for screen reader users.

Anytime there is hidden content that opens up upon a user action, it's a good idea to consider adding an `aria-expanded` attribute and use JavaScript to toggle it.

## The `hidden` attribute

I actually changed up the code above from how I wrote it originally. Previously, I had the accordion using an `aria-hidden` attribute (more on that later) and toggling the value to be `true` or `false`. The reason for that is because `hidden` is the HTML equivalent of `display: none`.
I remember when I first started learning about accessibility and being really baffled about why we would want to hide any content from a screen reader. Why would I want to exclude them from content?? I used to be resistant to **ever** using `hidden`, but the reality is sometimes it's necessary. With some forms of content, we don't want to expose content to a user until we interact with it. For example, with modals and accordions, we only want to see what's inside if they are open.

### When to use `aria-hidden`

There's one major difference between `aria-hidden` and `hidden`:

> The difference between `aria-hidden` and `hidden` is that `aria-hidden` only hides things from screen readers, while `hidden` hides from everything.

If there are HTML elements that are there purely for decoration, then you might want to use `aria-hidden` to hide it from screen readers but not from visually abled users.

One of my favorite reason's to use this is for repetition that helps with dynamic apps, but repetitive for screen readers. This for example is the Home button for Twitter:

```html
<a class="js-nav js-tooltip js-dynamic-tooltip">
  <span class="Icon Icon--home Icon--large"></span>
  <span class="Icon Icon--homeFilled Icon--large u-textUserColor"></span>
  <span class="text" aria-hidden="true">Home</span>
  <span class="u-hiddenVisually a11y-inactive-page-text">Home</span>
  <span class="u-hiddenVisually a11y-active-page-text">
    Home, current page.
  </span>
  <span class="u-hiddenVisually hidden-new-items-text">
    New Tweets available.
  </span>
</a>
```

In this instance, the screen reader announces one of the "a11y page texts" based on the context of the page, but I want you to take note of this line of code:

```html
<span class="text" aria-hidden="true">Home</span>
```

This is the one that is actually on the screen. We have the dynamic options for the screen reader that we don't need if we are able to see the visual cues like "Load new tweets" or that we are on the home page.

With all that being said, my rule is if we are toggling states, I use `hidden`, but if it's an example like above where the content is duplicated or unnecessary for context, I'll use `aria-hidden`.

## The `aria-current` attribute

Fun fact, this one is totally new to me. I didn't learn about this until I saw [Eric Bailey](https://twitter.com/ericwbailey/)'s tweet about the [a11y project](https://a11yproject.com/) redesign:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">A little detail I&#39;m proud of for the upcoming <a href="https://twitter.com/A11YProject?ref_src=twsrc%5Etfw">@A11YProject</a> redesign is using `[aria-current]` as a styling hook for our table of contents component. Instead of using a &quot;.is-current&quot; class or the like, we&#39;re typing visual appearance to semantic state for where you are on the page. <a href="https://t.co/tt3k3MYEuk">pic.twitter.com/tt3k3MYEuk</a></p>&mdash; Eric Bailey (@ericwbailey) <a href="https://twitter.com/ericwbailey/status/1134863254310797312?ref_src=twsrc%5Etfw">June 1, 2019</a></blockquote>

The best part about the web and accessibility practices is I learn something new every day. After seeing this tweet, I started following up on this to see how I could learn about this and I found [Léonie's post on aria-current](https://tink.uk/using-the-aria-current-attribute/). Something they pointed out is that we predominately use CSS to visually show what's current. In my Drupal days, most themes had an `.is-active` class if you were on a menu item that reflected the current URL.

As Léonie said, the problem with this approach is that because CSS is mostly visual, virtually 0 of the styling is exposed to screen readers. According to [WAI-ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/#aria-current), there are a few values that `aria-current` could take on:

- **page** for a link within a set of pagination links, the current page as represented in the navigation, etc
- **step** for a step-based process.
- **date** for a current date.
- **time** for a current time.

Additionally, this should only one element in a set of elements can have an `aria-current` value. Otherwise, it will confuse the screen reader!

## Conclusion

I plan to have more blog posts about ARIA and state in the future and that this helped you demystify some of the aria attributes that you may have previously been confused about.

Let me know on [Twitter](https://twitter.com/LittleKope/) what you think! Also, I now have a [patreon](https://www.patreon.com/a11ywithlindsey)! If you like my work, consider becoming a patron. You’ll be able to vote on future blog posts if you make a \$5 pledge or higher! Cheers! Have a great week!
