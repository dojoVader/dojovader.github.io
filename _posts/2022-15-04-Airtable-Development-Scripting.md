---
layout: post
title: Airtable Development ( Scripting )
description: Get started with learning Airscript
category: Airtable, Independent Research, lowcode
date: 2022-04-25
author: "Okeowo Aderemi"
tag: [airtable,nocode]
image:
  path: https://support.airtable.com/hc/article_attachments/115017111548/Screen_Shot_2017-07-11_at_1.14.21_PM.png
  width: 800
  height: 500

---


## Day 2: Airtable Scripting

Airtable provides an API which allows developers to interact with the Base/Table and views. Here is some detailed information pulled from the Airtable scripting page.

> Scripting lets you write short scripts to reduce time spent on repetitive tasks and uncover deeper insights with advanced queries and custom reporting. A script can:

> Determine a list of duplicate records with custom logic to identify and merge duplicates
Determine a list of records that don't satisfy a custom constraint or validation rule (e.g. each person may only have up to 3 active tasks assigned to them)
For each record in a view, compute a value based on the other cells and write the result to an output field
Fetch information from an API and write the result to an output field for each record (e.g. currency conversion rates)
Prompt the user for the name of a new project, then automatically create the relevant project and task records
`

Airtable API Reference

Here is a link to the Airtable API Reference page, where it details APIs for interacting with the Airtable instance.



#### Note:

Fetch, based on my understanding of the documentation, this fetch simply might be referring to node and not the client. as it mentions the issues of CORS and how CORS browser restrictions do not apply to it. The most likely use would be for 3rd party components to call external API or integration with external services.


#### Required Skills for Airtable Scripting

Airtable Scripting simply requires an understanding of the JavaScript Language. I have good knowledge on JavaScript and TypeScript, so this makes it less hard to get into.
![Airtable Community](airtable/Base-Airtable-Scripting.png)

In the next article, I will cover the experience of working with Airtable scripts and what type of solutions I can look into for an Airtable Project ?

Fin.

#### UPDATE:
* Scripting does not have access to the DOM API
* Scripting doesn't have access to multiple selected records in the Cursor object.
* There is no direct approach to fetching records by name, you have to fetch a collection of records and filter.










