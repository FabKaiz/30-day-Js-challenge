const links = document.querySelectorAll('a');

//Add the highlight class to the DOM
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

const highlightLink = (e) => {
  const linkCoords = e.target.getBoundingClientRect();
  // Change the value to change the highlight size
  const highlightSize = 50;
  // Coords to handle people scrolling
  const coords = {
    width: linkCoords.width + highlightSize,
    height: linkCoords.height + highlightSize,
    top: linkCoords.top + window.scrollY - highlightSize / 2,
    left: linkCoords.left + window.scrollX- highlightSize / 2
  };

  highlight.style.width = coords.width +'px';
  highlight.style.height = coords.height + 'px';
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

links.forEach(link => link.addEventListener('mouseenter', highlightLink));
