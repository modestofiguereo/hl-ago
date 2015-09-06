var tape = require('tape');
var Ago = require('../Ago');

tape('full date', function (t) {
    t.plan(1);

    var ago = new Ago({
      date: new Date("1993/10/15 09:05:10 pm"),
      lang: 'en-US',
      hourFormat: 12
    });

    t.equal(ago.getFullDate() + "", 'October 15th 1993 09:05:10 pm');

    console.log(" --------------------- ");
    console.log(ago.getFullDate() + "");
});

tape('date', function (t) {
    t.plan(1);

    var ago = new Ago({
      date: new Date("1993/10/15 09:05:10"),
      lang: 'en-US',
      hourFormat: 24
    });

    t.equal(ago.getDate(), 'October 15th 1993');

    console.log(" --------------------- ");
    console.log(ago.getDate());

});

tape('time', function (t) {
    t.plan(1);

    var ago = new Ago({
      date: new Date("1993/10/15 09:05:10 pm"),
      lang: 'en-US',
      hourFormat: 12
    });

    t.equal(ago.getTime(), '09:05:10 pm');

    console.log(" --------------------- ");
    console.log(ago.getTime());
});

tape('toString', function (t) {
    t.plan(1);

    var ago = new Ago({
      date: new Date("1993/10/15"),
      lang: 'en-US',
      hourFormat: 12
    });

    t.equal(ago + "", '2 decades ago');

    console.log(" --------------------- ");
    console.log(ago + "");
});
