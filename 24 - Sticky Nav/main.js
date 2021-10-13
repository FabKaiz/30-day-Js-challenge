const nav = document.getElementById('main');
const sticky = nav.offsetTop;

const stickTop = () => {
  if (window.pageYOffset >= sticky) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    nav.classList.add('sticky');
  } else {
    document.body.style.paddingTop = 0;
    nav.classList.remove('sticky')
  }
}

window.addEventListener('scroll', () => stickTop());
