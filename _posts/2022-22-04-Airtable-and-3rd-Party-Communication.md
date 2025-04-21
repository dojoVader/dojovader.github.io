---
layout: post
title: Airtable Scripting and HTTP Communication
category: airtable, fetch,platform-dev
date: 2022-08-12
author: "Okeowo Aderemi"
tag: [svelte,nocode]
image:
  path: airtable/SteamDeck-DB-Titles-Airtable.png
  width: 800
  height: 500

---


## Airtable Scripting and 3rd Party API ( WikiData & SteamGridDB)

I am currently working on an Airtable base; which basically manages the information of SteamDeck title from various platforms. The purpose of this note, is to highlight the means through which Airtable makes HTTP communication with 3rd Party APIs.

### HTTP Communication in Airtable

HTTP Communication can be handled through the use of the following:

1. Fetch API (Client)
2. remoteFetchAsync (Fetch via node)

As noted the Fetch API refers to the Native API by the browser, this is a new interface that makes it easy to make [XMLHttpRequests](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) while **remoteFetchAsync** is useful for API that have CORS [(Cross Origin Restriction Sandbox)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)


For more information about the differences, click on this [link](https://www.airtable.com/developers/scripting/api/fetch#differences-from-fetch-in-the-browser)

#### Note:

Here is a screenshot of the application
![Airtable Community](airtable/SteamDeck-DB-Titles-Airtable.png)


### Demonstration
![Airtable Fetch Demo](airtable/steamdeck-demo.gif)

Here is a code snippet making HTTP Calls to WikiData API and the SteamGridDB API

### Fetch with Wikidata API

```js
            const cell = await input.recordAsync("Select the Game ID",
                titleTable,{
                fields: ['Game']
            })
            const cellValue = cell?.getCellValue('Game');

            let wikiDataURI = `https://www.wikidata.org/wiki/Special:EntityData/${cellValue}.json?flavor=dump`

            let response = await fetch(wikiDataURI)

            const jsonData = await response.json();

            // Write the data into the field
            const entity = jsonData.entities[cellValue];
```

### remoteFetchAsync with SteamGridDB API

```js

            const resultData = await remoteFetchAsync(`https://www.steamgriddb.com/api/v2/games/id/${record?.getCellValue('SteamGrid ID')}`,{
                // @ts-ignore
                headers: {
                    'Authorization':` Bearer ${config.steamgriddb}`,
                    'Content-Type': 'application/json',
                },
                method: 'GET'
            })

            await resultData.json().then((data) => {
                const entity = data.data;
                //We need to fetch all
            },(error) => {
                console.error(error)
            })
```

FIN.

