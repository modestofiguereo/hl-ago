Ago
===

`Ago` is a simple tool for calculating how long ago a date was.

```js

var Ago = require("hl-ago");

var ago = new Ago({
  date: new Date("1993/10/15 09:05:10 pm"),
  lang: 'en-US',
  hourFormat: 12
});

ago.getFullDate(); // => October 15th 1993 09:05:10 pm
ago.getDate();     // => October 15th 1993
ago.getTime();     // => 09:05:10 pm
ago.toString();    // => 2 decades ago
                   //    (2 decades ago from 2015)

```

API
---

`Ago(options)`
--------------

// TODO: Add documentation

`Ago.getFullDate()`
-------------------

// TODO: Add documentation

`Ago.getDate()`
---------------

// TODO: Add documentation

`Ago.getTime()`
---------------

// TODO: Add documentation

`Ago.toString()`
----------------

// TODO: Add documentation


LICENSE
=======
MIT
