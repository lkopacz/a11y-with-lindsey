---
title: Exploring Accessibility CLI tools
date: '2019-04-15'
path: '/blog/exploring-accessibility-cli-tools'
tags: ['accessibility', 'testing', 'cli', 'continuous integration']
published: true
affiliate: false
featuredImage: './exploring-accessibility-cli-tools.png'
hasAudio: true
audioLink: 'https://www.parler.io/audio/7119149108/8c43e17ea969064b97ba1969698144bc7bad5b5a.fe699bb2-88fa-4b7e-adbf-a758631737ad.mp3'
---

Happy Tax day (at least if you're American)!

My [last post](/blog/web-accessibility-testing-process) was about my accessibility testing process. However, this week, I wanted to examine automated testing. I have my initial process of what I do while I am working and what I make sure I manually test. I also wrote about all the things [I manually test](/blog/4-things-always-manually-test).

These days Continuous Integration is essential for large teams. To your surprise, I haven't configured accessibility CLI tools for my projects. I was the primary front end most of the time and I always manually test things out of habit, so it never felt necessary.

It's time to call myself out. I absolutely **should** be integrating these into my tests into my projects. I used to be the only front end developer, and I took it for granted. I am now on a team where **I am the accessibility expert**, but I have other front end developers on the team. I review many pull requests, but it would be way easier if Continuous Integration could catch new errors. Isn't that the point of Continuous Integration? To catch things that we miss? To make our lives easier?

> Heads up. This is going to be a "learn with me" post.

I'm going to be going over 2 of the CLI tools I am familiar with - pa11y and aXe-cli. Feel free to [Tweet at me](https://twitter.com/LittleKope) any tools you would like to check out.

## Pa11y

[Pa11y](https://github.com/pa11y/pa11y) is the first accessibility testing tool I used a couple of years back. The first time I tried it, it was a gulp package. Admittedly, I never did any of the configuring because at the time I found the tool to be too restrictive.

I’m coming at this fresh, so I am going to go through installing it in this blog post and see how I like it.

`npm install pa11y --save`

Now I am going to create an npm script to run pa11y. In my `package.json` file:

```json
"scripts": {
  "test-a11y": "pa11y ./index.html"
}
```

Then I went to my command line and typed `npm run test-a11y` and got errors. I got a SyntaxError that I remember seeing 2 years ago, and I happened to remember that it was a node version issue.

```bash
$ npm run test-a11y

> egghead-focus-event@1.0.0 test-a11y /Users/lkopacz/Sites/egghead-focus-event
> pa11y ./index.html

/Users/lkopacz/Sites/egghead-focus-event/node_modules/pa11y/bin/pa11y.js:92
async function runProgram() {
      ^^^^^^^^
```

When I checked what node version I was using, I learned that somehow, I had switched from node v.8 to node v.6. Embarrassing to admit I didn't catch this and I was on an older version of node.

`nvm use v8.9.1`

Now the script appears to run properly! I ran it and got an accessibility error.

```bash
$ npm run test-a11y
> egghead-focus-event@1.0.0 test-a11y /Users/lkopacz/Sites/egghead-focus-event
> pa11y ./index.html


Welcome to Pa11y

 > Running Pa11y on URL file:///Users/lkopacz/Sites/egghead-focus-event/index.html

Results for URL: file:///Users/lkopacz/Sites/egghead-focus-event/index.html

 • Error: The html element should have a lang or xml:lang attribute which describes the language of the document.
   ├── WCAG2AA.Principle3.Guideline3_1.3_1_1.H57.2
   ├── html
   └── <html class="no-js"><!--<![endif]--><head> <met...</html>

1 Errors
```

Welp that’s embarrassing. However, that’s precisely why this exists. Going to fix this and see what happens.

```html
<html class="no-js" lang="en">
  <!-- MOAR HTML-->
</html>
```

Now let's run that test again and see what happens.

```bash
$ npm run test-a11y

> egghead-focus-event@1.0.0 test-a11y /Users/lkopacz/Sites/egghead-focus-event
> pa11y ./index.html


Welcome to Pa11y

 > Running Pa11y on URL file:///Users/lkopacz/Sites/egghead-focus-event/index.html

No issues found!
```

Well, that was easy to set up! So far, I like pa11y. I would love to play around more with this and look into all their other tools, such as the pa11y dashboard. However, the CLI seems to be the most beneficial for the point of this blog post.

## aXe-cli

Deque Systems, a leading accessibility firm, developed the [aXe-cli](https://github.com/dequelabs/axe-cli) tool. I haven’t checked out many Deque tools, which is pretty shocking since they are leaders in this space. I am going to install the module the same way I did above with pa11y. This time I am going to test it against [my form labels lesson code](https://github.com/lkopacz/egghead-form-labels). This particular lesson has accessibility errors because I fixed them in [the video](https://egghead.io/lessons/html-5-creating-accessible-forms-with-associated-form-labels). I know there are form label errors.

`npm install axe-cli --save`

Then I am going to create the same npm script that I did with the pa11y task.

```json
"scripts": {
  "test-a11y": "axe ./index.html"
}
```

When I ran the command, this is what I received:

```bash
$ npm run test-a11y

> egghead-30-second@1.0.0 test-a11y /Users/lkopacz/Sites/egghead-form-labels
> axe ./index.html

Running axe-core 3.2.2 in chrome-headless

Testing http://./index.html ... please wait, this may take a minute.
axe-webdriverjs deprecated Error must be handled as the first argument of axe.analyze. See: #83 node_modules/axe-cli/lib/axe-test-urls.js:85:8

  Violation of "document-title" with 1 occurrences!
    Ensures each HTML document contains a non-empty <title> element. Correct invalid elements at:
     - html
    For details, see: https://dequeuniversity.com/rules/axe/3.2/document-title

  Violation of "html-has-lang" with 1 occurrences!
    Ensures every HTML document has a lang attribute. Correct invalid elements at:
     - html
    For details, see: https://dequeuniversity.com/rules/axe/3.2/html-has-lang

  Violation of "landmark-one-main" with 1 occurrences!
    Ensures the document has only one main landmark and each iframe in the page has at most one main landmark. Correct invalid elements at:
     - html
    For details, see: https://dequeuniversity.com/rules/axe/3.2/landmark-one-main

  Violation of "page-has-heading-one" with 1 occurrences!
    Ensure that the page, or at least one of its frames contains a level-one heading. Correct invalid elements at:
     - html
    For details, see: https://dequeuniversity.com/rules/axe/3.2/page-has-heading-one

4 Accessibility issues detected.

Please note that only 20% to 50% of all accessibility issues can automatically be detected.
Manual testing is always required. For more information see:
https://dequeuniversity.com/curriculum/courses/testingmethods
```

Ok. So, at first glance I like some things a ton. Mostly because of the disclaimer at the end.

> Please note that only 20% to 50% of all accessibility issues can automatically be detected. Manual testing is always required.

## Comparing the two

I like both these tools. Let's first go to the Pros and Cons of both of them!

### pa11y

PROS:

1. Setting it up was pretty simple.
2. They tell you where the offending code is in the HTML

CONS:

1. The only reason I knew how to debug the initial error is because I remembered it from a few years back. It **does** have it on its documentation, but I missed it. Deque's requirements were way higher up on the README.md
2. The error messages aren't super verbose. Sometimes this is trickier for newcomers

### aXe-cli

PROS:

1. As I stated above, I love the disclaimer that you **should** be manually testing to catch other issues. Please see my [last post](/blog/web-accessibility-testing-process) about my accessibility testing process. I also have a checklist of [what I manually test](/blog/4-things-always-manually-test).
2. I also like that it gives you some links to the rules that failed.

CONS:

1. What I like better about pa11y is that it tells you exactly where the offending elements are. Note that I am not saying it's not possible. I've only tested the most basic command I could.

## Conclusion

Well, I got started in automated accessibility testing late, but I am a convert. If you noticed, I forgot a couple of things **even as an expert**. We are not perfect. If you're working with teams newer to accessibility, it's a powerful tool. It ensures that other team members do not introduce new issues or errors. I think both of these tools are super solid out of the box. I'm planning on going through both their documentation more and seeing how I can further configure it!

For now, I am planning on implementing pa11y on my projects. I prefer that one out of the box for my team because I can explain to my team why the errors are occurring. I want to explore aXe-cli more because I think the verbosity was much clearer. I'm sure with more configuration, I'd be able to have aXe work more to my liking.

Do you have any accessibility testing tips? Let me know [on Twitter](https://twitter.com/LittleKope). If you're interested in hearing more content from me, [subscribe to my newsletter](https://pages.convertkit.com/4218bd5fb5/68dc4e412a) (unsubscribe, anytime).
