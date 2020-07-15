const LANGUAGES = ['en', 'es'];
const CONDITIONS = {};
LANGUAGES.forEach((lang) => {
  CONDITIONS[lang] = require(`./${lang}.json`);
});

module.exports = (lang) => {
  if (!CONDITIONS.hasOwnProperty(lang)) {
    throw new Error(`
Unknown language: ${lang}.
Supported languages: ${LANGUAGES.join(',')}.

If you'd like to contribute, please visit:

https://github.com/higgins/starting-condition
`);
  }
  conditions = CONDITIONS[lang];
  return conditions[Math.floor(Math.random() * conditions.length - 1)];
};
