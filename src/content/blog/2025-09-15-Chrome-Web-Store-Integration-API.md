---
title: "PayExtend: Chrome Webstore Integration"
excerpt: "Integrating the Chrome Webstore API into PayExtend"
categories:
  - NestJS
  - MV3
  - Node
publishDate: "Sep 15, 2025"
author: "Okeowo Aderemi"
tags:
  - NestJS
  - Chrome-extension
  - Platform Integration
toc: true
toc_sticky: true
permalink: /chrome-extension/nestjs-middleware/
---


### Introduction

PayExtend is a SaaS integration platform designed to empower developers and businesses by streamlining the creation and management of premium Chrome extensions.

Inspired by my extensive experience on the Upwork platform, where I built and delivered multiple SaaS-based Chrome extensions for clients, PayExtend addresses the common challenges faced in integrating robust payment systems and custom APIs.

The platform simplifies the process by offering seamless integration with leading payment gateways like Stripe and Polaris, enabling developers to efficiently incorporate secure, scalable payment solutions. Additionally, PayExtend provides access to customizable APIs and a suite of advanced features, allowing for rapid development and deployment of high-quality, user-focused Chrome extensions tailored to diverse business needs.
![PayExtend Screenshot](/images/Screenshot_20250915_185406.png)

### Technologies

PayExtend is built on the NestJS framework, the framework provides developers a modular architecture making it seamless to provide add-ons and de-coupled modules, the dashboard is built on the Vue framework.

We use the following tools/packages:
* Passport
* TypeORM
* LiquidModule (Custom Module)
* Docker
* MariaDB
* Redis
* Firebase Admin


### Webstore API Integration

To enhance PayExtend’s functionality, integrating the Chrome Web Store API would allow users to monitor their Chrome extensions’ status directly from the Web Store, providing real-time insights such as extension status (Published/ Rejected/ Pending).

Additionally, implementing a feature to upload extensions to the Chrome Web Store from external sources via PayExtend could further simplify the deployment process. By leveraging the Chrome Web Store API’s endpoints for publishing and updating extensions, developers could upload and manage their extensions without leaving the platform, improving efficiency and user experience.

You can find more information about the [Chrome Webstore API](https://developer.chrome.com/docs/webstore/api)
