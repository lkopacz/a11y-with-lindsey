---
title: Accessibility in d3 Donut Charts
date: '2019-11-06'
path: '/blog/accessibility-d3-donut-charts'
tags: ['accessibility', 'donut chart', 'data viz', 'data visualizations', 'd3']
published: true
affiliate: false
featuredImage: './a11y-donut-chart.png'
---

Hey friends! I got back from Toronto last week after speaking at a11yTO, one of the only conferences where I wanted to speak! I spoke about accessibility and JavaScript. This talk was loosely based on my [a11y and JS - A Seemingly Unconventional Romance post](/blog/a11y-js-seemingly-unconventional-romance). So I'm pretty motivated to do a JavaScript-heavy blog post.

One of my favorite posts that I've written was my [accessible bar chart post](/blog/accessibility-d3-bar-charts). It's been about.... 6 months since I wrote that. So much for a series, ey? Today I am going to be going through how to make an accessible donut chart with d3. I'm not going to go through all the bells and whistles and interactions. It's going to be a donut chart with accessible data.

## Starting out

As a disclaimer, because I am most familiar with d3, this is how I am building out my visualization. D3 renders SVG, so if it helps you, you can explore the final result and see how the SVG renders.

I am still learning about d3, and am not exactly an expert at teaching it. I won't be going over d3 lingo in this blog post, so I recommend reading up a little bit on d3 if it's confusing to you. If it's available to you, I recommend checking out Shirley Wu's courses on [Frontend Masters](https://frontendmasters.com/teachers/shirley-wu/).

First things first, we have to get a dataset formatted. Most donut charts I see are on finance apps, so I am going to use a sample spending of a small business owner that I made up. I have no idea how much businesses spend on things, but the numbers are irrelevant here. The data structure is the most important! I am going to create an array of objects with 2 properties: label and spending.

```js
const data = [
  {
    label: 'Office Supplies',
    spending: 460,
  },
  {
    label: 'Transportation',
    spending: 95,
  },
  {
    label: 'Business Services',
    spending: 300,
  },
  {
    label: 'Restaurant',
    spending: 400,
  },
  {
    label: 'Entertainment',
    spending: 220,
  },
  {
    label: 'Travel',
    spending: 1000,
  },
  {
    label: 'Other',
    spending: 125.0,
  },
]
```

For my HTML, I have a `<svg>` tag with an id of `donut-chart` and some starting d3 code. I'm not going to go through d3 step by step here because this isn't a "how to d3" it's a "how to make visualizations accessible" post.

<iframe height="450" style="width: 100%;" scrolling="no" title="Donut Chart - Starting out" src="https://codepen.io/littlekope0903/embed/oNvRQpP?height=450&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/littlekope0903/pen/oNvRQpP'>Donut Chart - Starting out</a> by Lindsey Kopacz
  (<a href='https://codepen.io/littlekope0903'>@littlekope0903</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

What I've done here:

1. Created a pie chart using `d3.arc()` to generate the d attribute for the `<path>` and `d3.pie()` to format the data properly.
1. Created a tooltip that when you hover over the arc, it highlights the corresponding data.

Why is this not accessible?

1. It ignores users who navigate with their keyboard.
1. It ignores users who navigate with a screenreader.

In the video below, I show you what happens when I try to use my keyboard to access the data of the chart:

<video controls>
  <source src="/unfocusable.mov" type="video/mp4" />
</video>

[Video alt text: a video of me attempting to tab to the donut chart. Instead of seeing any data, I keep tabbing to the URL bar.]

## Option 1: Make the tooltips accessible

This option is my least preferred option. However, it’s a great lesson about how to test for accessibility, so I do like going through the exercise.

To make tooltips accessible, we have to do a few things:

1. Add a `tabindex="0"` to all the arc paths so that we can tab to it.
1. Add an `aria-describedby` to each selected path with a unique value
1. Add an `id` to the tooltip that matched the `aria-describedby` value. Because each `id` must be unique, we have to create multiple tooltips.
1. Make sure that we add not only mouse events, but focus and blur events.

First, let's take care of the `tabindex`. The below code makes the paths **focusable**

```js{9}
arcGroup
  .selectAll('.arc')
  .data(pie(data))
  .enter()
  .append('g')
  .attr('class', 'arc-group')
  .append('path')
  .attr('class', 'arc')
  .attr('tabindex', 0)
  .attr('d', arc)
  .attr('fill', (d, i) => colors[i])
  .on('mousemove', () => {
    const { clientX, clientY } = d3.event
    d3.select('.tooltip').attr('transform', `translate(${clientX} ${clientY})`)
  })
  .on('mouseenter', d => {
    d3.select('.tooltip')
      .append('text')
      .text(`${d.data.label} - $${d.data.spending}`)
  })
  .on('mouseleave', () => d3.select('.tooltip text').remove())
```

Now we can reach the arcs with our keyboard:

<video controls>
  <source src="/focusable.mov" type="video/mp4" />
</video>

[Video alt text: Tabbing to the arcs in the donut chart. We do not see any data; however, we do get the outline of the arcs showing that we can see them with our keyboard.]

I'm going to add one small tweak and add a `stroke` color around the arc when we focus on it. I'm going to remove the outline on this with CSS (gasp!) and add a stroke color on focus instead.

In the JavaScript:

```js{21-25}
arcGroup
  .selectAll('.arc')
  .data(pie(data))
  .enter()
  .append('g')
  .attr('class', 'arc-group')
  .append('path')
  .attr('class', 'arc')
  .attr('tabindex', 0)
  .attr('d', arc)
  .attr('fill', (d, i) => colors[i])
  .on('mousemove', () => {
    const { clientX, clientY } = d3.event
    d3.select('.tooltip').attr('transform', `translate(${clientX} ${clientY})`)
  })
  .on('mouseenter', d => {
    d3.select('.tooltip')
      .append('text')
      .text(`${d.data.label} - $${d.data.spending}`)
  })
  .on('focus', function(d) {
    d3.select(this)
      .attr('stroke', 'black')
      .attr('stroke-width', 2)
  })
  .on('mouseleave', () => d3.select('.tooltip text').remove())
```

and in the CSS

```css
.arc:focus {
  outline: none;
}
```

Next, we have to add an `aria-describedby` attribute to the focusable arcs. And remember, that means we need a matching id on the tooltip itself. After we do this, if a screen reader user focuses on an arc, the screen reader reads the content in those tooltips.

**Each** arc and **each** tooltip must have a unique identifier. That way, it won't confuse the assistive technology. To do that, I am taking not only the datum's but also the **indexes**

First, let's add the `aria-describedby`

```js{12}
arcGroup
  .selectAll('.arc')
  .data(pie(data))
  .enter()
  .append('g')
  .attr('class', 'arc-group')
  .append('path')
  .attr('class', 'arc')
  .attr('tabindex', 0)
  .attr('d', arc)
  .attr('fill', (d, i) => colors[i])
  .attr('aria-describedby', (d, i) => `tooltip-${i}`)
  .on('mousemove', () => {
    const { clientX, clientY } = d3.event
    d3.select('.tooltip').attr('transform', `translate(${clientX} ${clientY})`)
  })
  .on('mouseenter', d => {
    d3.select('.tooltip')
      .append('text')
      .text(`${d.data.label} - $${d.data.spending}`)
  })
  .on('focus', function(d) {
    d3.select(this)
      .attr('stroke', 'black')
      .attr('stroke-width', 2)
  })
  .on('mouseleave', () => d3.select('.tooltip text').remove())
```

Let’s add a tooltip per each piece of data and add an `id` that matches the `aria-describedby` value.

```js{8}
const tooltipGroup = svg.append('g').attr('class', 'tooltip')

tooltipGroup
  .selectAll('.tooltip-item')
  .data(data)
  .enter()
  .append('g')
  .attr('id', (d, i) => `tooltip-${i}`)
```

Now the last thing we have to do is add `focus` and `blur` events and correct the `d3.select()` items on all the events.

<!--prettier-ignore-->
```js{15,19,28-37,39,41-44}
arcGroup
  .selectAll('.arc')
  .data(pie(data))
  .enter()
  .append('g')
  .attr('class', 'arc-group')
  .append('path')
  .attr('class', 'arc')
  .attr('tabindex', 0)
  .attr('d', arc)
  .attr('fill', (d, i) => colors[i])
  .attr('aria-describedby', (d, i) => `tooltip-${i}`)
  .on('mousemove', (d, i) => {
    const { clientX, clientY } = d3.event
    d3.select(`#tooltip-${i}`)
      .attr('transform', `translate(${clientX} ${clientY})`)
  })
  .on('mouseenter', (d, i) => {
    d3.select(`#tooltip-${i}`)
      .append('text')
      .text(`${d.data.label} - $${d.data.spending}`)
  })
  .on('focus', function(d, i) {
    d3.select(this)
      .attr('stroke', 'black')
      .attr('stroke-width', 2)

    const { top, right, bottom, left } = d3.event
      .target.getBoundingClientRect()

    d3.select(`#tooltip-${i}`)
      .append('text')
      .text(`${d.data.label} - $${d.data.spending}`)
      .attr('transform',
        `translate(${(left + right) / 2} ${(top + bottom) / 2})`
      )
  })
  .on('mouseleave', (d, i) => {
    d3.select(`#tooltip-${i} text`).remove()
  )}
  .on('blur', function(d, i) {
    d3.select(this).attr('stroke', null)
    d3.select(`#tooltip-${i} text`).remove()
  })
