(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
    "Who most recently went to a concert?",
    "Who most recently performed in public?",
    "Who most recently visited a different country?",
    "Of the most recent countries you've visited, which was the furthest?",
    "Who ate the biggest breakfast today?",
    "Who has the most unread emails today?",
    "Who has the least unread emails?",
    "Who has the most browser tabs open?",
    "Who has the least browser tabs open?",
    "Who is wearing the most of the color blue?",
    "Who has the most alarms set on their phone?",
    "Who has the most files on their desktop?",
    "Who has the most things in their pocket?",
    "Who got the most sleep last night?",
    "Who gave the last hug?",
    "Who gave the last high five?",
    "Who most recently finished reading a book.",
    "Who most recently talked to a relative out of the home.",
    "Who most recently hosted a party.",
    "Who most recently pet an animal.",
    "Who most recently visited a lake.",
    "Who most recently visited a river.",
    "Who most recently visited the ocean.",
    "Who most recently harvested a fruit or vegetable.",
    "Who most recently went go camping.",
    "Who most recently watched a movie.",
    "Who most recently flossed their teeth.",
    "Who most recently planted a seed in soil.",
    "Who most recently potted a plant.",
    "Who most recently made a gift for someone.",
    "Who most recently listened to a full LP (album).",
    "Who most recently cooked for someone else.",
    "Who most recently doodled a doodle.",
    "Who most recently danced.",
    "Who most recently held a baby.",
    "Who most recently flew in a plane.",
    "Who most recently rode in a train.",
    "Who most recently took the subway.",
    "Who woke up the earliest?",
    "Who most recently played an instrument?",
    "Who most recently made a hot beverage?",
    "Who most recently drank a full glass of water?",
    "Who most recently squeezed some juice.",
    "Who most recently went to a birthday party.",
    "Who most recently turned on a light.",
    "Who most recently went to a museum.",
    "Who most recently received new article of clothing.",
    "Who most recently touched dirt.",
    "Who most recently spun a top.",
    "Who most recently threw a ball.",
    "Who most recently had a stare down with an animal.",
    "Who most recently finished comicbook/graphic novel.",
    "Who most recently took a photo.",
    "Who most recently took a photo with a family member.",
    "Who most recently sat near a fire.",
    "Who most recently visited a waterfall.",
    "Who most recently emptied the trash."
]

},{}],2:[function(require,module,exports){
module.exports=[
    "¿Quien fue a un concierto por última vez?",
    "¿Quien actuó por última vez en público?",
    "¿Quien visitó por última vez un país differente?",
    "¿Quien visitó por última vez el país más lejos?",
    "¿Quien comió el desayuno más grande?",
    "¿Quien tiene más correos electronics no leídos?",
    "¿Quien tiene menos correos electronics no leídos?",
    "¿Quien tiene más paginas de internet abiertas?",
    "¿Quien tiene menos paginas de internet abiertas?",
    "¿Quien lleva más azul?",
    "¿Quien tiene más alarmas en el telephone?",
    "¿Quien tiene más archivos en el escritorio?",
    "¿Quien tiene más cosas en el bolsillo?",
    "¿Quien durmió más anoche?",
    "¿Quien dió un abrazo por última vez?",
    "¿Quien dió un cinco altos por última vez?",
    "La última persona en terminar de leer un libro.",
    "La última persona que habló con familia afuera la casa.",
    "La última persona que organizó una fiesta.",
    "La última persona que acarició un animal.",
    "La última persona que visitó un lago.",
    "La última persona que visitó un río.",
    "La última persona que visitó el océano.",
    "La última persona que cosechó una fruita o verdura.",
    "El último persona que acampó.",
    "La última persona que miró una pelicula.",
    "La última persona que usó hilo dental.",
    "La última persona que plantó una semilla en el suelo.",
    "La última persona que puso una planta en una maceta.",
    "La última persona que hizo un regalo para alguien.",
    "La última persona que escuchó una LP completo.",
    "La última persona que cocinó para otra persona.",
    "La última persona que garabateó un garabato.",
    "La última persona que bailó.",
    "La última persona que sostuvo un bebé.",
    "La última persona que voló en un avión.",
    "El último persona que viajó en tren.",
    "El último persona que viajó en metro.",
    "¿Quien se despertó más temprano?",
    "La última persona que tocó un instrumento musical.",
    "La última persona que hizo un bebida caliente.",
    "La última persona que bebó una vaso lleno de agua.",
    "La última persona que exprimió un poco de jugo.",
    "La última persona que visitó una fiesta de cumpleanos.",
    "La última persona que encendido una luz.",
    "La última persona que visitó un museo.",
    "La última persona que recibió una prenda de ropa.",
    "La última persona que tocó tierra.",
    "La última persona que giró un trompo.",
    "La última persona que lanzó una pelota.",
    "La última persona que miró con un animal.",
    "La última persona en terminar de leer un cómic o novela gráfica.",
    "La última persona que tomó una foto.",
    "La última persona que tomó una foto con familia.",
    "La última persona que se sentó cerca de un fuego.",
    "La última persona que visitó una cascada.",
    "La última persona que sacó la basura."
]

},{}],3:[function(require,module,exports){
(function (global){
const en = require('./en.json');
const es = require('./es.json');
const CONDITIONS = { en, es };

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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./en.json":1,"./es.json":2}]},{},[3]);
