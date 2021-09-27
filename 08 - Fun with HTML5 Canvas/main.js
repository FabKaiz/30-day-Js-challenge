const canvas = document.getElementById('draw')
const ctx = canvas.getContext('2d');

// Canvas style
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#000';
ctx.lineWidth = 23;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

const draw = (e) => {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++

  if (ctx.lineWidth >= 30 || ctx.lineWidth <= 5) {
    direction = !direction;
  }

  direction ? ctx.lineWidth++ : ctx.lineWidth--
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY]
});