const fs = require('fs');
const argv = require('minimist')(process.argv.slice(2));

const LANGUAGES = {
  en: ['English', 'Starting condition'],
  es: ['Español', 'Condición inicial'],
};

if (argv.h || argv.help) {
  console.log(`
  options:
    -h, --help         Prints this help information
    -l, --language     Select language [${Object.keys(LANGUAGES)}]
    -a                 View available languages
  `)
  process.exit(0);
}

if (argv.a) {
  const langFMT = Object.entries(LANGUAGES).map(l => `\x1b[33m${l[0]}\x1b[0m -- ${l[1][0]}`).join('\n');
  console.log(`
${langFMT}
  `)
  process.exit(0);
}

let language = 'en';
if (argv.l || argv.language) {
  const selectedLang = argv.l || argv.language;
  language = Object.keys(LANGUAGES).includes(selectedLang) ? selectedLang : language;
}

const conditions = fs.readFileSync(`./${language}.txt`).toString().split('\n').filter(c => c.length);
const starting = `
  \x1b[33m${LANGUAGES[language][1]}:\x1b[0m

  ${conditions[Math.floor(Math.random() * conditions.length - 1)]}


`

console.log(starting);
