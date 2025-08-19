---
title: "The Perfect platform tool for Chrome Extension Integration"
excerpt: "The Perfect platform tool for Chrome Extension Integration"
categories:
  - NestJS
  - Upwork
  - Integrations
  - Chrome Extension
  - Freelancing Tips
date: 2025-08-18
author: "Okeowo Aderemi"
tags:
  - [freelance, upwork, chrome-extension, nestjs, saas, platform-tool]
toc: true
toc_sticky: true
permalink: /chrome-extension-platform-tool/
---


### About my Chrome Extension and Integration Background

As a developer building Chrome extensions, I often encounter the need for robust backend support to handle complex features like data synchronization, API integrations, authentication, and real-time communication. While Chrome extensions primarily run in the browser environment (using content scripts, background service workers, and popup UIs), many modern extensions require a server-side component to act as a middleware layer. This middleware bridges the extension with external services, databases, or even other extensions/users.

### The Need for Middlewares and Integrations

Saas extensions are becoming popular, and many developers are looking for ways to integrate their extensions with third-party services. This is where middlewares and integrations come in. They allow developers to connect their extensions with APIs, databases, and other services, making it easier to build complex applications. Majority of my work has always included building middlewares and integrations alongside some DevOps operations with Docker and Digital Ocean. This has given me a unique perspective on how to build scalable and maintainable applications.

In my project, the "middlewares" refer to interceptors for HTTP requests, authentication guards, and logging pipelines on the server. "Integrations" involve connecting to external APIs, WebSocket-based real-time updates (e.g., notifying the extension of new events), and handling OAuth flows. The Chrome extension communicates with this server via chrome.runtime.sendMessage or fetch requests, ensuring a seamless user experience.

Choosing a framework for this server-side layer was crucial: it needed to be scalable, maintainable, and efficient for handling bursts of requests from multiple extension instances.

### Choosing Node and NestJS

Initially I was plagued about the development of such tool, clearly I would expect some enterprise features and offerings, my greatest concerns were the complexity of the backend platform and the time it would take to build it.

I initially chose Spring Boot but I quickly realized that finding an extra resource would be an issue. Go was the next choice, but as of the period, I had neither knowledge of the Go syntax nor it's ecosystems/libraries. Node came as a safe choice due the the appeal of NestJS and the architecture design. The trick behind mastering NestJS is understanding the modular architecture and Express.js, alot of development would be centered around the use of modules, and building reusable components.

NestJS allows custom decorators that has access to the ExecutionContext, which makes it easy to implement custom authentication and authorization logic. This is a powerful feature that allows developers to create complex applications with ease. Spring Boot developers can relate to this, personally I think it's closer to Spring boot than any framework in the Node ecosystem.

### Authentication and Authorization

Authentication and authorization are crucial for any platform tool, especially when dealing with sensitive data and third-party services. NestJS provides a powerful authentication module that allows developers to implement various authentication strategies, such as JWT, OAuth2, and more.

The Passport library makes it easy to integrate these strategies into the application. Personally I chose the JWT strategy, this platform is an internal tool, so I didn't see the need to implement OAuth2. The JWT strategy allows for stateless authentication, which is ideal for a single instance built mostly for Integrations and API management.

### Features and Functionality

The features and functionality of the platform tool were built based on my experience, I spent alot of time writing down features and identifying functionalities that would be useful for premium extensions. An example was the management of query selectors to ensure extension settings can be modified without a re-deployment to the store.

There is the plan to integrate into the Devtool API to provide rich features in the extension. The platform tool also provides a dashboard for managing API keys, monitoring usage metrics, and viewing extension settings.

The use of TypeORM makes it easy to manage the database and perform CRUD operations on the data. The platform tool is designed to be modular and extensible, allowing developers to add new features and functionality as needed.

#### The Nest Architecture

NestJS shines in its Angular-inspired modular design, which allows breaking down the application into feature-specific modules. This is particularly useful for Chrome extension backends, where different integrations (e.g., one module for Hubspot API, another for database syncing) need to coexist without code sprawl.

