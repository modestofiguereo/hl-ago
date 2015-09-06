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

tape('load languages', function (t) {
    t.plan(4);

    var ago = new Ago({
      date: new Date("1993/10/15 09:05:10 pm"),
      lang: 'en-US',
      hourFormat: 12
    });

    var languages = [
      {
        language: 'es-DO',
        body: {
          months: [
            "Enero",
            "Febrero",
            "Marzo",
    		    "Abril",
            "Mayo",
            "Junio",
    		    "Julio",
            "Agosto",
            "Septiembre",
    		    "Octubre",
            "Noviembre",
            "Diciembre"
          ],
          units: {
            second: {
              singular: 'Hace {second} segundo',
              plural: 'Hace {second} segundos'
            },
            minute: {
              singular: 'Hace {minute} minuto',
              plural: 'Hace {minute} minutos'
            },
            hour: {
              singular: 'Hace {hour} hora',
              plural: 'Hace {hour} horas'
            },
            day: {
              singular: 'Hace {day} día',
              plural: 'Hace {day} días'
            },
            week: {
              singular: 'Hace {week} semana',
              plural: 'Hace {week} semanas'
            },
            month: {
              singular: 'Hace {month} mes',
              plural: 'Hace {month} messs'
            },
            year: {
              singular: 'Hace {year} año',
              plural: 'Hace {year} años'
            },
            decade: {
              singular: 'Hace {decade} decada',
              plural: 'Hace {decade} decadas'
            },
            century: {
              singular: 'Hace {century} sigo',
              plural: 'Hace {century} sigos'
            },
            millennium: {
              singular: 'Hace {millennium} milenio',
              plural: 'Hace {millennium} milenios'
            }
          },
          date: '{d} de {m} del año {y}'
        }
      }
    ];

    ago.loadCustomLanguages(languages);
    ago.setLanguage('es-DO');

    t.equal(ago + "", 'Hace 2 decadas');
    t.equal(ago.getTime(), '09:05:10 pm');
    t.equal(ago.getDate(), '15 de Octubre del año 1993');
    t.equal(ago.getFullDate(), '15 de Octubre del año 1993 09:05:10 pm');

    console.log(" --------------------- ");
    console.log(ago.getFullDate() + "");
});
