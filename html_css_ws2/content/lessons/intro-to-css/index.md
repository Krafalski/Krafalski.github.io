---
date: "2019-01-02T22:12:03.284Z"
title: "Introduction to CSS"
---
## Let's style our page

So far, we created all of our content. But it looks a bit underwhelming. Let's add some colors and styles!

CSS is short for Cascading Style Sheets. When you go to a web site and click around multiple pages, you want to have consistent styles. If every page that you made had to be individually styled it would be a lot of work. And any time you make one change, you'd have to go update all the other pages.

By separating our concerns: content from style we can keep all our style in one place and apply it to all our content.

The syntax for CSS is different than html.

Most of if follows a simple pattern

```css
body {
  width: 50%;
}
```

First, you write the `selector`, the `selector` can be the image tag itself, a `class` or `id` (attributes to identify tags) or it can be more complex.

Then you put a space and then `curly braces` `{}` - they share the key with the `square brackets` `[]`, which are typically above the `return`/`enter key`.

**GOTCHA** - you must always match an opening and a curly brace. Both HTML and CSS fail silently - you won't get an error message, but things just won't work. You'll have to hone your eye for detail as you build your skills.

Inside the curly braces `{}` you put keys and values.

In our html elements we did a similar thing with our attributes they had a `key` and a `value`

e.g.

```html
<input type="text" \>
```

in this case, the attribute has a key of `type` and a value of `text`. The value is always wrapped in quotes.

CSS follows the same pattern but the syntax is a little bit different

```css
body {
  width: 50%;
}
```

In this case we have a key of `width` and a value of `50%` they are separated by a colon `:` and the statement is ended by a semi-colon `;`


## Let's Code!

The first thing we have to do is connect our css file to our `index.html` - if you are using codepen you're all set you just have to write your css inside the css panel.

In Atom

inside our `index.html` inside the `head` tag, add a `link` element. We need two attributes
- `rel` short for relationship. It defines how another file is related to our `html` file
- then we need give the location of where our css file is. In our case, it is in the same folder, so it's really simple to point to it

```html
<link rel="stylesheet" href="main.css">
```

Let's go into our `css` file now and write our first rule

```css
body {
  background-color: plum;
}
```

If everything is connected and written properly the background color of our webpage should now be plum.

Fun fact! There are 140 named colors in html. You can go here to explore them

https://htmlcolorcodes.com/color-names/

Ultimately, it was decided that naming colors would be too difficult and limiting and there are more modern ways to declare colors like `hex`, `rgba` and `hsla`. However, for code-alongs and learning these names come in really handy.
