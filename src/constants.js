const VERBS = require('../verbs.json');

const FIELDS = {
  verb: {
    selector: '#conjTrans .quick-result-option > a',
    texteq: 0,
  },
  translation: {
    listItem: '#conjTrans .sense-group-results li',
  },
  tenses: {
    listItem: '.conj-tense-block',
    data: {
      tense: { selector: 'h3', texteq: 0 },
      conjugation: {
        listItem: '.conj-item',
        data: {
          person: {
            selector: '.conj-person',
          },
          result: {
            selector: '.conj-result',
          },
        },
      },
    },
  },
};

module.exports = {
  FIELDS,
  VERBS,
};
