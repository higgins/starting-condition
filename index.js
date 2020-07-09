const fs = require('fs');
// TODO: support more languages
const language = 'en';
const conditions = fs.readFileSync(`./${language}.txt`).toString().split('\n').filter(c => c.length);
const starting = `
  \x1b[33mStarting condition:\x1b[0m

  \x1b[42m${conditions[Math.floor(Math.random() * conditions.length - 1)]}\x1b[0m


`

console.log(starting);
