const pressedKey = [];
const easterEggCode = 'fabien'

window.addEventListener('keyup',(e) => {
  pressedKey.push(e.key);
  pressedKey.splice(-easterEggCode.length -1, pressedKey.length - easterEggCode.length);
  pressedKey.join('').includes(easterEggCode) ? cornify_add() : ''; 
} )