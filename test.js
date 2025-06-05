// test.js
const Keyboard = require('./lib/index.js');

const k = new Keyboard('event0'); // Replace 'event0' with your keyboard device if needed
k.on('keyup', console.log);
k.on('keydown', console.log);
k.on('keypress', console.log);
k.on('error', console.error);