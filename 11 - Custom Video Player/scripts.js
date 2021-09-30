const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const playButton = player.querySelector('.player__button');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Functions
const togglePlay = () => video.paused ? video.play() : video.pause();

const updateButton = () => playButton.textContent = video.paused ? '►' : '❚ ❚';

const skip = (e) => video.currentTime += parseFloat(e.target.dataset.skip);

const handleRangeUpdate = (e) => video[e.target.name] = e.target.value;

const handleProgress = (e) => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = percent + '%';
}

const scrub = (e) => {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);
['play', 'pause'].forEach(event => video.addEventListener(event, updateButton));
['change', 'mousemove'].forEach(event => ranges.forEach(range => range.addEventListener(event, handleRangeUpdate)));
playButton.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));

let mousedown = false;
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('mousedown', () => mousedown = true);