```

Let's go over a bit of what we've done here.

- We've altered the d3 selections to be more specific to `id`s and not classes.
- We've positioned the tooltip on focus dependent on the approximate "middle" position. I've averaged the vertical and horizontal positions using `.getBoundingClientRect()`
- I've removed the stroke when we blur off the event.

Below is a video showing how it looks when we use our tab key.

<video controls>
  <source src="/tooltips-focusing.mov" type="video/mp4" />
</video>

[Video Alt Text: Tabbing to each of the donut arcs, and the label of the data and the spending is represented.]

Below is how it sounds on a donut chart:

<video controls>
  <source src="/tooltips-screenreader.mov" type="video/mp4" />
</video>

[Video Alt Text: Tabbing to each of the donut arcs, and the the data gets read out to you.]

<iframe height="450" style="width: 100%;" scrolling="no" title="Donut Chart - Option 1" src="https://codepen.io/littlekope0903/embed/VwwepoW?height=450&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/littlekope0903/pen/VwwepoW'>Donut Chart - Option 1</a> by Lindsey Kopacz
  (<a href='https://codepen.io/littlekope0903'>@littlekope0903</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Potential problems:

1. Depending on how large our dataset is, this means we have to have one tooltip rendered per datum. Numerous unique tooltips could become a performance issue in the long run.
1. This technique is VERY JavaScript-heavy, and I worry about performance.
1. When we use a screen reader, it announces all the labels with the word "Image" at the end. This has to do with the `role` of the `path` element.

There are ways we could tweak this.

1. Keep the `id` as one on the tooltip itself
1. On `mouseenter` update the `aria-describedby` of the target to match that `id`
1. Remove the `aria-describedby` on `mouseleave`
1. Change the contents on `focus` and `mouseenter`.

If you want, you can fork my CodePen above and play around with this. Test it on slower connections. Test it with a screen reader. But I am going to move onto my preferred version, and that's creating a legend.

## Option 2: Creating a separate legend

I prefer this option. The reason for this is it simplifies these problems:

- gives users a visual representation
- fewer performance risks
- people using screen readers and keyboards can access the information

So let's take our original code and start adding a legend to it. You may have noticed that I have 2 variables in my code:

```js
const width = 571,
  chartWidth = 189
