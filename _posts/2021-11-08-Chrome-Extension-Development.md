---
layout: post
title: Chrome Extension ( Architecture and Development)
description: "Chrome Extension , MV3"
category: Chrome API
date: 2021-11-08
image: /assets/img/blog/how-to-export-chrome-extensions.jpg
tag: Chrome API

---

## Chrome Development and Architecture


### What is Chrome Extension
> Extensions are software programs, built on web technologies (such as HTML, CSS, and JavaScript) that enable users to customize the Chrome browsing experience.

[Source](https://developer.chrome.com/docs/extensions/)

### About extensions
Extensions are small software programs that customize the browsing experience. They let users tailor Chrome functionality and behavior in many ways, providing things like:

* Productivity tools
* Web page content enrichment
* Information aggregation
* Fun and games
* These are just a few examples of the many things that extensions can do. See the Chrome Web Store to see thousands of different examples of published extensions.

### How do extensions work?
Extensions are built on web technologies such as HTML, JavaScript, and CSS. They run in a separate, sandboxed execution environment and interact with the Chrome browser.

Extensions let you "extend" the browser by using APIs to modify browser behavior and access web content. Extensions operate by means of an end-user UI and a developer API:

### Extensions APIs
The extensions APIs allow the extension's code to access features of the browser itself: activating tabs, modifying net requests, and so on.

To create an extension, you assemble some resources -- a manifest, JavaScript and HTML files, images, and others -- that constitute the extension. For development and testing, you can load these "unpacked" into Chrome using extension developer mode. Once you are happy with your extension, you can package it and distribute it to users.


### Chrome Extension Architecture
![alt text](https://i.pinimg.com/564x/b1/96/7a/b1967acb93d62f5ecdd8c3d179095d71.jpg)

### References

[(Chrome Extension Developer Website 2021)](https://developer.chrome.com/docs/extensions/)
