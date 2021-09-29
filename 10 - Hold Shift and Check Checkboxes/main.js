const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastchecked;

function check(checked) {
  let inBetween = false;
  if (checked.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastchecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastchecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', check));