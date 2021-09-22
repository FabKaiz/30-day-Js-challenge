const spacing = document.getElementById('spacing');
const blur = document.getElementById('blur');
const baseColor = document.getElementById('base');
const root = document.documentElement

document.addEventListener('change', (e) => {
  root.style.setProperty('--base', baseColor.value);
  root.style.setProperty('--blur', blur.value);
  root.style.setProperty('--spacing', spacing.value + 'px');
})