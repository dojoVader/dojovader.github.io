---
title: "Building a Saas Chrome Extension"
excerpt: "Exploring NestJS and Chrome Extension for Middleware and API Integration"
categories:
  - NestJS
  - Chrome Extension
date: 2024-10-25
author: "Okeowo Aderemi"
tags:
  - [saas, chrome-extension]
toc: true
toc_sticky: true
permalink: /chrome-extension/building-a-saas-product/
---


### Preface

Hey there! For the past couple of years, I’ve dived into building Chrome extensions for clients and startups. I’ve discovered that creating a SaaS extension is not just fun but also a super smart business move. So, I thought, why not document my journey? I’m excited to share my experiences, lessons learned, and maybe some tips along the way as I work on this SaaS extension. Let’s see where this adventure takes us!

### Toolset/Platforms

For this project, I will be using the following tools/platforms:

* **Webpack** ( I thought of using Vite, but the truth is, I have spent most of my time learning Webpack configuration, and I'm not ready to switch to Vite yet, the amount of Vite knowledge is not something I have prepared myself for, so I will stick with Webpack for now). I can't throw away 4 hours of watching how Webpack works internally.


* **TypeScript**
  (I love TypeScript so much, it helps me catch errors before runtime, and it's a good practice to use it. The `@types/chrome` package for Chrome extension development) is an important typing to have installed, it provides introspections for Chrome API, eliminating the need to consult the documentation. Decorators in Chrome extensions are still yet to be explored, so there's a possibility of building utility functions wrapped around decorators.


* **React** Chrome extensions can be built with Vanilla JS, but React offers a more intuitive approach to handling templating and conditional rendering. Another advantage is that TSX reduces the code needed for complex UI(s).


* **Zustand** (Zustand is an easy-to-use State management library, one of its beauty is the ease of triggering an action outside a React hook, the API is minimal with little boilerplate code. It should be noted that the Zustand state cannot be shared across different contexts (e.g. Popup/ SidePanel and ContentScript), but it's a good choice for managing the state within the same context).


* **Material UI** (Material UI comes with a rich set of components, and it's a good choice for building Chrome extension UI).


* **Firebase** (Firebase is a platform designed for building mobile and web applications with real-time features. Firebase SDK can manage Stripe subscription details, handle user authentication, and track payment states for premium features). <br/><br/>
  **Note**:   A good security practice is to add rules to disable the write access on the client.


* **NestJS** (NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. I will be using it to build a backend server for my Chrome extension, the backend server will be responsible for handling Stripe webhooks, and managing user subscriptions). 
 It also serves as a proxy for the Chrome extension to interact with 3rd party APIs and secure your API keys from being exposed in the Chrome extension source code.
* Docker + Digital Ocean: Deploy the backend application

### Monetization Strategy

Monetizing a Chrome extension can be tricky; knowing the right strategy and model to adopt plays an important role, obviously due to my lack of experience with monetization. 

I can only make probable assumptions on what could work, but I will be exploring the following monetization strategies below:

* **One Time Fee**: This is the most common monetization strategy for Chrome extensions, users pay a one-time fee to access premium features. This model is simple and easy to implement, but it may not be the most profitable in the long run.


* **Subscription Model**: This involves charging users a monthly or yearly fee to access premium features. This model is more profitable in the long run, but it may be harder to convince users to pay a recurring fee. It's my personal opinion that users would only pay for extensions that are either tied to their productivity. So if an extension allows me to complete tasks faster which is tied to my earning potential, I would be willing to pay for it, however, that's just an assumption on my part.

 
* **Freemium Model**: This involves offering a free version of the extension with limited features and a premium version with additional features. This model is a good way to attract users and upsell them to the premium version. This model is also a good way to build a user base and get feedback on the extension.


* **API Quota Model**: This involves charging users based on the number of API requests they make. It's more common for extensions that interact with 3rd party APIs. This model is a good way to monetize the extension without charging users directly.

### Payment Gateway:

**Option 1**: Stripe but handle taxes manually\
**Option 2**: LemonSqueezy an MOR (Merchant of Record) that handles taxes for you


### Marketing Strategy

**Note**: I am not a marketing expert, so I will be exploring the following marketing strategies based on my limited knowledge:

Now the question is how do I get users to install my extension, the first key part is understanding your audience, and knowing what community they belong to, and where they hang out. 

My extension centres around Shopify Integration so that means, joining the same spaces as my audience and engaging with them. 

The goal is not to appear 'spammy' but to provide value and engage with the community, develop a level of reputation, and contribute resources that have a marketing pitch around your extension. 

Discord, Reddit and Social media are good mediums for reaching out to a wide audience, it also helps if the author has a level of influence within each community and by influence, it means having a reputation that's tied to the platform being targeted, it shows a level of expertise and trustworthiness.



### Conclusion

In the next post, I will walk you through the Chrome extension architecture and building extensions with premium features in mind. Stay tuned for more updates.