For example, in my project, I created separate modules for each integration:

``` typescript
import { access, constants } from 'node:fs';
import { cwd } from 'node:process';
import { DynamicModule, Module } from '@nestjs/common';
import { LiquidOptions } from 'liquidjs';
import { LiquidService } from './service/liquid.service';
import { LIQUID_ENGINE_TOKEN } from './constants';
import { getLiquidInstance } from './utils/liquid-instance';

@Module({})
// Code snippets extracted from a custom liquid module that i wrote
export class LiquidModule {
  static checkIfViewFolderExists(options: LiquidOptions): void {
    if (!options.root || options.root.length === 0) {
      throw new Error(
        'Liquid root directory must be specified in the options.',
      );
    }
    // Additional checks can be added here to ensure the folder exists
    access(options.root as string, constants.F_OK, (err) => {
      if (err) {
        throw new Error(
          `Liquid root directory does not exist: ${options.root} in current path [${cwd()}]`,
        );
      }
    });
  }
```

Chrome extensions are often written in TypeScript for better developer experience, and aligning the backend with the same language reduces context-switching. NestJS is built with TypeScript from the ground up, providing decorators, interfaces, and DTOs (Data Transfer Objects) that enforce strong typing.

Consider validating incoming requests from the extension (e.g., user activity logs):

```typescript
// activity.dto.ts
import { IsString, IsNumber } from 'class-validator';

export class CreateActivityDto {
  @IsString()
  readonly url: string;

  @IsNumber()
  readonly duration: number;
}

// activity.controller.ts
import { Body, Post } from '@nestjs/common';
import { CreateActivityDto } from './activity.dto';

@Post('log')
create(@Body() createActivityDto: CreateActivityDto) {
  // Process validated data
}
```

This setup uses class-validator and class-transformer (integrated via NestJS pipes) to automatically validate and transform data. Errors are caught early, preventing runtime issues that could crash the extension's background worker. Alternatives like Koa offer less out-of-the-box TypeScript integration, requiring more boilerplate for type safety.

##### Dependency Injection and Inversion of Control (IoC)

NestJS's dependency injection system, powered by its IoC container, makes mocking dependencies for unit tests straightforward. .a key requirement for reliable integrations. In Chrome extension scenarios, where the server might need to simulate extension behaviors during testing, this is invaluable.

For instance, injecting a configurable API client:

```typescript
// api.service.ts
import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ApiService {
  constructor(private httpService: HttpService) {}

  async fetchCalendarEvents() {
    return this.httpService.get('https://api.google.com/calendar/events');
  }
}
```
During tests, I can easily mock HttpService without global overrides. This contrasts with vanilla Node.js setups, where manual dependency management often leads to tightly coupled code, complicating tests for edge cases like network failures in extension integrations.

#### Powerful Middleware and Interceptor Support for API Quotas

Middlewares in NestJS are first-class citizens, allowing me to create reusable pipelines for logging, authentication, and rate-limiting—essential for securing extension-server communications.

A custom middleware for authenticating extension requests:

```typescript
// auth.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['x-extension-token'];
    if (!token) {
      return res.status(401).send('Unauthorized');
    }
    // Validate token (e.g., JWT from Chrome storage)
    next();
  }
}
```
NestJS also supports interceptors for transforming responses, which I used to compress data sent back to the extension, reducing latency. While Express has middleware too, NestJS's scoped and module-bound middlewares provide better organization, especially when dealing with multiple integrations.

##### Middlewares

Middlewares in NestJS are functions that execute before the route handler, processing incoming requests. They are ideal for tasks like request validation, authentication, or quota enforcement. For API quota calls, a middleware can:

* Check the client's API key or IP address.
* Track the number of requests against a quota limit (e.g., using Redis or an in-memory store).
* Block requests exceeding the quota with a 429 Too Many Requests response.

