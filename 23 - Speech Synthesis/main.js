const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

// Add the voices in the dropdown
function populateVoices() {
  voices = this.getVoices();
  console.log(voices);
 voicesDropdown.innerHTML = voices
  .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
  .join('');
};

// Set the voice
function setVoice() {
  msg.voice = voices.find(voice => voice.name === this.value);
}

// Start / stop the voice
function toggle(starttOver = true) {
  speechSynthesis.cancel();
  if (starttOver) {
    speechSynthesis.speak(msg);
  }
}

// Set the pitch and rate of the voice
function setOption() {
  console.log(this.name, this.value);
  msg[this.name] = this.value;
}

// Event listeners
speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));