```

The reason for this is we have the `chartWidth`, which is the width for the donut chart. But then we have the `width` which is the width of the SVG itself. That way, we have room for the legend itself.

First, let's get the legend built.

The first thing I do is to create a group for the legend and position it with the `transform` attribute. Positioning it this way makes it easier to position the children items.

```js
const legendGroup = svg
  .append('g')
  .attr('transform', `translate(${chartWidth} 0)`)
  .attr('class', 'legend-group')
```

The above code positions the `g` element beside the donut chart. Next, we create legend item groups and translate them based on their position

```js
const legendItems = legendGroup
  .selectAll('g')
  .data(data)
  .enter()
  .append('g')
  .attr('transform', (d, i) => `translate(20 ${(i + 1) * 30})`)
```

Using the index of the array, we establish the vertical positioning of each item using multiplication (yay math!).

Next, I am going to append a small square that color matches the corresponding arc. Because you know, legends usually have a key. This won't be for accessibility purposes.

```js
legendItems
  .append('rect')
  .attr('y', -13)
  .attr('width', 15)
  .attr('height', 15)
  .attr('fill', (d, i) => colors[i])
```

Adding shapes doesn't do much for accessibility, so let's get some text in there.

```js
legendItems
  .append('text')
  .attr('x', 20)
  .text(d => `${d.label} - $${d.spending}`)
