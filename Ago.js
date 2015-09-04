/* ----------------------------------------------------------- *\
  This file contains the logic for Ago librery.

  License    : GPL-02

	Author     : Modesto Figuereo Fernandez.
	Email      : figuereo.fernandez.modesto@gmail.com
	Twitter    : @ModestoFiguereo

	(c) copyright 2015. All rights reserved.
\* ----------------------------------------------------------- */


'use strict';

module.exports =

(function() {

  // Default Supported Languages.
  var languages = {
    'en-US': {
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

  function Ago(date) {

  }

  Ago.prototype.toString = function () {

  }

  Ago.prototype.interval = function () {

  }

  Ago.prototype.setLanguage = function (language) {

  }

  Ago.prototype.loadLanguages = function (language) {

  }

  return Ago;
})();
