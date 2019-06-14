---
title: An Introduction to Accessible Labeling
date: '2019-06-12'
path: '/blog/introduction-accessible-labeling'
tags: ['accessibility', 'label', 'aria', 'forms']
published: true
affiliate: false
featuredImage: './aria-labels.png'
---

Last week, I got a decent amount of folks who found the [aria states blog post] helpful, so this week I wanted to continue on with that and go over something that took me a long time to understand: labeling. How do you actually label things? What needs labeling? What is the difference between all the ways to label things?

After this post, you should have a firmer understanding of all things labels.

## Form Labels

Form labels are one of the most common place I see accessibility errors. Most people will do something like this:

```html
<form>
  <input type="search" placeholder="Search" />
</form>
```

I'm going to say it again for those in the back:

> Placeholder attributes are **not** enough to label a field for a screen reader.

To label this properly, we need to ensure that there is a `<label>` that exists and is also **associated** with the input. The way to associate it is to give the `<input>` element an `id` and to match that value to a `for` attribute on the label.

```html
<form>
  <label for="search">Search</label>
  <input type="search" placeholder="Search" id="search" />
</form>
```

Take note that the string in the `for` attribute matches the `id` in the input. This is how you associate them!

If a designer gives you a design and there is absolutely no way to tell them to add a label to the design, you're in luck. You can add a `visually-hidden` or `sr-only` (screen reader only) class and use this CSS that I always steal from [the a11y project](https://a11yproject.com/posts/how-to-hide-content/):

```css
.visually-hidden {
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  clip: rect(1px, 1px, 1px, 1px);
}
```

The above code would turn into this:

```html
<form>
  <label class="visually-hidden" for="search">Search</label>
  <input type="search" placeholder="Search" id="search" />
</form>
```

Pretty simple, this applies to `<select>` elements as well.

### Nesting inputs in labels

I've also seen people nest their inputs. This isn't my preferred method, but if I do something like this:

```html
<form>
  <label>
    Search:
    <input type="search" />
  </label>
</form>
```

This is valid and doesn't produce any errors with the Wave tool. However, it makes it more difficult to visually hide the label, if that's what you need to do. So choose your method based on your needs!

## Using `aria-label`

As a disclaimer, this is my least favorite way to label things for screen readers. But sometimes, it is necessary. A few times I've found it necessary:

1. I had no control of the markup. If I am changing up the DOM in JavaScript, it's way easier to `setAttribute()` than it is to create an entire element and append it.
1. I was working in an SVG that I couldn't add `<text>` elements to

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

This does not need to match the `id` of another element. It can be it's own string!

## `aria-describedby` and `aria-labelledby`

While there are definitely a lot of confusing aria attributes, these took me the longest to demystify. They sound **so similar**. So let's think about what they do quite literally.

Labels are almost like titles. They tell you what something is. Descriptions
