---
title: Introduction to HTML
date: "2019-01-01T22:12:03.284Z"
---

# Intro to Coding: HTML and CSS

### Let's create our first web page

Let's make a simple about me page:

![](https://i.imgur.com/As0AkgM.png)

Even though this is a simple page, we'll be covering a lot of concepts and using a lot of code.

Don't worry about memorizing everything. Don't worry about understanding everything. The goal is to try to build this page together. As you build, you'll learn.

Each time you set out to learn something, you'll learn the things you wanted to learn and learn new things you didn't expect and you'll start to understand things you tried to learn before but didn't quite get.

It's better to think of coding as a skill, like learning a musical instrument: practicing the same or similar things over and over again help you gain skills, get faster, become more graceful and better at achieving your vision. At first your attempts will be slow and you may get frustrated that you can't make things work like you want. This is normal! It doesn't indicate your ability to learn or become highly skilled at coding. The most important thing is to keep at it.

At General Assembly we believe in the growth mindset. You can google it to learn more or check out this great summary article:

https://www.brainpickings.org/2014/01/29/carol-dweck-mindset/

### Get started
- Download
- Open Atom
- Choose new folder

![](https://i.imgur.com/oZW803H.png)

- name it `GA_html_css_workshop` or something similar that will help you identify what it is later

- Inside this folder click to create a new file ![](https://i.imgur.com/KHVFcPx.png)
  - this file should be named `index.html`
  - make another new file and name this one `main.css`

- Open both files in atom, you can click and drag a tab, it'll form a shadow and let you 'split' the panes so you can look at multiple files at the same time
- It should look like this:

![](https://i.imgur.com/rqNFNEI.png)

Alternatively, you can use codepen: https://codepen.io/
Sign up for an account and then create a new pen

![](https://i.imgur.com/2VT93hR.png)

You'll then get a similar view to that in `atom` - you have a space for your `html` and `css` code. Below, your code will render (show up) as you write it

![](https://i.imgur.com/rqmr58Q.png)


You can use whichever editor you feel more comfortable using. With atom, you'll store your files locally on your computer, eventually you can put them on github. With codepen all your pens are stored in the cloud with your account.

## Write Boilerplate HTML

Boilerplate code is the bare minimum code required for ALL projects.

- First we have to identify that our html document is the latest HTML, there have been a few versions and we want to be sure to let the browser know we want the latest!

On the top line of the `index.html` file, write:

```html
<!DOCTYPE html>
```

We'll have to write a bit more code before we can see anything in our browser. Let's keep going

Now we'll create the rest of the html and put all of our code inside these tags

```html
<html></html>
```

Inside of our `html` tags, we'll include two tags: `head` and `body`

Developers enjoy working smarter and not harder. One thing we can do with our text edtiors is use autocomplete

Let's try it.

- type `head` and then press tab - should make the opening and closing tags for you
- below the head tag (not inside of it) type `body` and press tab


```html
<html>
  <head>

  </head>
  <body>

  </body>
</html>
```

You did it! This is the foundation of all html pages!

If you are using codepen, you can save this pen and start a new one or delete what we've written. Codepen builds these components for you, so you don't have to write them twice. When you use codepen, you can get started with all the content you want to appear in the `body`. If you need to adjust things for the head tag, you'd go into the `settings`.

For those of you using Atom, you can also get all this `boilerplate` code filled in for you by just typing `html` and pressing `tab`. **GOTCHA** the file extension MUST be `.html` in order for this to work.

### Create Content

Web pages are made up of three parts
- HTML which is the content (words and elements)
- CSS which is what styles our content
- JavaScript which provides interactivity/functionality. We won't have time to cover JavaScript today

When we've finished creating our content, it will look like this:

![](https://i.imgur.com/U7OKMgz.png)

We'll have
- an image
- an h1, h2 and h3 tags
- a form that contains
 - an input field
 - a button

#### An Aside About Images

You don't have to use a picture of me. You can use a photo of yourself or grumpy cat.

When you google for images to use be sure to use the `tools` dropdown.

![](https://i.imgur.com/4fiOnIr.png)

When you are learning and practicing, you can use whatever images you want with little worry. These images should just be on your computer and just for you.

If you want to share your work with the world, or use images for a job you must be sure to make sure you have permission to use the images the way you want.

Google can simplify finding images for you by using the tools dropdown. Alternatively, you can take your own pictures, hire a photographer or a designer.

#### Let's Code

We'll be writing all of our code inside our `body` tags (on codepen you'll just write code in the panel, you are already inside the body tags)

Let's start with an `h1`

```html
<body>
  <h1>Karolin Rafalski</h1>
</body>
```

We can now open this `html` file in the browser

Make sure you have selected your `index.html` file along the top you should see a chrome icon (or your preferred browser)

![](https://i.imgur.com/EFnOgJl.png)

You can click and drag the icon into a browser and violia! It should open there!

What success looks like:

![](https://i.imgur.com/xYTx5Dt.png)

Not only will you see the text you wrote in your file, you might also notice the browser URL is actually the location on your computer! (starts with `file:///`)

Let's write some more code

```html
<h1>Karolin Rafalski</h1>
<h2>Hi, I'm a Stamford-Based Web Developer</h2>
<h3>Say hello!</h3>
```

In order to see your changes, all you need to do is refresh the browser, you can push the refresh button or you can learn some more keyboard shortcuts by using `command r`

![](https://i.imgur.com/glEzWzi.png)

We'll notice that our different tags appear differently.

Remember `h` stands for headline. Headlines run from sizes 1 (the biggest) to 6 (the smallest). Initially the web was envisioned as a way to share scientific papers and other academic articles. So many elements are named in a way that would be useful for such purposes.

When the web first came about, the focus was all content. Some default styles (like font size) were included. Later, appearance started becoming more and more important.

The web was envisioned as a way to connect people and it was meant to be accessible by everyone. All the code and design was made to be as user friendly as possible.

When you build websites it's important to make sure you're making your HTML based on semantic naming - that will help screen readers properly interpret your content.

In the case of our simple page, there are no hard and fast rules to use `h` tags, but we'll do our best to go from most important down to more details.

### Adding an image

Image tags are a little different. They just show an image and have no actual content. Therefore they are referred to as `self closing tags`

```html
<img \>
```
How do we get our image to appear?

We have to give this tag a source attribute

```html
<img src="" \>
```

Copy and paste the url of your chosen image **INSIDE** the double quotes

```html
<img src="https://ga-core.s3.amazonaws.com/production/uploads/instructor/image/11367/thumb_image2016-10-24_13-32-29.png"\>
```

When you refresh the page, you should now see the image.

You can have many attributes inside your html tag. When you make an image tag you should also include an `alternate text tag`:  `alt` - inside of this attribute you would include text describing the image, that way if the image is broken a user can still know what they should see, and a screen reader can read the description of the image.

Let's try it:


```html
<img src="https://ga-core.s3.amazonaws.com/production/uploads/instructor/image/11367/thumb_image2016-10-24_13-32-29.png" alt="an image of Karolin"\>
```

The text inside an alt attribute is visible when the image is broken:

![](https://i.imgur.com/iaUO227.png)

### Make a Form

Forms are a ubiquitous part of the web. Let's make one.

Be sure to be below your `h3` tag

```html
<form>

</form>
```

Then, let's put a text input and a button inside of this form.


```html
<form>
  <input type="text" \>
  <button type="button" name="button">Send Message</button>
</form>
```

We can include some placeholder text by adding an attribute called `placeholder` inside our text input

```html
  <input type="text" placeholder="your message for me" \>
```

You may be asking yourself, how can I remember all the html elements and attributes?

Just google it!

A lot of people like W3 Schools and MDN best for resources, but go ahead and explore more and find the resources you like best.

You can google questions like "How do I add an image html"  and you'll find many answers. The more you practice the faster you'll get!
