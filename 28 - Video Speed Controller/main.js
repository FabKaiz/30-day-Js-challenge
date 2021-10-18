const speedDiv = document.querySelector('.speed');
const speedBar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');
let isDown = false;

function handleMove(e) {
  if (!isDown) return;
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 3;
  const height = Math.floor(percent * 100) + '%'
  const playbackRate = percent * (max - min) + min;
  speedBar.style.height = height;
  speedBar.textContent = playbackRate.toFixed(2) + 'x';
  video.playbackRate = playbackRate;
}

speedDiv.addEventListener('mousemove', handleMove);
speedDiv.addEventListener('mousedown', () => isDown = true);
speedDiv.addEventListener('mouseup', () => isDown = false);
