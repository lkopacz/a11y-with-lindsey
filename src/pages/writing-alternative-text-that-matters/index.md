---
title: Writing alternative text that matters
date: "2018-05-05"
path: "/blog/writing-alternative-text-matters"
tags: ["screenreaders", "images", "accessibility"]
published: true
---

If I ask anyone what accessibility means to them, usually the first thing that they can identify is "Adding alt text!" All you have to do is add alt tags to your images makes your site way more accessible, right? I love the enthusiasm to reduce accessibility errors, but I am about to give you an infuriating response. **It depends**.

Adding alt text may mean that you don't get pesky errors about missing alternative text on an Accessibility Scan, but it doesn't necessarily mean that your images have better meaning. Sometimes an empty alt tag is actually what you need. Are you envisioning the mind blown emoji and/or gif yet? That's how I felt when I was learning about it, and it made me realize how much bad advice I had given to others about fixing alt text. After this blog post, hopefully my conscience is clear! I usually ask myself the below questions in this order.

##Is it decorative?

The first thing I want anyone to think about before they start diving into their CMS's media gallery is not technical at all. It's strategic. What is the _purpose_ of that image being there?

Seems simple for certain things. For example, let's say we have a "Team" page on our site where we can click on the person and read more information. We click into the CEO's page and there's a headshot of the CEO of the business. We may use something like "Photo of the CEO, John Paul," which would likely not be the right way to go. All the important information is about the CEO is likely right next to his photo. Because that photo is probably decorative, an empty alt="" would suffice.

##What is the context of this image?

Before thinking about the descriptor, sometimes we need to ask the question first: form or function? Granted, this doesn't cover all your bases, but the easiest way to think of this is "Is this a link or a button, or is this content?" In other words, does it _do something_ like go to another page or does it _describe something_ that adds context to our content. This could be "Go to About Me Page" or it could be "Gooey chocolate chip brownie hot from the oven."

##What is your content strategy?

Now let's go to another area of the site that focuses more on marketing a new cookbook. Let's say that the marketing department had spent a lot of time researching their target audience using focus groups, survey's, etc. Then they put a lot of effort into their marketing plan and decided that visuals were really important to their marketing. They partnered with a photographer and got new images of delicious recipes. Wouldn't you want the _purpose_ of those photographs to be reflected to assistive technology? We probably want to describe the recipe the same way a TV Cooking Show host might: "spicy Italian sausage and peppers with plenty of green herbs."

>Wouldn't you want the _purpose_ of those photographs to be reflected to assistive technology?

![George Washington](./gw2.jpg) That's why strategy is more important than the technical aspect. This means that you _should_ be partnering with your Marketing Strategy team about writing alternative text. If that team doesn't exist, at the very least we thinking about the purpose for the image being there. My favorite example is the example to the right from [WebAim's documentation on Alt Text](https://webaim.org/techniques/alttext/#context). There is an image of George Washington in a battle, but if we were on a site about history or if we were on a site about art, this same image would have very different alternative text.

##Don't overthink it

If you are having difficulty with this, try to take these three questions with you in this order. It decreases your chances of overthinking it (which frankly, I am the queen of doing). And remember, it's a work in progress. Your alternative text can adapt and improve over time :).
