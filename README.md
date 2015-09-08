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

The constructor.

```js

var Ago = require("hl-ago");

// This are the only three options.
var options = {
  date: new Date("1993/10/15 09:05:10 pm"), // date to work with.
  lang: 'en-US', // language to use.
  hourFormat: 12 // hour format 24 or 12
};

var ago = new Ago(options);

```

`Ago.getFullDate()`
-------------------

This method returns a string with the full date.

```js

ago.getFullDate(); // => October 15th 1993 09:05:10 pm

```

`Ago.getDate()`
---------------

This method returns a string just with the date.

```js

ago.getDate();     // => October 15th 1993

```

`Ago.getTime()`
---------------

This method returns a string just with the time.

```js

ago.getTime();     // => 09:05:10 pm

```

`Ago.ago()`
----------------

This method returns a string telling how long ago was a date.

```js

ago.ago();    // => 2 decades ago
              //    (2 decades ago from 2015)

```

`Ago.toString()`
----------------

Same as Ago.ago().

```js

ago.toString(); // => 2 decades ago
ago + "";       // => 2 decades ago
                //    (2 decades ago from 2015)

```

`Ago.setLanguage(language)`
----------------

// TODO: Add documentation

`Ago.getLanguage()`
----------------

// TODO: Add documentation

`Ago.setHourFormat(format)`
----------------

// TODO: Add documentation

`Ago.getHourFormat()`
----------------

// TODO: Add documentation

`Ago.loadCustomLanguages(languages)`
----------------

// TODO: Add documentation


LICENSE
=======
MIT
