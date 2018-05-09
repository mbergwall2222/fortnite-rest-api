# Project Title

This is a nodejs wrapper for the https://fortnite.rest API. It's fairly simple, so feel free to make edits but make sure you give creidt.

## Getting Started

This repo is a simple npm module that can be installed quickly and easily.

### Prerequisites

First initiate an npm package:

```
npm init
```

and follow those prompts.

### Installing

Now it's time to install our package. Do this command:

```
npm install fortnite-rest-api
```

And then add it to your script

```
var FortniteAPI = require('fortnite-rest-api');

var Fortnite = new FortniteAPI("[YOUR API KEY]");
```

Be sure to replace [YOUR API KEY] with your api key that you can get from https://fortnite.rest for free.

## Example

```
var FortniteAPI = require('fortnite-rest-api');

var Fortnite = new FortniteAPI("my api key");

Fortnite.getStats("pc","ninja").then((res)=>{
  console.log(res);
  }).catch((res)=>{
    console.log(`ERROR! ${res}`);
    });
```

Here is the list of the methods you can use:

** NOTE: ** The object will return promises, and throw rejections if there are any errors.

* getStats(platform,username)
* getStore()
* getLeaderboard(gameType,platform)
