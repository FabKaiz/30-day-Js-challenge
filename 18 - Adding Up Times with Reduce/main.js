const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
const ul = document.querySelector('ul')

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(time => {
   const [mins, secs] = time.split(':').map(parseFloat);
   return (mins * 60) + secs;
  }).reduce((total, seconds) => total + seconds, 0);

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

ul.insertAdjacentHTML('afterend', `
<h2>
  Total : ${hours}h ${minutes}m ${secondsLeft}s
</h2>
`);
