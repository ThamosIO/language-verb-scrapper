const fs = require('fs');

const { VERBS } = require('./src/constants');
const scrap = require('./src/scrap');

async function main() {
  const p = VERBS.map(async (verb) => await scrap(verb));
  const allVerbs = await Promise.all(p);

  fs.writeFileSync(`./scrapped-verbs.json`, JSON.stringify(allVerbs));
}

main();