```

So we are good, right? Well, not quite. We need to test this visualization manually. Sure this is good for a visually abled user and a keyboard user. But does it work on a screen reader?

I'm turning on VoiceOver and using it in Safari (you should always test in Safari since both are Native to macOS)

<video controls>
  <source src="/image-roles.mov" type="video/mp4" />
</video>

[Video Alt Text: Using VoiceOver, the screenreader picks up on every single arc and announces it as an image.]

I learned through manual testing is that every single `path` element (the arcs) had a role of Image. And it announces on a screenreader. As a result, I'm going to put a `role="presentation"` on each path.

```js{8}
arcGroup
  .selectAll('.arc')
  .data(pie(data))
  .enter()
  .append('g')
  .attr('class', 'arc-group')
  .append('path')
  .attr('role', 'presentation')
  .attr('class', 'arc')
  .attr('d', arc)
  .attr('fill', (d, i) => colors[i])
  .on('mousemove', () => {
    const { clientX, clientY } = d3.event
    d3.select('.tooltip').attr('transform', `translate(${clientX} ${clientY})`)
  })
  .on('mouseenter', d => {
    d3.select('.tooltip')
      .append('text')
      .text(`${d.data.label} - $${d.data.spending}`)
  })
  .on('mouseleave', () => d3.select('.tooltip text').remove())
```

Adding a presentation role tells the screen reader, "this is for presentation and screen readers can ignore."

Now, all it reads are the groups of the text of the legend. We could do more to make it better, like add a Legend title and reduce the duplication (the reading of the groups is really repetitive). But hopefully, you have learned how to start thinking about accessible data visualizations.

<iframe height="450" style="width: 100%;" scrolling="no" title="Donut Chart - Option 2" src="https://codepen.io/littlekope0903/embed/mddXJGm?height=450&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/littlekope0903/pen/mddXJGm'>Donut Chart - Option 2</a> by Lindsey Kopacz
  (<a href='https://codepen.io/littlekope0903'>@littlekope0903</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Conclusion

As I conclude this post, I want to emphasize something I often say: **Manual testing is your friend**. What I did is not necessarily the **right** answer. This is a **potential** answer. The critical takeaway is that I always test what I am doing with a screen reader, a keyboard, and a mouse. I think about what options we are providing for our disabled users before I start building it, so it’s easy to adapt.

Stay in touch! If you liked this article:

- Let me know on [Twitter](https://twitter.com/LittleKope) and share this article with your friends! Also, feel free to tweet me any follow up questions or thoughts.
- Support me on [patreon](https://www.patreon.com/a11ywithlindsey)! If you like my work, consider making a $1 monthly pledge. You’ll be able to vote on future blog posts if you make a \$5 pledge or higher! I also do a monthly Ask Me Anything Session for all Patrons!
- [Be the first to learn about my posts](https://pages.convertkit.com/4218bd5fb5/68dc4e412a) for more accessibility funsies!

Cheers! Have a great week!
