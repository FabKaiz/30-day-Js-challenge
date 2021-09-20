window.addEventListener('keydown', (e) => {
  const audio = document.querySelector(`audio[data-key=${e.key}]`);
  const key = document.querySelector(`.key[data-key=${e.key}]`);
  key.classList.add('playing')
  setTimeout(() => key.classList.remove('playing'), 100);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
})