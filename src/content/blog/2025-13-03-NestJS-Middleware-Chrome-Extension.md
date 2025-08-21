---
title: "NestJS Middleware for Chrome Extension"
excerpt: "NestJS Middleware for Chrome Extension"
categories:
  - NestJS
  - Chrome Extension
publishDate: "Mar 13, 2025"
author: "Okeowo Aderemi"
tags:
  - NestJS
  - Chrome-extension
toc: true
toc_sticky: true
permalink: /chrome-extension/nestjs-middleware/
---


This is a short article on adopting a middleware for Chrome extension development. This is almost unavoidable especially when building a Saas extension solution. Saas extensions often require the need to integrate with a 3rd party API or secure credentials, the reason being; that Web extensions can be easily reversed-engineered, the last thing you want is sharing your Open AI Key with the world, we've seen too many rookie mistakes from these so-called "vibe-coders".

Beneath are the advantages of adopting a Middleware for Chrome extensions.

### Advantages of Middle-wares in Chrome extension

1. Middleware helps safeguard tokens and credentials from being stolen.

2. Acts a proxy to 3rd Party API(s) and exchanging data with the extension.

3. Stripe Integration with Firebase for payment features

4. Handle authentication and login functionalities

#### Choosing the right technology for a Middleware / Proxy Service

When choosing the right technology for developing middleware, the requirements are not as complex as you can write this in any language; middleware exists to handle proxy requests from an extension to its destination and back in the format of a rest response.

Middlewares are great for 3rd party integrations with services; an extension that can easily pass information to another system, an instance is an extension that allows you to save personal information to Airtable.

Common languages used for writing middleware:

1. Java - Spring Boot

2. Node - ExpressJS, NestJS, NextJS ..... (A lot of frameworks)

3. Dotnet Core

4. PHP - Laravel, Symfony or Vanilla PHP

5. Go, Rust and a lot of other back-end solutions

The Spring boot framework was my initial choice; but after several considerations, I chose the NestJS framework due to the following reasons:

- NodeJS
- TypeScript Support
- Ease of deployment
- Similarity to Spring boot (DI, Annotations)
- Digital Ocean App platform support for Node Applications
- 3rd Party Support for Libraries (TypeORM feels like Spring JPA)
- DI/Modular Architecture ( Easy to create providers for configs and other libraries)
- AOP Like Features ( NestJS offers execution before/after on both Controllers and Middlewares, making it easy to create an API Quota)

#### Why middlewares for Saas applications

As mentioned in the previous posts, middleware offers a great opportunity to safeguard important credentials, track premium users and extend functionalities beyond the client. The following are some of the benefits that Saas extensions can benefit from:

- API Quota ( Offers an opportunity to track user quota(s) especially when making Open AI calls, once exhausted users can be prompted to refill via Stripe.
- Authentication
- Data-Bridge ( Communicate with external services through Proxy requests)
- Stripe Integration ( Handle user subscription to premium features)
- Data Extraction and Scrapping ( Sending scrapped information from DOM to API e.g Hubspot, Apollo)

#### Conclusion

And that's it, in the next article I will discuss how I used NestJS to develop an API Quota around PicStart API and integrate with the Bubble API to authenticate users for a chrome extension.

Adios
