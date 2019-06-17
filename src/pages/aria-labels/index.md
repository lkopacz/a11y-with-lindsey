---
title: An Introduction to Accessible Labeling
date: '2019-06-12'
path: '/blog/introduction-accessible-labeling'
tags: ['accessibility', 'label', 'aria', 'forms']
published: true
affiliate: false
featuredImage: './aria-labels.png'
---

Last week, I got a decent amount of folks who found the [aria states blog post](/blog/introduction-aria-states) helpful. This week I wanted to continue on with that and go over something that took me a long time to understand: labeling. How do you actually label things? What needs labeling? What is the difference between all the ways to label things?

After this post, you should have a firmer understanding of all things labels.

## Form Labels

Form labels are one of the most common place I see accessibility errors. Most people will do something like this:

<!-- ```html
<form>
  <input type="search" placeholder="Search" />
</form>
``` -->

I’m going to say it again for those in the back:

> Placeholder attributes are **not** enough to label a field for a screen reader.

To properly label this, we need to ensure that there is a `<label>` that exists and is also **associated** with the input. The way to associate it is to give the `<input>` element an `id` and to match that value to a `for` attribute on the label.

<!-- ```html
<form>
  <label for="search">Search</label>
  <input type="search" placeholder="Search" id="search" />
</form>
``` -->

Take note that the string in the `for` attribute matches the `id` in the input. This is how you associate them!

If a designer gives you a design and there is absolutely no way to tell them to add a label to the design, you’re in luck. You can add a `visually-hidden` or `sr-only` (screen reader only) class. I always use this CSS from [the a11y project](https://a11yproject.com/posts/how-to-hide-content/):

<!-- ```css
.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
}
``` -->

The above code would turn into this:

<!-- ```html
<form>
  <label class="visually-hidden" for="search">Search</label>
  <input type="search" placeholder="Search" id="search" />
</form>
``` -->

Pretty simple, this applies to `<select>` elements as well.

### Nesting inputs in labels

I’ve also seen people nest their inputs. This isn’t my preferred method, but if I do something like this:

<!-- ```html
<form>
  <label>
    Search:
    <input type="search" />
  </label>
</form>
``` -->

This is valid and doesn’t produce any errors with the Wave tool. However, it makes it more difficult to visually hide the label, if that’s what you need to do. So choose your method based on your needs!

## Using `aria-label`

As a disclaimer, this is my least favorite way to label things for screen readers. But sometimes, it is necessary. A few times I’ve found it necessary:

1. I had no control of the markup and had to change up the DOM in JavaScript. It’s way easier to `setAttribute()` than it is to create an entire element and append it.
1. I was working in an SVG that I couldn’t add `<text>` elements to

The way you use an `aria-label` is to put the string in the attribute. For example, I found this on the MDN site:

```html
<svg
  class="icon icon-github"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="28"
  viewBox="0 0 24 28"
  aria-label="GitHub"
  role="img"
  focusable="false"
>
  <!-- all the children -->
</svg>
```

This does not need to match the `id` of another element. It can be it’s own string!

## `aria-describedby` and `aria-labelledby`

`aria-describedby` and `aria-labelledby` took awhile to demystify because they sound **so similar**. So let’s break them down into the literal sense.

Labels are like titles. They tell you what something is. When do we announce a title or a label: before the element.

Let’s take the third example from the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute)

<!-- ```html
<div id="radio_label">My radio label</div>
<ul role="radiogroup" aria-labelledby="radio_label">
  <li role="radio">Item #1</li>
  <li role="radio">Item #2</li>
  <li role="radio">Item #3</li>
</ul>
``` -->

When we use VoiceOver to go through this it reads like such:

<!--INSERT VIDEO-->

Did you notice once we navigated to the radio group it read “My radio label, radio group?” The radio label got announced **before** it told us about the radio group.

Then we have descriptions, which provide more information about what something is. When do we do that: after the element.

Let’s take the same markup from above and add an `aria-describedby` attribute with a div.

<!-- ```html
<div id="radio_label">My radio label</div>
<ul
  role="radiogroup"
  aria-labelledby="radio_label"
  aria-describedby="radio_desc"
>
  <li role="radio">Item #1</li>
  <li role="radio">Item #2</li>
  <li role="radio">Item #3</li>
</ul>
<div id="radio_desc">
  A bit more about this radio group. Here are some words.
</div>
``` -->

When we use VoiceOver to go through this it reads like such:

<!-- ADD VIDEO -->

Did you notice how the text “A bit more about this radio group. Here are some words” happened after VoiceOver announced the radio group? That’s the major difference. It’s very subtle difference where in most cases, it won’t matter.

The strings that we put in these attributes are like the form labels above. We want the `aria-describedby` or `aria-labelledby` attribute to match the `id` of the element that we want the screen reader to read.

## Conclusion

I hope I helped you understand a bit more about the confusing world of labelling for accessibility! Let me know on [Twitter](https://twitter.com/LittleKope) what you thought or if you have any other questions.

Also, I have a [patreon](https://www.patreon.com/a11ywithlindsey)! If you like my work, consider making a $1 monthly pledge. You’ll be able to vote on future blog posts if you make a \$5 pledge or higher! Cheers! Have a great week!
