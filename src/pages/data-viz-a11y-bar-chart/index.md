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

I made a few changes here:

```diff
+ const barColors = ['#000', '#d35f5f', '#fff']
  barGroups
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
-   .attr("fill", "#d35f5f")
+   .attr('fill', (d, i) => barColors[i])
+   .attr('stroke', '#000')
    .attr('class', 'bar')
    .attr('x', d => xScale(d.name))
    .attr('y', d => yScale(d.value))
    .attr('width', xScale.bandwidth())
    .attr('height', d => height - yScale(d.value))
```

I added the `barColors` variable as an array, then used an anonymous function to dynamically choose the fill color. I also added a stroke color, because we need that to show the white bar!

We aren't done yet though! We still need to add the legend! Something I learned here through error is that we have to refactor this code a bit. I am still a bit of a d3 newbie, so a lot of times it's me aimlessly trying things and realizing I need to take a bit of a different approach. What I need to do here is refactor it this way:

```diff
+ const g = barGroups
+   .selectAll('g')
+   .data(data)
+   .enter()
+   .append('g')

- barGroups
-   .selectAll("rect")
-   .data(data)
-   .enter()
-   .append("rect")
+ g.append('rect')
  .attr('fill', (d, i) => barColors[i])
  .attr('stroke', '#000')
  .attr('class', 'bar')
  .attr('x', d => xScale(d.name))
  .attr('y', d => yScale(d.value))
  .attr('width', xScale.bandwidth())
  .attr('height', d => height - yScale(d.value))
```

I am not an SVG expert, so to be quite frank, I am not sure why this is (feel free to tweet me about it). But because we will need have multiple `<rect>` bound to the same data, I decided to bind the data to the `<g>` instead and append whatever elements I needed to that. I wanted to use the same data binding for the legend, so I went with that!

So I started adding some new `<rect>` and `<text>` tags to make the legend!

```js
const lineItemHeight = 30
g.append('rect')
  .attr('fill', (d, i) => barColors[i])
  .attr('stroke', '#000')
  .attr('width', 20)
  .attr('height', 20)
  .attr('x', width + margin.right)
  .attr('y', (d, i) => lineItemHeight * (i + 1))

g.append('text')
  .text(d => `${d.name} - ${d.value}`)
  .attr('x', width + margin.right + 30)
  .attr('y', (d, i) => lineItemHeight * (i + 1) + 15)
```

Because we have some text that reflects the actual data and the label, this is much more friendly to screen readers. One of last things we want to do is format the numbers so that it reads nicely.

```diff
g.append('text')
- .text(d => `${d.name} - ${d.value}`)
+ .text(d => `${d.name} - ${d3.format(".2s")(d.value).replace("G", "B")}`)
```

Now let's add a title to the legend and say that B = billions.

```diff
const svg = d3
  .select("#chart")
  .attr("width", width + margin.left + margin.right + legendWidth)
  .attr("height", height + margin.top + margin.bottom)
  .attr('aria-labelledby', 'title');

+ svg.append('text')
+  .text('Legend')
+  .attr('x', width + margin.right)
+  .attr('y', 20)

+ svg.append('text')
+  .text('B = billion')
+  .attr('x',width + margin.right)
+  .attr('y', 40)
```

Additionally, we want to adjust the positioning with those other legend items since the Legend title and the key took up some space.

```diff
g.append('rect')
  .attr("fill", (d, i) => barColors[i])
  .attr("stroke", "#000")
  .attr('width', 20)
  .attr('height', 20)
  .attr('x', width + margin.right)
- .attr('y', (d, i) => lineItemHeight * (i + 1))
+ .attr('y', (d, i) => lineItemHeight * (i + 1) + 30)

g.append('text')
  .text(d => `${d.name} - ${d3.format(".2s")(d.value).replace("G", "B")}`)
  .attr('x', width + margin.right + 30)
- .attr('y', (d, i) => lineItemHeight * (i + 1) + 15)
+ .attr('y', (d, i) => lineItemHeight * (i + 1) + 45)
```

