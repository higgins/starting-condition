#!/usr/bin/env node

const start = require('./index');
const argv = require('minimist')(process.argv.slice(2));
const https = require('https');
const { version } = require('./package');

const checkVersion = () => {
    https.get("https://raw.githubusercontent.com/higgins/starting-condition/master/package.json", res => {
        let data = ""
        res.on("data", d => {
            data += d
        })
        res.on("end", () => {
            try {
                const { version: originVersion } = JSON.parse(data);
                const currentSourceMinor = version.split('.')[1];
                const currentOriginMinor = originVersion.split('.')[1];
                if (currentSourceMinor !== currentOriginMinor) {
                    console.log(
`
\x1b[33mPsst\x1b[0m:
There is a newer version published.
Update with "\x1b[33mnpm update -g starting-condition\x1b[0m"
`);
                }

            } catch(e) {
                // It's not the end of the world
            }
        })
    })
}

const LANGUAGES = {
  en: ['English', 'Starting condition'],
  es: ['Español', 'Condición inicial'],
  fr: ['Français', 'Condition de départ'],
};

if (argv.h || argv.help) {
  console.log(`
  options:
    -h, --help         Prints this help information
    -l, --language     Select language [${Object.keys(LANGUAGES)}]
    -f, --fresh        Only show recent conditions
    -n,                Do not check for latest version
    -a                 View available languages
  `)
  process.exit(0);
}

if (!argv.n) {
  // NOTE: check if there is a later version of the cli we can upgrade
  checkVersion();
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

const onlyLatest = !!(argv.f || argv.fresh);

const condition = start(language, onlyLatest);
const starting = `
  \x1b[33m${LANGUAGES[language][1]}:\x1b[0m

  ${condition}
`

console.log(starting);
