---
title: Creating pretty yet accesible checkboxes
date: "2018-11-27"
path: "/blog/creating-pretty-yet-accesible-checkboxes"
tags: ["form", "accessibility", "front end web development"]
published: true
affiliate: false
---
I've seen a ton of designers make these GORGEOUS checkbox styles, but then you see them implemented and you can't even check it using your keyboard. Let's say we got this in our styleguide from our designer.

![Checkboxes](./Custom-teal-checkboxes.png)

I've seen this implemented before and it looks gorgeous. However, when I press the `tab` key it zips right by. If this field is required, you're screwing over a bunch of your users. They use `::before` or `::after` pseudo-elements to make a pretty checkbox and use the `:checked` pseudo-class to determine the styling of the check itself. It looks really cool, but the problem is that they use `display: none` on the checkox input itself. When we do that, the browser ignores.

<video style="margin: 1rem auto" width="590" muted autoplay loop>
<source src="inaccessible-checkboxes.mov">
</video>

Let's walk step by step how I would go through this. Here is my starting point in terms of code and what this looks like:

![Checkboxes](./Starting-point.png)

```
<fieldset>
  <legend>Accessible Checkboxes</legend>

  <input type="checkbox" name="Checkbox" id="check_1">
  <label for="check_1">Checkbox</label>

  <input type="checkbox" name="CSS Only" id="css_only">
  <label for="css_only">CSS Only</label>

  <input type="checkbox" name="" id="disabled_sample" disabled>
  <label for="disabled_sample">A disabled checkbox</label>
  
  <input type="checkbox" name="Fourth Option" id="fourth_check">
  <label for="fourth_check">Fourth Option</label>
</fieldset>
```

I would start out with a bare bones checkbox list. Here is the current CSS I have:

```
input[type="checkbox"] {
  position: absolute;
}
input[type="checkbox"] + label {
    display: block;
    position: relative;
    padding: 0 1.5rem;
}
```

## Create a psuedo-element on the label

The first thing I want to do is make sure that I create a psuedo-element that can act in place of my block. What I'll do to achieve this is create a `::before` psuedo-element on the `<label>` element. Now it looks like this:

```
input[type="checkbox"] + label::before {
  content: '';
  position: relative;
  display: inline-block;
  margin-right: 10px;
  width: 20px;
  height: 20px;
  background: white;
}
```

![Psuedo](./checkboxes-with-psuedo.png)

I've left the non-styled checkbox there on purpose. The reason for this is it will be very easy for me to tell when a checkbox is focused, checked, etc. It helps to hold off on hiding the checkbox until the very last minute. 

## Add styling on the psuedo-element when checked
As of right now, when something is checked, it doesn't do anything except the normal behavior. What we have to do is add a little bit of CSS magic. See Below:

```
input[type="checkbox"]:checked + label::before {
  background: #5ac5c9;
}
```

![Psuedo](./teal-checkbox.png)

## Add your custom checkmark

This is actually optional. If you want to do a checkmark unicode to the `::before` element's content, you can very well do that. But I want to get a little fancy. Now, we want to make sure that there is an actual checkmark insite of our custom element. I've done this by adding an `::after` psuedo-element. What we are doing here is creating basically a right angle with two borders and rotating it.

```
input[type="checkbox"]:checked + label::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 27px;
  border-left: 2px solid white;
  border-bottom: 2px solid white;
  height: 6px;
  width: 13px;
  transform: rotate(-45deg);
}
```

![Psuedo](./teal-checkbox-with-check.png)

Additional challenge, instead of a check, make an "X".

## Add focus styles to the pseudo element

Great! We are good now, right?

Not quite. We still need to ensure that the pseudo element "receives focus." What we are going to do now is replicate the focus styling when the checkbox receives focus. This is why we don't want to do `display: none` because than the element could not receive focus. I wanted to have some concrete focus styling, since they can vary from browser to browser. This is what I ended up doing, because I wanted to as closely replicate the default focus for Chrome, but in all browsers.

```
input[type="checkbox"]:focus + label::before {
  outline: #5d9dd5 solid 1px;
  box-shadow: 0 0px 8px #5e9ed6;
}
```

![Psuedo](./receiving-focus.png)

Now we can hide it the original checkbox! See how helpful keeping it around when we were figuring this out?

```
input[type="checkbox"] {
  position: absolute;
  left: -99999px;
}
```

<video style="margin: 1rem auto" width="590" muted autoplay loop>
<source src="accessible-custom-checkboxes.mov">
</video>

So that's it! You can apply the same type of thing to radio buttons as well.  Let me know on [Twitter](https://twitter.com/littlekope0903) what you think!