---
layout: post
title: Airtable Development ( API Overview ) Part 1
description: Quick overview of Airtable API
category: Airtable, Independent Research, lowcode
date: 2022-05-02
author: "Okeowo Aderemi"
tag: [airtable,nocode]
image:
  path: airtable/Base-Airtable-Scripting.png
  width: 800
  height: 500

---

### Greetings

Welcome, in this note, I will simply be covering the important aspect of the Airtable API and
important and advanced Airtable features worth mentioning.

##### base

base basically refers to 'Database' in Airtable, it's the storage that contains your information.
The base has access to list of tables.
```
console.log(`The name of my base is ${base.name}.`);
console.log(`It contains ${base.tables.length} tables.`);
```

[Documentation](https://www.airtable.com/developers/scripting/api/base)


##### cursor

A cursor contains information about the active table and active view

`let tableId = cursor.activeTableId;`

##### Table
>Table represents each table in your base. You can use it to find all of the views, fields, and records it contains. Each base has at least one table.

#####  View
> A view belonging to a table in your base. Each table has at least one view.
```angular2html
let table = base.getTable("Tasks");
let view = table.getView("Todo");
console.log(view);
```
##### Field
> A field belonging to a table in your base. Each table has at least one field.

```angular2html
let table = base.getTable("Tasks");
let field = table.getField("Description");
console.log(field);
```
##### RecordQueryResult
> A RecordQueryResult represents a set of records. It's a little bit like a one-off Airtable view: it contains a bunch of records, those records can be sorted according to your specification, and just like a view, you can either have all the fields in a table available, or you can just ask for the fields that are relevant to you.
```angular2html
// query for all the records in a table
let table = base.getTable("Tasks");
let queryResult = await table.selectRecordsAsync({
    sorts: [
       // sort by "Description" in ascending order
       {field: "Description"},
       // then by "Priority" in descending order.
       {field: "Priority", direction: "desc"},
    ]
});
// print ID & "Description" from each record:
for (let record of queryResult.records) {
    console.log(`
**${record.id}**
${record.getCellValueAsString("Description")}
`);
}
```

Interactive Controls in Airtable

Inputs

#### textAsync
A prompt in the scripting section for accepting input
![Input Controls](https://blog.airtable.com/content/images/2020/02/blog.png)

#### buttonAsync
A button for rendering specific actions based on the selection
![Button Image](airtable/Study-Guides-My-Study-Cards-Airtable.png)
```
let catOrDog = await input.buttonsAsync('Cats or dogs?', ['Cats!', 'Dogs!']);
if (catOrDog === 'Cats!') {
    output.text('Meow');
} else {
    output.text('Woof');
}
```

#### tableAsync
This show a table for you yo select from
![Button Image](airtable/Study-Guides-My-Study-Cards-Airtable (1).png)
```
let table = await input.tableAsync('Pick a table');
let result = await table.selectRecordsAsync();
output.text(`There are ${result.records.length} records in '${table.name}'.`);
```

#### Field
This prompts the user to select a specific field in the View/Base
```
let table = base.getTable("Projects");
let field = table.getField("Category");
console.log(`Field id: ${field.id}`);
```

## Other APIs


#### Config
Configuration settings for the script

#### fileAsync
Allows you select a file and perform actions e.g CSV Import, XML etc.

#### output
> Your scripting app can output rich information to show your users what's happening while your script runs, or to display custom analysis of the data in your base. Output is done through the built-in output object.
```
output.text('Hello, world!');
```
