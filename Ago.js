/* ----------------------------------------------------------- *\
  This file contains the logic for Ago library.

  License    : MIT License

	Author     : Modesto Figuereo Fernandez.
	Email      : figuereo.fernandez.modesto@gmail.com
	Twitter    : @ModestoFiguereo

	(c) copyright 2015. All rights reserved.
\* ----------------------------------------------------------- */


'use strict';

var zeroFill = require('zero-fill');

module.exports = (function() {

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
      units: {
        second: {
          singular: '{second} second ago',
          plural: '{second} seconds ago'
        },
        minute: {
          singular: '{minute} minute ago',
          plural: '{minute} minutes ago'
        },
        hour: {
          singular: '{hour} hour ago',
          plural: '{hour} hours ago'
        },
        day: {
          singular: '{day} day ago',
          plural: '{day} days ago'
        },
        week: {
          singular: '{week} week ago',
          plural: '{week} weeks ago'
        },
        month: {
          singular: '{month} month ago',
          plural: '{month} months ago'
        },
        year: {
          singular: '{year} year ago',
          plural: '{year} years ago'
        },
        decade: {
          singular: '{decade} decade ago',
          plural: '{decade} decades ago'
        },
        century: {
          singular: '{century} centurie ago',
          plural: '{century} centuries ago'
        },
        millennium: {
          singular: '{millennium} millennium ago',
          plural: '{millennium} millenniums ago'
        }
      },
      date: '{m} {d}th {y}'
    }
  };

  var milliseconds = {
    millennium: 3.1556736 * 10000000000000,
    century: 3.1556736 * 1000000000000,
    decade: 315567360000,
    year: 31556736000,
    month: 2630016000,
    week: 604800000,
    day: 86400000,
    hour: 3600000,
    minute: 60000,
    second: 1000
  };

  var timeFormats = {
    _12: {
      am: '{h}:{min}:{sec} am',
      pm: '{h}:{min}:{sec} pm'
    },
    _24: '{h}:{min}:{sec}'
  }

  var settings = {
    date: new Date(),
    lang: 'en-US',
    hourFormat: '24'
  };

  function Ago(options) {
    var options = options || {};

    settings.date = options.date || new Date();
    settings.lang = options.lang || 'en-US';
    settings.hourFormat = options.hourFormat || '24';
  }

  Ago.prototype.toString = function () {
    return this.ago();
  }

  /*
   * Tells how long ago was a date.
   * Examples:
   *
   *  new Ago(new Date('1993/10/15 09:05:10 pm')).ago() => 2 decades ago
   *  new Ago(new Date('2006/01/01 09:05:10 pm')).ago() => 9 years ago
   *
   * (The year when this comment was written was 2015)
   *
   * @returns  String  How long ago.
   */
  Ago.prototype.ago = function () {

    var date = settings.date,
        language = languages[settings.lang],
        units = language.units;

    // Convert both dates to milliseconds
    var ms1 = date.getTime();
    var ms2 = new Date().getTime();

    // Calculate the difference in milliseconds
    var difference = ms2 - ms1;

    // Convert back and return
    var diff = Math.round(difference/milliseconds.second);
    var unit = 'second';

    var sec = milliseconds.second;

    // Convert to the rigth unit year, month, hour, etc...
    for(var ms in milliseconds) {
      if(diff >= milliseconds[ms]/sec)
      {
        diff = Math.round(difference/milliseconds[ms]);
        unit = ms;
        break;
      }
    }

    // return singular or plural
    if(diff > 1) {
      return units[unit].plural.replace('{' + unit + '}', diff);
    }

    return units[unit].singular.replace('{' + unit + '}', diff);
  }

  /*
   * Gets date and time string.
   * Examples:
   *
   *  new Ago(new Date('1993/10/15 09:05:10 pm')).getFullDate() => October 15th 1993 09:05:10 pm
   *
   * @returns  String  Date string.
   */
  Ago.prototype.getFullDate = function() {
    return this.getDate() + " " + this.getTime();
  }

  /*
   * Gets time string.
   * Examples:
   *
   *  new Ago(new Date('1993/10/15 09:05:10 pm')).getFullDate() => 09:05:10 pm
   *
   * @returns  String  Time string.
   */
  Ago.prototype.getTime = function () {
    var date = settings.date,
        language = languages[settings.lang],
  	    hours = date.getHours(),
  	    min = date.getMinutes(),
        sec = date.getSeconds(),
        mid='am';

    // Check meridian --------------------------------------
    hours = (hours+24)%24;

    if(hours == 0) {
      hours = settings.hourFormat == "24" ? hours : 12;
    }
    else if(hours > 12)
    {
      hours = settings.hourFormat == "24" ? hours : hours % 12;
      mid = 'pm';
    }
    // End of check meridian --------------------------------

    var time = timeFormats['_' + settings.hourFormat];

    if(settings.hourFormat == "12") {
      time = time[mid];
    }

    // Replace hours, minutes, seconds
    time = time.replace('{h}', zeroFill(hours, 2))
               .replace('{min}', zeroFill(min, 2))
               .replace('{sec}', zeroFill(sec, 2));

  	return time;
  }

  /*
   * Gets date string.
   * Examples:
   *
   *  new Ago(new Date('1993/10/15 09:05:10 pm')).getFullDate() => October 15th 1993
   *
   * @returns  String  Date string.
   */
  Ago.prototype.getDate = function () {
    var language = languages[settings.lang],
        date = language.date;

    // Replace month, day, year
    date = date.replace('{m}', language.months[settings.date.getMonth()])
               .replace('{d}', settings.date.getDate())
               .replace('{y}', settings.date.getFullYear());

    return date;
  };

  /*
   * Sets the language to be used.
   *
   * @param  language  String
   *
   * @returns  void
   */
  Ago.prototype.setLanguage = function (language) {
    if(!languages[language]) {
      throw "This language is not supported.";
    }

    settings.lang = language;
  }

  /*
   * Gets the language currently used.
   *
   * @returns  String
   */
  Ago.prototype.getLanguage = function () {
    return settings.lang;
  }

  /*
   * Sets hour format (24 or 12).
   *
   * @returns  void
   */
  Ago.prototype.setHourFormat = function (format) {

    if(format != 12 && format != 24) {
      throw "Hour format should be 24 or 12.";
    }

    settings.hourFormat = format;
  }

  /*
   * Gets hour format.
   *
   * @returns  String
   */
  Ago.prototype.getHourFormat = function () {
    return settings.hourFormat;
  }

  /*
   * Load custom languages.
   *
   * @param  langs  Array  A collection containing the languages.
   *
   * @returns  String
   */
  Ago.prototype.loadCustomLanguages = function (langs) {
    for(var i = 0; i < langs.length; i++) {
      languages[langs[i].language] = langs[i].body;
    }
  }

  return Ago;
})();
