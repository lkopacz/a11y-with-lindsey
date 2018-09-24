---
title: The negative impact of inaccessible forms. 
date: "2018-06-23"
path: "/blog/negative-impact-inaccessible-forms"
tags: ["screenreaders", "forms", "accessibility"]
published: true
---

Back in fall of 2016, I spoke for the first time about accessibility. While planning my presentation and looking for a relevant case study, I stumbled upon something that was quite relevant for the time - the presidential candidates donation sites. Considering Section 508 applies to government agencies, I figured that their sites would be super accessible. Boy, was I wrong.

The biggest issue on both Trump and Clinton's sites were forms. I did an evaluation of the forms of the candidates donation sites and if I remember correctly (it was almost 2 years ago), both had issues with all forms having missing form labels. While I don't know what the development cycle is for candidate sites, but I would assume the strategy is something like "get the site online as quickly as possible so we can start receiving donations."

One of the most common accessibility issues I've seen is forms missing form labels. The great news is it's one of the simplest accessibility issues to fixes. 

##The Empathetic Side of Forms

Before we go into how to solve this issue, I want to describe a scenario to you. Imagine you are without vision and care deeply about a certain candidates campaign. You are highly dependent on a screenreader to help you navigate a site. You go to your preferred candidate's donation site, but then you're stumped. There are a bunch of fields, but nothing is telling you which field is which. You don't know where to put your credit card information, you don't know where to put your billing address. What do you do? Do you take a guess and then deal with all the validation errors when you get it wrong? Or do you give up?

I imagine that I'd try if I was very passionate about that candidate, but considering how difficult the site was making it to donate my own hard earned money, I'd probably give up at that point. That's just me.

##The Business Side of Forms

Let's reflect on the above scenario for a second, but from the business side of it. How much money did we miss out on by not including something like form labels on our donation form. According to the [National Federation of the Blind](https://nfb.org/blindness-statistics), in 2015, 7,297,100 or 2.3% of the American population reported having a disability. Over 7 million people - think about that. That's a lot of money potential.

While I believe the reason to create accessible forms is because you don't want to create a frustrating experience for your users, I know that it's not really convincing to tell your boss or your clients "Hey we just need to be nicer and more empathetic!" But lost dollars, well that might raise some eyebrows.

##The quickest way to create accessible forms: have form labels

There is more about forms to make them accessible, that I will cover in other blog posts. But if I can sum up form accessibility I would say: Labels, labels, labels!

Something that I've seen is people putting the placeholder tag assuming that qualifies as a label. See the screenshot and markup below for the **wrong** way.

![Inaccessible form with no form label](./search-without-label.png "Inaccessible Form")

```
<input placeholder="Search" type="text">
<input name="Submit" type="submit">
```

A lot of designs withhold a label and use the placeholder (what's inside the input) as a visual cue or implication of the label. However, without a physical label in the markup, a visually impaired user cannot identify what the field input is. Not only must there be a label, but the label must be **associated** with the field. If it is imperative to a design to not have a label, you can visually hide it which I will talk about in another blog post.

In order to associate a label with a field you must have an `id` attribute on the input and use that value `for` the for attribute on the label. See below.

![search form with label](./search-with-label.png "Search Form with Label")

```
<label for="search-field">Search:</label>
<input placeholder="Search" type="text" id="search-field">
<input name="Submit" type="submit">
```

This is the simplest way to make sure that your forms are accessible. There are more topics to talk about like accessible form validation, ensuring required fields are both visually and semantically labeled as such, etc.

Stay tuned for more information about accessible forms!


