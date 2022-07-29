var no = require('./translations/no.json');
var en = require('./translations/en.json');
var fr = require('./translations/fr.json');
var de = require('./translations/de.json');

const i18n = {
  translations: {
    no: no,
    en: en,
    /*fr: fr,
    de: de*/
  },
  defaultLang: 'no',
  useBrowserDefault: true
};

module.exports = i18n;
