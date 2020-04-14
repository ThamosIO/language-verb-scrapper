const { FIELDS } = require('./constants');
const scrapeIt = require('scrape-it');

const { LANG, CONJUGATION, LANGUAGE } = process.env;

const URL = `https://${LANG}.bab.la/${CONJUGATION}/${LANGUAGE}`;

async function scrap(verb) {
  console.log(`Scrapping ${verb}.`);
  const { data } = await scrapeIt(`${URL}/${verb}`, FIELDS);

  return data;
}

module.exports = scrap;
