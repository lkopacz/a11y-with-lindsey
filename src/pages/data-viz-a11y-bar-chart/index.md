---
title: Accessibility in SVG Bar Charts
date: '2019-04-29'
path: '/blog/accessibility-svg-bar-charts'
tags: ['accessibility', 'testing', 'cli', 'continuous integration']
published: true
affiliate: false
featuredImage: './a11y-data-viz-bar-charts.png'
---

Hey y'all! First off, I want to thank people for their patience with this post. I had a very stressful week after I published my last post. I usually do my writing on Sundays, and that was my only free day to recharge.

I asked on Twitter what you'd like for me to write about next - and a lot of people requested they wanted me to talk about accessibility for data visualizations. Because there's so much that I have learned about data visualizations, I decided to make this a series.

For the first part of my series, I am going to talk to you about Bar Charts!

## Starting out

As a disclaimer, I am going to be using the d3 library, since that is what I know. Ultimately, what ends up happening is that I will be building an inline SVG. The great thing about SVGs, is if you know what you're doing, they are pretty simple to make accessible. But there is that, knowing what you're doing!

I'm going to do this through CodePen step by step. I am going to use the following data set:

<iframe height="265" style="width: 100%;" scrolling="no" title="Accessible Bar Chart - Part 1" src="//codepen.io/littlekope0903/embed/WWKZYR/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/littlekope0903/pen/WWKZYR/'>Accessible Bar Chart - Part 1</a> by Lindsey Kopacz
  (<a href='https://codepen.io/littlekope0903'>@littlekope0903</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

The problem that I see most bar charts have is no text elements indicating what the data is. They only have visual bars with the axis indicating it's value. If I were to build this out normally, I would just start building the x and y axis and the bars. That's what I am going to do in the next pen!

<iframe height="265" style="width: 100%;" scrolling="no" title="Accessible Bar Chart Part 2" src="//codepen.io/littlekope0903/embed/BEMNGO/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/littlekope0903/pen/BEMNGO/'>Accessible Bar Chart Part 2</a> by Lindsey Kopacz
  (<a href='https://codepen.io/littlekope0903'>@littlekope0903</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

So what is the problem with this? The problem is that while we have some text for the labels of the bars, and text items for the axis, the screen reader won't reflect the **value** associated with the dataset.

<video controls>
  <source src="/bar-chart-not-a11y.mov" type="video/mp4">
</video>

As you can see here, when using the Voice Over commands, it only reads the labels and then the axis ticks. What I ideally would want to read is the label and then the data value.

Ideally, what we'd want is to have `<text>` elements that are next to the `<text>` elements that have . The best thing to do for screen readers is to ensure there is **readable content**. Inline SVGs are great for accessibility because they allow images to be literally part of the markup. It's fabulous. However, that only works for screen readers if you ensure there are text fallbacks for your content.

## Potential Solution #1

The first solution I am going to try is adding an additional text element after I called the `xAxis`.

```js
d3.selectAll('.tick')
  .append('text')
  .text((d, i) =>
    d3
      .format('.2s')(data[i].value)
      .replace('G', 'B')
  )
```

The `.tick` class is what comes by default with d3-axis and it attaches to the `<g>` element that it comes with. So what I did here is selected all those and appended another text element to it with a formatted version of the value.

<iframe height="265" style="width: 100%;" scrolling="no" title="Accessible Bar Chart - Solution 1" src="//codepen.io/littlekope0903/embed/vMwPdx/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/littlekope0903/pen/vMwPdx/'>Accessible Bar Chart - Solution 1</a> by Lindsey Kopacz
  (<a href='https://codepen.io/littlekope0903'>@littlekope0903</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

This technically works with screen readers, but I don't think this is the best experience for everyone because of the vast range of the yAxis. It may be different if the range was 0 - 10, but because it goes to over 16 billion, it may be safe to assume that it may not be obvious to our users what the value of the data is.

<video controls>
  <source src="/a11y-data-viz-solution-1.mov" type="video/mp4">
</video>

As you can see here, this is a better experience for screen reader users, but it could stand to be improved for sighted users.

## Potential Solution #2

Another solution would be to include a legend. I like this solution; however, it's important to note that having a color coded bar chart may not be the best for colorblindness, so if we go this route, we have to ensure drastic contrast between each bar.

<iframe height="265" style="width: 100%;" scrolling="no" title="Accessible Bar Chart - Solution 2" src="//codepen.io/littlekope0903/embed/WWBmWY/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/littlekope0903/pen/WWBmWY/'>Accessible Bar Chart - Solution 2</a> by Lindsey Kopacz
  (<a href='https://codepen.io/littlekope0903'>@littlekope0903</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Here is the change I made:

```js
const barColors = ['#000', '#d35f5f', '#fff']
barGroups
  .selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('fill', (d, i) => barColors[i])
  .attr('stroke', '#000')
  .attr('class', 'bar')
  .attr('x', d => xScale(d.name))
  .attr('y', d => yScale(d.value))
  .attr('width', xScale.bandwidth())
  .attr('height', d => height - yScale(d.value))
```

I added the `barColors` variable as an array, then used an anonymous function to dynamically choose the fill color. I also added a stroke color, because we need that to show the white bar!

We aren't done yet though! We still need to add the legend!
