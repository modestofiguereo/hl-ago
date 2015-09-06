/* ----------------------------------------------------------- *\
  This file contains the logic for Ago librery.

  License    : GPL-02

	Author     : Modesto Figuereo Fernandez.
	Email      : figuereo.fernandez.modesto@gmail.com
	Twitter    : @ModestoFiguereo

	(c) copyright 2015. All rights reserved.
\* ----------------------------------------------------------- */


'use strict';

module.exports = (function() {
  
  function zeroFill(number, width)
  {
    width -= number.toString().length;

    if ( width > 0 )
    {
      return new Array( width + (/\./.test( number ) ? 2 : 1) ).join( '0' ) + number;
    }

    return number + "";
  }

  // Default Supported Languages.
  var languages = {
    'en-US': {
      months: [
        "January",
        "February",
        "March",
		    "April",
        "May",
        "June",
		    "July",
        "August",
        "September",
		    "October",
        "November",
        "December"
      ],
      interval: {
        seconds: '{sec} ago.',
        minutes: '{min} ago.',
        hours: '{hr} ago.',
        days: '{d} ago.',
        weeks: '{w} ago.',
        months: '{m} ago.',
        years: '{y} ago.',
        decades: '{dd} ago.',
        centuries: '{c} ago.',
        millennium: '{mm} ago.'
      },
      date: '{m} {d}th {y}',
      time: {
        _12: {
          am: '{h}:{min}:{sec} am',
          pm: '{h}:{min}:{sec} pm'
        },
        _24: '{h}:{min}:{sec}'
      }
    }
  };

  function Ago(options) {
    var options = options || {};

    this.date = options.date || new Date();
    this.lang = options.lang || 'en-US';
    this.hourFormat = options.hourFormat || '24';
  }

  Ago.prototype.toString = function () {
    return this.getDate() + " " + this.getTime();
  }

  Ago.prototype.ago = function () {
    // TODO: implement this.
  }

  Ago.prototype.getDateAndTime = function() {
    return this.toString();
  }

  Ago.prototype.getTime = function () {
    var date = this.date,
        language = languages[this.lang],
  	    hours = date.getHours(),
  	    min = date.getMinutes(),
        sec = date.getSeconds(),
        mid='am';

    // Check meridian --------------------------------------
    hours = (hours+24)%24;

    if(hours == 0) {
      hours = this.hourFormat == "24" ? hours : 12;
    }
    else if(hours > 12)
    {
      hours = this.hourFormat == "24" ? hours : hours % 12;
      mid = 'pm';
    }
    // End of check meridian --------------------------------

    var time = language.time['_' + this.hourFormat];

    if(this.hourFormat == "12") {
      time = time[mid];
    }

    // Replace hours
    time = time.replace('{h}', zeroFill(hours, 2));

    // Replace minutes
    time = time.replace('{min}', zeroFill(min, 2));

    // Replace seconds
    time = time.replace('{sec}', zeroFill(sec, 2));

  	return time;

  }

  Ago.prototype.getDate = function () {
    var language = languages[this.lang],
        date = language.date;

    // Replace month
    date = date.replace('{m}', language.months[this.date.getMonth()]);

    // Replace day
    date = date.replace('{d}', this.date.getDate());

    // Replace year
    date = date.replace('{y}', this.date.getFullYear());

    return date;
  };

  Ago.prototype.setLanguage = function (language) {
    // TODO: implement this.
  }

  Ago.prototype.loadCustomLanguages = function (language) {
    // TODO: implement this.
  }

  return Ago;
})();
