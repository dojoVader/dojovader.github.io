---
layout: post
title: 20 Days of Zapier and Airtable Platform
category: Airtable, Independent Research, No code
date: 2022-06-27
author: "Okeowo Aderemi"
tag: [airtable,nocode]
image:
path: https://support.airtable.com/hc/article_attachments/115017111548/Screen_Shot_2017-07-11_at_1.14.21_PM.png
width: 800
height: 500

---


Here is my 20-Day experience of using Airtable and Zapier Platform. I covered the basic features and development experience.

## Airtable
Airtable is a low-code platform that offers spreadsheet features with automation and integration to third-party services/applications. SMEs (Small and Medium Enterprises) can leverage the platform to automate business processes at a much lower cost.

## Zapier ?

>Zapier is an online platform that helps you automate workflows by connecting the apps and services. It allows you to automate tasks without having to build this integration yourself. Or hiring someone to build this integration for you."

Source: Zapier

#### TLDR;
Zapier allows you to connect different applications into workflows ( tasks/process); An example is the integration of Gmail and Slack for standup meetings.


# Airtable Experience


### Interface

The Airtable UI consists of a spreadsheet database design, with access to automation and extensions. The Airtable client design is intuitive and easy to navigate the platform.

![Airtable User Interface](airtable/a93bc4e6-f18f-47dd-b716-9aa3a8298950.png)

### Forms

Airtable Form easily maps information from inputs to the base. A good use-case for airtable forms are; surveys, questionnaires and populating of data.
![Airtable User Interface](airtable/Forms.png)

### Airtable Expression
Airtable expressions involve Functions, numeric and other operations on a field.

![Airtable Grouping](airtable/Group.png)



```
DATETIME_FORMAT({Date (from Order Reference)},'D')
```

The expression above evaluates the date format to day. This allows Airtable to group records by Day.

### Automations

Automation provides the customization of custom trigger actions. It allows SMEs to handle repetitive tasks and processes. It mainly consists of triggers and actions.

A trigger is a specified event such as a record created, deleted or updated, while an action is a task executed after a trigger.

#### Note:

Airtable provides an intuitive approach to having conditions during the action step.

![Airtable Grouping](airtable/automations.png)
![Airtable Grouping](airtable/automations2.png)
![Airtable Grouping](airtable/automations3.png)
![Airtable Grouping](airtable/automations4.png)


### Integration with 3rd Party Application

Airtable offers communication to third-party applications and services through the following:

*Scripting Extension*

Http Requests Calls to external services based on the records in the base.

```
let response = await fetch('https://api.github.com/orgs/Airtable');
console.log(await response.json());
```

*Custom Extensions*

The Block SDK provides the development of Block apps and access to Airtable API for HTTP communication.

![Airtable Grouping](airtable/airtable-apps.png)

It also offers a marketplace where additional apps can be added to the base, It should be noted that free users are only limited to 1 App.
![Airtable Marketplace](airtable/Marketplace-Airtable.png)



### My Development Experience with Airtable

JavaScript is the core driver for Airtable Development and some Airtable API(s), and with such, you can both handle script and custom extension.

#### Specific JavaScript Knowledge

Scripting Extension requires minimal JavaScript knowledge such as loops, control structure and fetch. I will also advise spending time on some array algorithms and array ES6 methods (map, reduce) etc.

While the Custom Extension requires React and also preferably the React Hooks approach.


Airtable development experience is categorized as follows:

* Airtable Scripting
* Airtable Custom Apps
* Airtable REST API(s)


### Airtable Scripting

TLDR; Scripting gives you access to the Airtable API (Airtable Instance). It provides a reference to bases, records, and fields. Scripting helps with data manipulation and repetitive tasks within the Airtable client.

![Airtable User Interface](airtable/a93bc4e6-f18f-47dd-b716-9aa3a8298950.png)

### Airtable Custom Apps

Airtable Block SDK essentially give a developer the ability to create custom apps. There are tons of API references in the documentation. React and React Hooks are prerequisites for this development. The Block CLI handles heavy-lifting such as scaffolding Airtable projects for development.

![Airtable Custom App](airtable/To-do-list-tutorial-Airtable-Blocks-SDK.png)


### Airtable Rest API

With Airtable REST API, You can build external third-party services that communicate with the Airtable REST API. It has endpoints for operations such as listing tables, fields and bases. e.g. Shopify Apps using the Airtable API to back up products.

![Airtable Meta API](airtable/Metadata-API-Airtable.png)


### Airtable Gigs

You can find Airtable gigs via the following:
* Upwork
* Airtable Community Forum
* Reddit

### Airtable Platform as a viable source of revenue?

##### Scripting

Scripting is a quick source of income, as clients are looking for a consultant to develop scripts for their business needs and processes. An example is a script to remove duplicate records or search for complex conditions.

##### Custom App Development

Custom apps for specific business needs, custom apps require more technical skills and expertise.



### Conclusion
Airtable Platform is still a niche platform, but it offers convenient features for SME processes at a cost-effective price and an opportunity for freelancers looking for additional skills.