And here is the final result!

<iframe height="265" style="width: 100%;" scrolling="no" title="Accessible Bar Chart - Solution 2 Continued" src="//codepen.io/littlekope0903/embed/dLBYaN/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/littlekope0903/pen/dLBYaN/'>Accessible Bar Chart - Solution 2 Continued</a> by Lindsey Kopacz
  (<a href='https://codepen.io/littlekope0903'>@littlekope0903</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Adding more context

I used [Heather Migliorisi's graph CodePen](https://codepen.io/hmig/pen/MeJKee) as inspiration for this post. While technically we have given screen readers a text version of our visualizations, I noticed her amazing use of ARIA to add more context to the graph. I'm going to take some of the same principles she did and apply them to this graph with d3 (she wrote her's in straight SVG).

The first thing I am going to do is add a title to my SVG.

```diff
const svg = d3
  .select("#chart")
  .attr("width", width + margin.left + margin.right + legendWidth)
  .attr("height", height + margin.top + margin.bottom)
+ .attr('aria-labelledby', 'bar-chart-title');

+ svg.append('title')
+  .text('2018 Donors By Organization')
+  .attr('id', 'bar-chart-title')
```

If you want to read more about why this is good practice, I would recommend going through Heather's article on [Accessible SVGs](https://css-tricks.com/accessible-svgs/). She went through a lot of research and frankly knows more about SVG than I do!

I liked how she made the bar graph read out like a list. I think I am going to add those to each of them as well! I'm also going to add an `aria-label` to the group with the `list` role.

```diff
const barGroups = svg
  .append("g")
+ .attr('role', 'list')
+ .attr('aria-label', 'bar chart')
  .attr("class", "data")
  .attr("transform", `translate(${margin.left}, 0)`);

const barColors = ["#000", "#d35f5f", "#fff"];

const g = barGroups
  .selectAll('g')
  .data(data)
  .enter()
  .append('g')
+ .attr('role', 'listitem');
```

Something that Heather does that I am not going to do here is adding `role="presentation"` to the axises. The reason for that is I posed this question on Twitter and got mixed responses.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I have an <a href="https://twitter.com/hashtag/a11y?src=hash&amp;ref_src=twsrc%5Etfw">#a11y</a> question that feels subjective. If you&#39;re creating an SVG graph, wouldn&#39;t the axis be a bit useless to a screen reader if you are announcing the data points a different way? <br><br>For example, &quot;Donations - $100k&quot;. If that gets read - wouldn&#39;t the axis be redundant?</p>&mdash; Lindsey Kopacz 🐞 (@LittleKope) <a href="https://twitter.com/LittleKope/status/1123571021120827394?ref_src=twsrc%5Etfw">May 1, 2019</a></blockquote>

I had mostly thought about the redundancy of screen readers, but someone else brought up a really good point.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Not necessarily. People don&#39;t always use accessibility tools in the way you would expect.<br><br>For instance, I have ADHD and often use a screen reader to help me with my writing. No vision problems, I just need something to read it back to me, so I know it all makes sense. 😊</p>&mdash; Chris Kitchens (@imchriskitchens) <a href="https://twitter.com/imchriskitchens/status/1123708336212516864?ref_src=twsrc%5Etfw">May 1, 2019</a></blockquote>

This is something I hadn't thought about, even as someone with ADHD myself. So with that I've decided to put the axises later in the DOM and added an `aria-label` to those groups in the SVG.

```diff
svg
  .append("g")
  .attr("class", "x-axis")
+ .attr('aria-label', 'x axis')
  .attr("transform", `translate(${margin.left}, ${height})`)
  .call(xAxis);

svg
  .append("g")
  .attr("class", "y-axis")
+ .attr('aria-label', 'y axis')
  .attr("transform", `translate(${margin.left}, 0)`)
  .call(yAxis);
```

## Conclusion

There is probably a lot to be improved here! I am still relatively new to SVG and some of this is subjective. For example, I had no idea if the axis points would redundant and I got mixed answers about whether I should hide it from a screen reader or not.
