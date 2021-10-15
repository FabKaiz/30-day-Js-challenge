const allDiv = document.querySelectorAll('div');

const log = (event) => {
  event.stopPropagation();
  console.log(event.target.classList.value);
}

allDiv.forEach(div => div.addEventListener('click', log));