---
title: 3 Reasons Why Accessibility is NOT an Edge Case
date: '2019-01-16'
path: '/blog/3-reasons-why-accessibility-not-edge-case'
tags: ['ux', 'accessibility']
published: true
featuredImage: './not-edge-case.png'
draft: false
---

The primary question I get from developers is “How do I get my clients on board” or sometimes “How do I convince my boss that it’s worth investing in?” I was asked this once at a panel, and my response was “I don’t, I just do it.” Because I understand accessibility pretty well and build with accessibility in mind from the start, I am usually able to solve accessibility problems relatively quickly without people even noticing that I spent extra time on it. But when developers who are still newer to accessibility are trying to convince their bosses, sometimes they clap back that “this is a low priority” or “that is an edge case.”

Oh goodness, nothing gets my blood boiling more when someone dismisses the needs of their users. If your product or website doesn’t work for any one person who wants to use it, it’s not an edge case. It’s a severe usability problem that is costing you money and potentially a lawsuit.

I’ve brought up issues on accessibility before to clients, and they ask me how much time it would take to fix it. I understand that their budgets are limited; however, it’s ultimately less expensive to fix the problem than the lost business, or even a lawsuit. While I personally am motivated from an empathetic nature, it usually doesn’t go over well to tell your client or boss “Why can’t you just care about people, this isn’t an edge case!”

Below I’ve come up with the 3 main reasons why accessibility is NOT an edge case.

## Business

Let’s think of a simple user experience exercise. In my post about the [Negative Impacts of Withholding Form Labels](/blog/negative-impacts-withholding-form-labels), I wrote about how back in 2016 that I did an audit of the 2 candidates donation sites. While that’s **technically** not a business, it’s still a place where they are asking for your money.

My main point was if their sites are not accessible, particularly in an area where they are asking for your money, how much time do you think your users are going to spend on figuring it out before they give up? If you are a UX expert, you probably have some specific metric that you could tell me, but my guess would be…pretty quickly.

The thing I find shocking is how many e-commerce sites fail miserably with accessibility. For example, I happen to be on [Rent the Runway's website](https://www.renttherunway.com/) looking for a dress to rent, and I pulled up the [Wave tool](https://wave.webaim.org/), and as of this writing, it has detected **54 errors**. Not alerts or warnings, **errors**. I also cannot access their navigation with my keyboard, and the focus states are missing.

Approximately one of every five people suffer from a disability, which means that you are potentially losing out on 20% of your target audience. If your business had $500,000 of revenue in a month and the site wasn’t accessible, you may have lost out on over $125,000 in potential revenue. That’s a large piece of the pie that I would want a part of. The numbers go even higher when your business is a multi-million dollar business.

## Legal

There have been three lawsuits that come to mind when I think of the legal implications of accessibility. Most recently is the Beyoncé lawsuit for her site being inaccessible for visually impaired users. There was also the Target lawsuit and the Winn Dixie lawsuits. There has always been Section 508 of the Rehabilitation Act that enforces United States government agencies to be accessible. But these lawsuits bring into question what does the ADA cover concerning the web. After the Winn Dixie lawsuit, [Title III](https://www.ada.gov/regs2010/titleIII_2010/titleIII_2010_regulations.htm) got added to the ADA and includes Web accessibility concerning public accommodations. And while your site may not **technically** be breaking the law, wouldn’t you rather save money on lawyers and settlements? While I could go on about all three, this post would get really long. I’m primarily going to go over the most recent Beyonce lawsuit and provide links to learn more about the Winn Dixie Lawsuit.

### Beyoncé.com lawsuit

Mary Conner, a woman described as having no vision, was unable to buy a hoodie from beyonce.com for several reasons. One is that there no way to make a purchase without using a mouse. Another being “she wasn’t able to choose the size of a certain product or get confirmation that it had been added to her shopping cart” (quote directly from the article linked below).

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I admire Beyonce, so it’s disappointing to learn that her website is not accessible to blind fans. I’m hoping her team fixes this. To all artists: please make your websites accessible. <a href="https://t.co/inGMDjvdEk">https://t.co/inGMDjvdEk</a></p>&mdash; Haben Girma (@HabenGirma) <a href="https://twitter.com/HabenGirma/status/1081825648274956288?ref_src=twsrc%5Etfw">January 6, 2019</a></blockquote>

While this makes me really sad from an emotional standpoint, it also makes me sad that visually impaired users who love Beyoncé as much as I do would struggle to even learn about buying tickets to see her, which is also another business case for it.

This also helps me remember that we absolutely cannot sugar coat the implications of ignoring it. At a former company, I was once telling a Program Manager that there were potential legal implications for ignoring the issues I brought up. He was hesitant about allowing me to use the word legal because he was afraid I was fear mongering. I told him that it would not be responsible especially if it could get them into legal trouble. This is one example of how fixing a few issues would cost a company far less money and negative publicity.

Source: [Beyonce.com Lawsuit Reminds Us How Shitty the Web Is for Users With Visual Impairment](https://gizmodo.com/beyonce-com-lawsuit-reminds-us-how-shitty-the-web-is-fo-1831493336)

### Links about Winn Dixie and Target Lawsuits

- [W3C WAI - The Business Case for Digital Accessibility](https://www.w3.org/WAI/business-case/) (go to the minimize legal risk section)
- [Ars Technica - Target to pay \$6 million to settle site accessibility suit](https://arstechnica.com/uncategorized/2008/08/target-to-pay-6-million-to-settle-site-accessibility-suit/)
- [Defendants Fighting Website Accessibility Cases Face An Uphill Battle In 2018](https://www.adatitleiii.com/tag/winn-dixie/)
- [First-Of-Its-Kind Trial Goes Plaintiff's Way; Winn-Dixie Must Update Website For The Blind](https://www.forbes.com/sites/legalnewsline/2017/06/13/first-of-its-kind-trial-goes-plaintiffs-way-winn-dixie-must-update-website-for-the-blind/#2890a7561b38)

## Good HTML

I am going to cut to the chase and be an opinionated developer. If you say that HTML is easy, you are wrong. It’s syntactically simpler than other languages, but it requires strategy, semantics and proper naming just like most programming languages. Most of the people I see minimize HTML are the ones who are misusing it.

Even the [MDN docs](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML) make a strong case with tons of documentation. Instead of repeating their documentation, I am going to highlight my favorite parts:

1. Using the HTML `<button>` is better than using a `<div>` for a button because they have built-in keyboard accessibility. No need to add an additional JS event to make it work with an Enter keypress! It will work with a click!
2. Their section on [good semantics](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#Good_semantics) really helps educate people on how to **iterate** through accessibility and really focus on semantic HTML when making improvements above all else.
3. I love how they position that it’s **easier to develop with**. It is designed to be more helpful for not only your users but also your developers.

## Conclusion

As you can see, there are many reasons why this is not an edge case. “Just make it work” is subjective, and that bias can end up costing you a lot of money along the line and alienate your users. Remember that your target audience always has some folks from these communities, so it’s best not to ignore them.

How do you talk to your stakeholders about accessibility? Let me know on [Twitter](https://twitter.com/LittleKope/) or tweet me if you have questions about this blog post.