Example Use Case: A middleware can extract an API key from headers, query a rate-limiting service, and either allow or reject the request based on the quota.

##### Interceptors

Interceptors in NestJS are used to transform or handle requests and responses globally or per route. They are more powerful than middlewares, as they can modify both the request and response, and are integrated into the NestJS lifecycle. For API quota calls, an interceptor can:

* Log request metadata (e.g., timestamp, endpoint).
* Enforce quotas by checking usage limits before processing the request.
* Transform responses, such as adding quota usage headers (e.g., X-Rate-Limit-Remaining).

*Example Use Case*: An interceptor can check the quota for a user, throw a HttpException if exceeded, or append quota information to the response.

##### Key Differences

* *Scope*: Middlewares are Express-like and run early in the request pipeline, while interceptors are part of NestJS’s dependency injection system and can access the full request-response cycle.

* *Use for Quotas*: Middlewares are simpler for basic quota checks; interceptors are better for complex logic or response manipulation.

* *Order*: Middlewares run before interceptors in the request lifecycle.

*Recommendation*: Use middlewares for lightweight quota enforcement (e.g., rate-limiting with Redis) and interceptors for advanced quota tracking or response customization.

#### Building a Platform tool for API and Payment Integration

NestJS is a powerful framework for building scalable server-side applications, ideal for integrating payment gateways and APIs. For payment integration:

* Payment Gateways: Use libraries like stripe, paypal-rest-sdk, or square to integrate with providers. Create a PaymentModule with services to handle payment intents, refunds, or subscriptions.

* API Integration: Use NestJS’s HttpModule (based on Axios) to make external API calls. Implement services to authenticate, send requests, and handle responses (e.g., OAuth for Stripe or PayPal).

* Quota Management: Combine with interceptors or middlewares to enforce API quotas, validate requests, and handle rate-limiting errors (e.g., 429 responses).

* Security: Use environment variables for API keys, implement request validation with DTOs, and handle errors with NestJS’s exception filters.

Example: A PaymentService can call Stripe’s API to create a payment intent, store transaction details in a database, and return a client secret to the frontend.

##### Custom Liquid Module for Vue Admin

Liquid is a templating engine commonly used for dynamic content rendering. To serve a Vue admin dashboard with a custom Liquid module in NestJS:

* Custom Module: Create a LiquidModule in NestJS to initialize the Liquid engine (liquidjs). Define a service to parse and render Liquid templates stored in files or a database.

* Template Rendering: Expose an endpoint (e.g., GET /admin/template) that accepts template data, processes it with Liquid, and returns rendered HTML or JSON for the Vue admin.

* Integration with Vue: The Vue admin can fetch rendered templates via API calls or use a server-side rendered (SSR) approach with NestJS serving pre-rendered Liquid content.

* Dynamic Data: Pass dynamic data (e.g., user roles, dashboard stats) to Liquid templates, allowing the Vue admin to display customized UI elements.



##### Considerations

* Performance: Cache Liquid templates in memory (e.g., using Redis) to reduce parsing overhead.
* Security: Sanitize user inputs to prevent template injection attacks in Liquid.
* Scalability: Use NestJS’s microservices or queues (e.g., Bull) for asynchronous payment processing or heavy API calls.
* Vue Integration: Ensure the Vue admin handles API errors gracefully and supports dynamic updates from Liquid-rendered data.
* Docker Containerization

##### Screenshot

![Screenshot 1](/assets/images/platform-chrome-2.png)
![Screenshot 2](/assets/images/Screenshot_20250816_205007.png)

#### Final Notes

Choosing NestJS for the middlewares and integrations in my Chrome extension project was driven by its modular, type-safe, and extensible nature, which directly addressed the challenges of building a reliable backend. It allowed me to focus on features rather than boilerplate, resulting in a more maintainable and performant system. If you're developing extensions with server-side needs, I highly recommend evaluating NestJS. It's a game-changer for bridging browser and backend worlds.

Feel free to reach out if you'd like code samples or further details on the implementation!
