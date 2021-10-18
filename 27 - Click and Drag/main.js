const items = document.querySelector('.items'); // The div containing the items we want to slide

let isDown = false;
let startX;
let scrollLeft;

const itemsMouseDown = (e) => {
  isDown = true;
  items.classList.add('active');
  startX = e.pageX - items.offsetLeft;
  scrollLeft = items.scrollLeft;
}

const itemsMouseLeave = () => {
  isDown = false;
  items.classList.remove('active');
}

const itemsMouseUp = () => {
  isDown = false;
  items.classList.remove('active');
}

const itemsMouseMove = (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - items.offsetLeft;
  const walk = x - startX; // You can multiply this to slide faster
  items.scrollLeft = scrollLeft - walk;
}

// Event listeners
items.addEventListener('mousedown', (e) => itemsMouseDown(e));
items.addEventListener('mouseleave', () => itemsMouseLeave());
items.addEventListener('mouseup', () => itemsMouseUp());
items.addEventListener('mousemove', (e) => itemsMouseMove(e));