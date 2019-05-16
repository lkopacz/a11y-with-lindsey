---
title: 'JavaScript and Accessibility: Accordions'
date: '2019-05-16'
path: '/blog/javascript-accessibility-accordions'
tags: ['accessibility', 'javascript', 'front end web development', 'accordions']
published: true
affiliate: false
featuredImage: './accordion.png'
---

When I first wrote my post about [JavaScript and Accessibility](/blog/a11y-js-seemingly-unconventional-romance), I promised I would make it a series. I've decided to use my [patreon](https://www.patreon.com/a11ywithlindsey) to have votes on what my next blog post is. This topic won, and I'm finally getting more time to write about JavaScript!

So this topic I am going to go into a deep dive on how to make accordions accessible! Our focus is:
- Accessing the accordion with a keyboard
- Screen reader support

## HTML Structure

I did a few pieces of research about the HTML structure. I read the [a11y project](https://a11yproject.com/patterns#accordions-and-tabs)'s link to [Scott O'Hara's Accordion code](https://scottaohara.github.io/a11y_accordions/). I also read [Don's take about aria-controls](https://www.heydonworks.com/article/aria-controls-is-poop) - TL;DR he thinks they're poop. I couldn't escape reading the [WAI-ARIA Accordion example](https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion.html) as they set a lot of the standards. My hope is with all the information about what's ideal, I can help talk through why everything is important here. It's easy to get overwhelmed, and I'm here to help!

So if you read my post [3 Simple Tips to Improve Keyboard Accessibility](/blog/3-simple-tips-improve-keyboard-accessibility), you may recall my love for semantic HTML.

>If you need JavaScript for accessibility, semantic HTML makes your job significantly easier.

Many of the examples I found use semantic button elements for the accordion headings. Then the examples used div tags as siblings. Below is how my code starts:

<iframe height="448" style="width: 100%;" scrolling="no" title="Accordion - Step 1" src="//codepen.io/littlekope0903/embed/RmRVvN/?height=448&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/littlekope0903/pen/RmRVvN/'>Accordion - Step 1</a> by Lindsey Kopacz
  (<a href='https://codepen.io/littlekope0903'>@littlekope0903</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Adding the ARIA attributes

I wrote that ARIA is not a replacement for semantic HTML in a [previous post](/blog/beginning-demystify-aria). New HTML features that come out are replacing ARIA all the time. In an ideal world, I would use the [details element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details). Unfortunately, according to the [Browser Compatibility Section](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#Browser_compatibility), there is no support for Edge and IE11. Until browser support improves, I'll be sticking to the "old fashioned" way of doing it. I'll be adding ARIA for the context we need. I'm looking forward to seeing the compatibility expand to Edge!

First, I am going to add some `aria-hidden` attributes to the div to indicate the **state** of the accordion content. If the collapsed element is **closed**, we want to hide that content from the screen reader. Can you imagine how annoying it would be to read through the content you are not interested in?

```diff
- <div id="accordion-section-1">
+ <div id="accordion-section-1" aria-hidden="true">
...
...
- <div id="accordion-section-2">
+ <div id="accordion-section-2" aria-hidden="true">
...
...
- <div id="accordion-section-3">
+ <div id="accordion-section-3" aria-hidden="true">
```

The next thing we do is ensure that we have an `aria-expanded` attribute to the button. When we are on the button, it tells us if something is expanded or collapsed.

```diff
- <button id="accordion-open-1">
+ <button id="accordion-open-1" aria-expanded="false">
...
...
- <button id="accordion-open-2">
+ <button id="accordion-open-2" aria-expanded="false">
...
...
- <button id="accordion-open-3">
+ <button id="accordion-open-3" aria-expanded="false">
```

When it comes to ARIA for me, less is more. I am going to leave it at that and use JavaScript in a future section to toggle the states of the ARIA attributes.

<iframe height="452" style="width: 100%;" scrolling="no" title="Accordion - Step 2" src="//codepen.io/littlekope0903/embed/RmRLqw/?height=452&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/littlekope0903/pen/RmRLqw/'>Accordion - Step 2</a> by Lindsey Kopacz
  (<a href='https://codepen.io/littlekope0903'>@littlekope0903</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Adding Some Styling

I'm not going to focus too much on the CSS specifics. If you need a CSS resource, Ali Spittel's post [CSS: From Zero to Hero](https://dev.to/aspittel/css-from-zero-to-hero-3o16) and Emma Wedekind's [CSS Specificity](https://dev.to/emmawedekind/css-specificity-1kca) post are great.

First, I add classes to the divs and the buttons for good measure.

```diff
- <button id="accordion-open-1" aria-expanded="false">
+ <button id="accordion-open-1" class="accordion__button" aria-expanded="false">
    Section 1
  </button>
- <div id="accordion-section-1" aria-hidden="true">
+ <div id="accordion-section-1" class="accordion__section" aria-hidden="true">
```

Then I add a bunch of styling to the buttons. I wrote this CodePen with SCSS.

<iframe height="450" style="width: 100%;" scrolling="no" title="Accordion - Step 3 (Styling)" src="//codepen.io/littlekope0903/embed/NVrway/?height=450&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/littlekope0903/pen/NVrway/'>Accordion - Step 3 (Styling)</a> by Lindsey Kopacz
  (<a href='https://codepen.io/littlekope0903'>@littlekope0903</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

(Quick note: for the triangles on the iframe, I used the [CSS Triangle article](https://css-tricks.com/snippets/css/css-triangle/) from CSS tricks.)

I want to point out **explicitly** this code:

```scss
.accordion {
  // previous styling
  &__button.expanded {
    background: $purple;
    color: $lavendar;
  }
}
```

I want to specify what the button looks like when it was open. I like how it draws your eye and attention to the open section. Now that I see what they generally look like, I am going to add the styling to collapse them. Additionally, I'm adding some open styling.

```diff
  &__section {
    border-left: 1px solid $purple;
    border-right: 1px solid $purple;
    padding: 1rem;
    background: $lavendar;
+   max-height: 0vh;
+   overflow: hidden;
+   padding: 0;
  }

+ &__section.open {
+   max-height: 100vh;
+   overflow: auto;
+   padding: 1.25em;
+   visibility: visible;
+ }
```

Finally, let's add some focus and hover styling for the buttons:

```diff
  $purple: #6505cc;
+ $dark-purple: #310363;
  $lavendar: #eedbff;
```

```diff
  &__button {
    position: relative;
    display: block;
    padding: 0.5rem 1rem;
    width: 100%;
    text-align: left;
    border: none;
    color: $purple;
    font-size: 1rem;
    background: $lavendar;

+   &:focus,
+   &:hover {
+     background: $dark-purple;
+     color: $lavendar;
+
+     &::after {
+       border-top-color: $lavendar;
+     }
+   }
```

<iframe height="450" style="width: 100%;" scrolling="no" title="Accordion - Step 4 - final styling" src="//codepen.io/littlekope0903/embed/mYEYWg/?height=450&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/littlekope0903/pen/mYEYWg/'>Accordion - Step 4 - final styling</a> by Lindsey Kopacz
  (<a href='https://codepen.io/littlekope0903'>@littlekope0903</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

A quick note: you could likely add styling by adding `.accordion__button[aria-expanded="true"]` or `.accordion__section[aria-hidden="false"]`. However, it is my personal preference using classes for styling and not attributes. Different strokes for different folks!

## JavaScript toggling

Let's now get to the fun part of toggling the accordion in an accessible way. First, I want to grab all the `.section__button` elements.

```js
const accordionButtons = document.querySelectorAll('.accordion__button')
```

Then I want to step through every element of the HTML collection that JavaScript returns.

```js
accordionButtons.forEach(button => console.log(button))
// returns <button id="accordion-open-1" class="accordion__button" aria-expanded="false">
//    Section 1
//  </button>
//  <button id="accordion-open-2" class="accordion__button" aria-expanded="false">
//    Section 2
//  </button>
//  <button id="accordion-open-3" class="accordion__button" aria-expanded="false">
//    Section 3
//  </button>
```

Then for each of those items, I want to toggle the class for the opening and closing for visual styling purposes. If you remember the `.open` and `.expanded` classes that we added before, here is where we toggle them. I am going to use the number in the ids that match up with each other to get the corresponding section for that button.

```js
accordionButtons.forEach(button => {
  // This gets the number for the class.
  // e.g. id="accordion-open-1" would be "1"
  const number = button
    .getAttribute('id')
    .split('-')
    .pop()

  // This gets the matching ID. e.g. the
  // section id="accordion-section-1" that is underneath the button
  const associatedSection = document.getElementById(
    `accordion-section-${number}`
  )
})
```

Now we have the current value `button` in the callback and the associated section. Now we can get to toggling classes!

```js
button.addEventListener('click', () => {
  button.classList.toggle('expanded')
  associatedSection.classList.toggle('open')
})
```

Toggling classes is not all we want to do. We also want to toggle the aria attributes. From the previous section, aria attributes communicate **state** to screen readers. Changing the classes shows what happened to a visual user, not to a screen reader. Next, I check if the button contains the class in one of those elements. If it does, I'll swap the state for the `aria-hidden` and `aria-expanded`.

```diff
button.addEventListener('click', () => {
  button.classList.toggle('expanded')
  associatedSection.classList.toggle('open')

+ if (button.classList.contains('expanded')) {
+   console.log('open?')
+ }
})
```

The conditional fires after we set the classes, and if the class has expanded, it is open! So this is where we want to use the states and communicate it's open.

```js
button.addEventListener('click', () => {
  button.classList.toggle('expanded')
  associatedSection.classList.toggle('open')

  if (button.classList.contains('expanded')) {
    button.setAttribute('aria-expanded', true)
    associatedSection.setAttribute('aria-hidden', false)
  } else {
    button.setAttribute('aria-expanded', false)
    associatedSection.setAttribute('aria-hidden', true)
  }
})
```

Now we can open and close the accordion with the spacebar or the enter key!

<iframe height="450" style="width: 100%;" scrolling="no" title="Accordion - Step 5 - JavaScript Toggling" src="//codepen.io/littlekope0903/embed/qGNGyQ/?height=450&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/littlekope0903/pen/qGNGyQ/'>Accordion - Step 5 - JavaScript Toggling</a> by Lindsey Kopacz
  (<a href='https://codepen.io/littlekope0903'>@littlekope0903</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Let's test on our screen reader to be extra sure.

<video controls>
  <source src="/accordion-screenreader.mov" type="video/mp4">
</video>

When I go through the accordions headers without opening them, they do not read them in the section. That's a good thing! When I open it, I'm able to read it.

![Neil Patrick Harris sitting in the driver's seat of a car, making a large grin. Then he nods his head and puts his thumb up.](https://media.giphy.com/media/vtVpHbnPi9TLa/giphy.gif)

## Progressive Enhancement
Now, I know how much we all rely on JavaScript loading, particularly with all the frameworks we use. Now that we know the functionality, let's refactor the code a bit. The goal is to ensure anyone can access the accordion if JavaScript is not enabled or the user has connectivity issues.

My final touch is to
- Keep all the accordion sections open by default (Adding an `.open` class to the HTML sections)
- Remove the 'open' class once the JavaScript loads.
- Add all the aria attributes with JavaScript and remove that from the HTML

I want to remove `aria-expanded="false"` and `aria-hidden="true"` from my buttons and sections, respectively. I also want to add the `open` class to the html, so it's visually open by default.

```diff
- <button id="accordion-open-1" class="accordion__button" aria-expanded="false">
+ <button id="accordion-open-1" class="accordion__button">
    Section 1
  </button>
- <div id="accordion-section-1" class="accordion__section" aria-hidden="true">
+ <div id="accordion-section-1" class="accordion__section open">
```

I want to set those attributes and remove that class in the forEach loop of `accordionButtons`.

```diff
accordionButtons.forEach(button => {
+ button.setAttribute('aria-expanded', false);
  const expanded = button.getAttribute('aria-expanded');
```

Then I want to create an `accordionsSections` variable and do two things:
- set the `aria-hidden` attribute
- remove the `.open` class.

```js
const accordionSections = document.querySelectorAll('.accordion__section');

accordionSections.forEach(section =>  {
  section.setAttribute('aria-hidden', true)
  section.classList.remove('open')
})
```

We're done! Remember, we haven't removed any of the other code or event listeners. We are just adding all those attributes in with JavaScript.

<iframe height="452" style="width: 100%;" scrolling="no" title="Accordion - Step 6 - Progressive Enhancement" src="//codepen.io/littlekope0903/embed/qGRQvg/?height=452&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/littlekope0903/pen/qGRQvg/'>Accordion - Step 6 - Progressive Enhancement</a> by Lindsey Kopacz
  (<a href='https://codepen.io/littlekope0903'>@littlekope0903</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Conclusion
What did you think of this post? Did it help you? Are you excited for the `<details>` element? Let me know on [Twitter](https://twitter.com/LittleKope/) what you think! Also, I now have a [patreon](https://www.patreon.com/a11ywithlindsey)! If you like my work, consider becoming a patron. You’ll be able to vote on future blog posts if you make a \$5 pledge or higher! Cheers! Have a great week!