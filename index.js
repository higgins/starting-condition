const en = require('./en.json');
const es = require('./es.json');
const fr = require('./fr.json');
const CONDITIONS = { en, es, fr };

function startingCondition(lang) {
  if (!CONDITIONS.hasOwnProperty(lang)) {
    throw new Error(`
Unknown language: ${lang}.
Supported languages: ${Object.keys(CONDITIONS).join(',')}.

If you'd like to contribute, please visit:

https://github.com/higgins/starting-condition
    `);
  }
  conditions = CONDITIONS[lang];
  return conditions[Math.floor(Math.random() * conditions.length)];
};

if (global.window) {
  global.window.startingCondition = startingCondition;
}

module.exports = startingCondition;
