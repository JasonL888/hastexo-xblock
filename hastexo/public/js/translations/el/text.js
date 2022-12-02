
            (function(global){
                var HastexoI18N = {
                  init: function() {


'use strict';
{
  const globals = this;
  const django = globals.django || (globals.django = {});


  django.pluralidx = function(n) {
    const v = (n != 1);
    if (typeof v === 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };


  /* gettext library */

  django.catalog = django.catalog || {};

  const newcatalog = {
    "After you reset, you will need to retrace your steps up to this point.": "\u039c\u03b5\u03c4\u03ac \u03c4\u03b7\u03bd \u03b5\u03c0\u03b1\u03bd\u03b1\u03c6\u03bf\u03c1\u03ac, \u03b8\u03b1 \u03c7\u03c1\u03b5\u03b9\u03b1\u03c3\u03c4\u03b5\u03af \u03bd\u03b1 \u03b5\u03c0\u03b1\u03bd\u03b1\u03bb\u03ac\u03b2\u03b5\u03c4\u03b5 \u03cc\u03bb\u03b1 \u03c4\u03b1 \u03b2\u03ae\u03bc\u03b1\u03c4\u03b1 \u03ad\u03c9\u03c2 \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf \u03c3\u03b7\u03bc\u03b5\u03af\u03bf.",
    "Are you sure?": "\u03a3\u03af\u03b3\u03bf\u03c5\u03c1\u03b1;",
    "Attention!": "\u03a0\u03c1\u03bf\u03c3\u03bf\u03c7\u03ae!",
    "Click 'OK' to resume it.": "\u039a\u03ac\u03bd\u03c4\u03b5 \u03ba\u03bb\u03b9\u03ba \u03c3\u03c4\u03bf 'OK' \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03c4\u03bf \u03b5\u03c0\u03b1\u03bd\u03b1\u03c6\u03ad\u03c1\u03b5\u03c4\u03b5.",
    "Could not connect to your lab environment. The client detected an unexpected error. The server's error message was:": "\u0391\u03b4\u03c5\u03bd\u03b1\u03bc\u03af\u03b1 \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7\u03c2 \u03c3\u03c4\u03bf \u03b5\u03c1\u03b3\u03b1\u03c3\u03c4\u03b7\u03c1\u03b9\u03b1\u03ba\u03cc \u03c3\u03b1\u03c2 \u03c0\u03b5\u03c1\u03b9\u03b2\u03ac\u03bb\u03bb\u03bf\u03bd. \u039f \u03c0\u03b5\u03bb\u03ac\u03c4\u03b7\u03c2 \u03c3\u03c5\u03bd\u03ac\u03bd\u03c4\u03b7\u03c3\u03b5 \u03ad\u03bd\u03b1 \u03b1\u03c0\u03c1\u03cc\u03c3\u03bc\u03b5\u03bd\u03bf \u03c3\u03c6\u03ac\u03bb\u03bc\u03b1. \u03a4\u03bf \u03bc\u03ae\u03bd\u03c5\u03bc\u03b1 \u03bb\u03ac\u03b8\u03bf\u03c5\u03c2 \u03c4\u03bf\u03c5 \u03b4\u03b9\u03b1\u03ba\u03bf\u03bc\u03b9\u03c3\u03c4\u03ae, \u03ae\u03c4\u03b1\u03bd:",
    "Could not connect to your lab environment:": "\u0391\u03b4\u03c5\u03bd\u03b1\u03bc\u03af\u03b1 \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7\u03c2 \u03c3\u03c4\u03bf \u03b5\u03c1\u03b3\u03b1\u03c3\u03c4\u03b7\u03c1\u03b9\u03b1\u03ba\u03cc \u03c3\u03b1\u03c2 \u03c0\u03b5\u03c1\u03b9\u03b2\u03ac\u03bb\u03bb\u03bf\u03bd:",
    "Don't panic! It may take a few minutes.": "\u039c\u03ae\u03bd \u03b1\u03bd\u03b7\u03c3\u03c5\u03c7\u03b5\u03af\u03c4\u03b5, \u03af\u03c3\u03c9\u03c2 \u03c7\u03c1\u03b5\u03b9\u03b1\u03c3\u03c4\u03bf\u03cd\u03bd \u03bc\u03b5\u03c1\u03b9\u03ba\u03ac \u03bb\u03b5\u03c0\u03c4\u03ac.",
    "Hints": "\u03a5\u03c0\u03bf\u03b4\u03b5\u03af\u03be\u03b5\u03b9\u03c2",
    "In a timed exam, the timer will continue to run while your environment is being reset.": "\u03a3\u03b5 \u03bc\u03b9\u03b1 \u03b5\u03be\u03ad\u03c4\u03b1\u03c3\u03b7 \u03c0\u03bf\u03c5 \u03c7\u03c1\u03bf\u03bd\u03bf\u03bc\u03b5\u03c4\u03c1\u03ac\u03c4\u03b1\u03b9, \u03bf \u03bc\u03b5\u03c4\u03c1\u03b7\u03c4\u03ae\u03c2 \u03b8\u03b1 \u03c3\u03c5\u03bd\u03b5\u03c7\u03af\u03b6\u03b5\u03b9 \u03b1\u03ba\u03cc\u03bc\u03b7 \u03ba\u03b1\u03b9 \u03ba\u03b1\u03c4\u03ac \u03c4\u03b7 \u03b4\u03b9\u03ac\u03c1\u03ba\u03b5\u03b9\u03b1 \u03b5\u03c0\u03b1\u03bd\u03b1\u03c6\u03bf\u03c1\u03ac\u03c2 \u03c4\u03bf\u03c5 \u03c0\u03b5\u03c1\u03b9\u03b2\u03ac\u03bb\u03bb\u03bf\u03bd\u03c4\u03bf\u03c2.",
    "Lost connection to your lab environment.": "\u03a7\u03ac\u03b8\u03b7\u03ba\u03b5 \u03b7 \u03c3\u03cd\u03bd\u03b4\u03b5\u03c3\u03b7 \u03c3\u03c4\u03bf \u03b5\u03c1\u03b3\u03b1\u03c3\u03c4\u03b7\u03c1\u03b9\u03b1\u03ba\u03cc \u03c3\u03b1\u03c2 \u03c0\u03b5\u03c1\u03b9\u03b2\u03ac\u03bb\u03bb\u03bf\u03bd.",
    "Please wait": "\u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03ce \u03c0\u03b5\u03c1\u03b9\u03bc\u03ad\u03bd\u03b5\u03c4\u03b5",
    "Progress check result": "\u0391\u03c0\u03bf\u03c4\u03ad\u03bb\u03b5\u03c3\u03bc\u03b1 \u03b5\u03bb\u03ad\u03b3\u03c7\u03bf\u03c5 \u03c0\u03c1\u03bf\u03cc\u03b4\u03bf\u03c5",
    "Resetting will return your lab environment to a pristine state.": "\u0397 \u03b5\u03c0\u03b1\u03bd\u03b1\u03c6\u03bf\u03c1\u03ac \u03b8\u03b1 \u03c6\u03ad\u03c1\u03b5\u03b9 \u03c4\u03bf \u03b5\u03c1\u03b3\u03b1\u03c3\u03c4\u03b7\u03c1\u03b9\u03b1\u03ba\u03cc \u03c0\u03b5\u03c1\u03b9\u03b2\u03ac\u03bb\u03bb\u03bf\u03bd \u03c3\u03c4\u03b7\u03bd \u03b1\u03c1\u03c7\u03b9\u03ba\u03ae \u03c4\u03bf\u03c5 \u03ba\u03b1\u03c4\u03ac\u03c3\u03c4\u03b1\u03c3\u03b7.",
    "Sorry!": "\u03a3\u03c5\u03b3\u03bd\u03ce\u03bc\u03b7!",
    "The remote server unexpectedly disconnected. You can try closing your browser window, and returning to this page in a few minutes.": "\u039f \u03b1\u03c0\u03bf\u03bc\u03b1\u03ba\u03c1\u03c5\u03c3\u03bc\u03ad\u03bd\u03bf\u03c2 \u03b4\u03b9\u03b1\u03ba\u03bf\u03bc\u03b9\u03c3\u03c4\u03ae\u03c2 \u03b4\u03b9\u03ad\u03ba\u03bf\u03c8\u03b5 \u03b1\u03c0\u03c1\u03cc\u03c3\u03bc\u03b5\u03bd\u03b1. \u0394\u03bf\u03ba\u03b9\u03bc\u03ac\u03c3\u03c4\u03b5 \u03bd\u03b1 \u03ba\u03bb\u03b5\u03af\u03c3\u03b5\u03c4\u03b5 \u03c4\u03bf \u03c0\u03b1\u03c1\u03ac\u03b8\u03c5\u03c1\u03bf \u03c4\u03bf\u03c5 \u03c0\u03c1\u03bf\u03b3\u03c1\u03ac\u03bc\u03bc\u03b1\u03c4\u03bf\u03c2 \u03c0\u03b5\u03c1\u03b9\u03ae\u03b3\u03b7\u03c3\u03b7\u03c2 \u03ba\u03b1\u03b9 \u03b5\u03c0\u03b9\u03c3\u03c4\u03c1\u03ad\u03c8\u03c4\u03b5 \u03c3\u03b5 \u03b1\u03c5\u03c4\u03ae \u03c4\u03b7 \u03c3\u03b5\u03bb\u03af\u03b4\u03b1 \u03c3\u03b5 \u03bc\u03b5\u03c1\u03b9\u03ba\u03ac \u03bb\u03b5\u03c0\u03c4\u03ac.",
    "There was a problem checking your progress:": "\u0395\u03bc\u03c6\u03b1\u03bd\u03af\u03c3\u03c4\u03b7\u03ba\u03b5 \u03c0\u03c1\u03cc\u03b2\u03bb\u03b7\u03bc\u03b1 \u03ba\u03b1\u03c4\u03ac \u03c4\u03bf\u03bd \u03ad\u03bb\u03b5\u03b3\u03c7\u03bf \u03c4\u03b7\u03c2 \u03c0\u03c1\u03bf\u03cc\u03b4\u03bf\u03c5:",
    "There was a problem preparing your lab environment:": "\u03a0\u03b1\u03c1\u03bf\u03c5\u03c3\u03b9\u03ac\u03c3\u03c4\u03b7\u03ba\u03b5 \u03c0\u03c1\u03cc\u03b2\u03bb\u03b7\u03bc\u03b1 \u03ba\u03b1\u03c4\u03ac \u03c4\u03b7\u03bd \u03c0\u03c1\u03bf\u03b5\u03c4\u03bf\u03b9\u03bc\u03b1\u03c3\u03af\u03b1 \u03c4\u03bf\u03c5 \u03b5\u03c1\u03b3\u03b1\u03c3\u03c4\u03b7\u03c1\u03b9\u03b1\u03ba\u03bf\u03cd \u03c3\u03b1\u03c2 \u03c0\u03b5\u03c1\u03b9\u03b2\u03ac\u03bb\u03bb\u03bf\u03bd\u03c4\u03bf\u03c2:",
    "This may take several minutes to complete.": "\u0391\u03c5\u03c4\u03cc \u03af\u03c3\u03c9\u03c2 \u03c7\u03c1\u03b5\u03b9\u03b1\u03c3\u03c4\u03b5\u03af \u03b1\u03c1\u03ba\u03b5\u03c4\u03ac \u03bb\u03b5\u03c0\u03c4\u03ac \u03b3\u03b9\u03b1 \u03bd\u03b1 \u03bf\u03bb\u03bf\u03ba\u03bb\u03b7\u03c1\u03c9\u03b8\u03b5\u03af.",
    "Timeout when checking progress.": "\u039b\u03ae\u03be\u03b7 \u03c7\u03c1\u03cc\u03bd\u03bf\u03c5 \u03ba\u03b1\u03c4\u03ac \u03c4\u03bf\u03bd \u03ad\u03bb\u03b5\u03b3\u03c7\u03bf \u03c4\u03b7\u03c2 \u03c0\u03c1\u03bf\u03cc\u03b4\u03bf\u03c5.",
    "Timeout when launching stack.": "\u039b\u03ae\u03be\u03b7 \u03c7\u03c1\u03cc\u03bd\u03bf\u03c5 \u03b5\u03ba\u03ba\u03af\u03bd\u03b7\u03c3\u03b7\u03c2.",
    "Unexpected result: ": "\u0391\u03c0\u03c1\u03cc\u03c3\u03bc\u03b5\u03bd\u03bf \u03b1\u03c0\u03bf\u03c4\u03ad\u03bb\u03b5\u03c3\u03bc\u03b1: ",
    "We think you're busy elsewhere.": "\u03a0\u03b9\u03b8\u03b1\u03bd\u03ce\u03c2 \u03b1\u03c3\u03c7\u03bf\u03bb\u03b5\u03af\u03c3\u03c4\u03b5 \u03bc\u03b5 \u03ba\u03ac\u03c4\u03b9 \u03ac\u03bb\u03bb\u03bf.",
    "We're preparing your lab environment.": "\u0395\u03c4\u03bf\u03b9\u03bc\u03ac\u03b6\u03bf\u03c5\u03bc\u03b5 \u03c4\u03bf \u03b5\u03c1\u03b3\u03b1\u03c3\u03c4\u03b7\u03c1\u03b9\u03b1\u03ba\u03cc \u03c3\u03b1\u03c2 \u03c0\u03b5\u03c1\u03b9\u03b2\u03ac\u03bb\u03bb\u03bf\u03bd.",
    "Working": "\u0395\u03c0\u03b5\u03be\u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b1",
    "You cannot undo this action.": "\u0394\u03b5\u03bd \u03bc\u03c0\u03bf\u03c1\u03b5\u03af\u03c4\u03b5 \u03bd\u03b1 \u03b1\u03ba\u03c5\u03c1\u03ce\u03c3\u03b5\u03c4\u03b5 \u03b1\u03c5\u03c4\u03ae \u03c4\u03b7\u03bd \u03b5\u03bd\u03ad\u03c1\u03b3\u03b5\u03b9\u03b1.",
    "You completed {passed} out of {total} tasks.": "\u039f\u03bb\u03bf\u03ba\u03bb\u03b7\u03c1\u03ce\u03c3\u03b1\u03c4\u03b5 {passed} \u03b1\u03c0\u03cc {total} \u03b5\u03c1\u03b3\u03b1\u03c3\u03af\u03b5\u03c2.",
    "You've been inactive here for a while, so we paused your lab environment.": "\u0395\u03af\u03c3\u03c4\u03b5 \u03b1\u03b4\u03c1\u03b1\u03bd\u03ae\u03c2 \u03b3\u03b9\u03b1 \u03b1\u03c1\u03ba\u03b5\u03c4\u03cc \u03c7\u03c1\u03cc\u03bd\u03bf, \u03b5\u03c0\u03bf\u03bc\u03ad\u03bd\u03c9\u03c2 \u03b1\u03b4\u03c1\u03b1\u03bd\u03bf\u03c0\u03bf\u03b9\u03ae\u03c3\u03b1\u03bc\u03b5 \u03c4\u03bf \u03b5\u03c1\u03b3\u03b1\u03c3\u03c4\u03b7\u03c1\u03b9\u03b1\u03ba\u03cc \u03c3\u03b1\u03c2 \u03c0\u03b5\u03c1\u03b9\u03b2\u03ac\u03bb\u03bb\u03bf\u03bd.",
    "You've reached the time limit allocated to you for using labs.": "\u0395\u03be\u03b1\u03bd\u03c4\u03bb\u03ae\u03c3\u03b1\u03c4\u03b5 \u03c4\u03bf \u03c7\u03c1\u03cc\u03bd\u03bf \u03c0\u03bf\u03c5 \u03ad\u03c7\u03b5\u03b9 \u03bf\u03c1\u03b9\u03c3\u03c4\u03b5\u03af \u03b3\u03b9\u03b1 \u03c4\u03b7 \u03c7\u03c1\u03ae\u03c3\u03b7 \u03b5\u03c1\u03b3\u03b1\u03c3\u03c4\u03b7\u03c1\u03af\u03c9\u03bd.",
    "Your lab environment is undergoing automatic maintenance. Please try again in a few minutes.": "\u03a4\u03bf \u03b5\u03c1\u03b3\u03b1\u03c3\u03c4\u03b7\u03c1\u03b9\u03b1\u03ba\u03cc \u03c3\u03b1\u03c2 \u03c0\u03b5\u03c1\u03b9\u03b2\u03ac\u03bb\u03bb\u03bf\u03bd \u03c4\u03b5\u03bb\u03b5\u03af \u03c5\u03c0\u03cc \u03b1\u03c5\u03c4\u03bf\u03bc\u03b1\u03c4\u03bf\u03c0\u03bf\u03b9\u03b7\u03bc\u03ad\u03bd\u03b7 \u03c3\u03c5\u03bd\u03c4\u03ae\u03c1\u03b7\u03c3\u03b7. \u03a0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03bf\u03cd\u03bc\u03b5 \u03c0\u03c1\u03bf\u03c3\u03c0\u03b1\u03b8\u03ae\u03c3\u03c4\u03b5 \u03be\u03b1\u03bd\u03ac \u03c3\u03b5 \u03bc\u03b5\u03c1\u03b9\u03ba\u03ac \u03bb\u03b5\u03c0\u03c4\u03ac.",
    "Your lab environment is undergoing maintenance": "\u03a4\u03bf \u03b5\u03c1\u03b3\u03b1\u03c3\u03c4\u03b7\u03c1\u03b9\u03b1\u03ba\u03cc \u03c3\u03b1\u03c2 \u03c0\u03b5\u03c1\u03b9\u03b2\u03ac\u03bb\u03bb\u03bf\u03bd \u03b5\u03af\u03bd\u03b1\u03b9 \u03c5\u03c0\u03cc \u03c3\u03c5\u03bd\u03c4\u03ae\u03c1\u03b7\u03c3\u03b7"
  };
  for (const key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }


  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      const value = django.catalog[msgid];
      if (typeof value === 'undefined') {
        return msgid;
      } else {
        return (typeof value === 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      const value = django.catalog[singular];
      if (typeof value === 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      let value = django.gettext(context + '\x04' + msgid);
      if (value.includes('\x04')) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      let value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.includes('\x04')) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "d/m/Y P",
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S",
      "%d/%m/%Y %H:%M:%S.%f",
      "%d/%m/%Y %H:%M",
      "%d/%m/%y %H:%M:%S",
      "%d/%m/%y %H:%M:%S.%f",
      "%d/%m/%y %H:%M",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "d/m/Y",
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y",
      "%d/%m/%y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 0,
    "MONTH_DAY_FORMAT": "j F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "d/m/Y P",
    "SHORT_DATE_FORMAT": "d/m/Y",
    "THOUSAND_SEPARATOR": ".",
    "TIME_FORMAT": "P",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      const value = django.formats[format_type];
      if (typeof value === 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }
};


                  }
                };
                HastexoI18N.init();
                global.HastexoI18N = HastexoI18N;
            }(this));
