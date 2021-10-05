const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 25;
const walk2 = 40;
const walk3 = 55;

const shadow = (e) => {
  const {offsetWidth: width, offsetHeight: height} = hero;
  let {offsetX: x, offsetY: y} = e;

  if (e.target !== hero) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  // red
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  // green
  const xWalk2 = Math.round((x / width * walk2) - (walk2 / 2));
  const yWalk2 = Math.round((y / height * walk2) - (walk2 / 2));

  // blue
  const xWalk3 = Math.round((x / width * walk3) - (walk3 / 2));
  const yWalk3 = Math.round((y / height * walk3) - (walk3 / 2));

  text.style.textShadow = `
  ${xWalk}px ${yWalk}px 0px rgba(255, 0, 0, 0.5),
  ${xWalk2}px ${yWalk2}px 0px rgba(0, 255, 0, 0.5),
  ${xWalk3}px ${yWalk3}px 0px rgba(0, 255, 255, 0.8)
  `
}

hero.addEventListener('mousemove', shadow)