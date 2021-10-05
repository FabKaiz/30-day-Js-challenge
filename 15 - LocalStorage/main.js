const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const clearButton = document.getElementById('clear')

const saveToLocalStorage = () => localStorage.setItem('items', JSON.stringify(items));

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  populateList(items, itemsList);
  saveToLocalStorage();
  this.reset();
}

const populateList = (items = [], itemsList) => {
  itemsList.innerHTML = items.map((item, index) => {
    return `
    <li>
      <input type="checkbox" data-index="${index}" id="item_${index}" ${item.done ? 'checked' : ''} />
      <label for="item_${index}">${item.text}</label>
    </li>
    `
  }).join('');
}

const toggleDone = (e) => {
  if (!e.target.matches('input')) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  saveToLocalStorage();
  populateList(items, itemsList);
}

// Bonus
const clearItems = (e) => {
  localStorage.removeItem('items');
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
clearButton.addEventListener('click', clearItems);
populateList(items, itemsList);