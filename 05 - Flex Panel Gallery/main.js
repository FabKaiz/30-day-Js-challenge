const panels = document.querySelectorAll('.panel');
console.log(panels);

function openPanels() {
  removeAllPanelClass()
  this.classList.toggle('open')
};

function togglePanel(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

const removeAllPanelClass = () => {
  panels.forEach(panel => panel.classList.remove('open'))
}

panels.forEach(panel => panel.addEventListener('click', openPanels));
panels.forEach(panel => panel.addEventListener('transitionend', togglePanel));