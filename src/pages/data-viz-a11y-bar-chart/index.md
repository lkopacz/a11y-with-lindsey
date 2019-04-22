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

As a disclaimer, I am going to be using the d3 library, since that is what I know. Ultimately, what ends up happening,I am going to be building these visualizations in plain SVG. The great thing about SVGs, is if you know what you're doing, they are pretty simple to make accessible. But there is that, knowing what you're doing!

I'm going to do this through CodePen step by step. I am going to use the following data set:

<table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2013-01</td>
      <td>53</td>
    </tr>
    <tr>
      <td>2013-02</td>
      <td>165</td>
    </tr>
    <tr>
      <td>2013-03</td>
      <td>269</td>
    </tr>
    <tr>
      <td>2013-04</td>
      <td>344</td>
    </tr>
    <tr>
      <td>2013-05</td>
      <td>376</td>
    </tr>
    <tr>
      <td>2013-06</td>
      <td>410</td>
    </tr>
     <tr>
      <td>2013-07</td>
      <td>421</td>
    </tr>
    <tr>
      <td>2013-08</td>
      <td>405</td>
    </tr>
    <tr>
      <td>2013-09</td>
      <td>376</td>
    </tr>
    <tr>
      <td>2013-10</td>
      <td>359</td>
    </tr>
    <tr>
      <td>2013-11</td>
      <td>392</td>
    </tr>
    <!--  -->
    <tr>
      <td>2013-12</td>
      <td>433</td>
    </tr>
    <tr>
      <td>2014-01</td>
      <td>455</td>
    </tr>
    <tr>
      <td>2014-02</td>
      <td>478</td>
    </tr>
  </tbody>
</table>
