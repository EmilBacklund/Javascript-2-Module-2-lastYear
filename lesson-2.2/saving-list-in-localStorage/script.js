const listKey = "list";
let listItems = retrieveFromStorage();

createList();

const listInput = document.querySelector("input");
const listButton = document.querySelector("button");

listButton.addEventListener("click", addToList);

function addToList() {
  const newItem = listInput.value.trim();

  if (newItem.length >= 2) {
    if (!listItems.includes(newItem)) {
      listItems.push(newItem);
    }
    createList();
    saveToStorage(listItems);
    listInput.value = "";
  }
}

function createList() {
  const listContainer = document.querySelector("ul");

  listContainer.innerHTML = "";

  listItems.forEach((item) => {
    listContainer.innerHTML += `<li><span>${item}</span> 
    <i class="fa fa-trash data-item" data-item=${item.replace(/ /g, "-")}>
    </li>`;
  });

  const items = document.querySelectorAll("li span");

  items.forEach((item) => {
    item.addEventListener("click", handleClick);
  });

  const trashCans = document.querySelectorAll("li i");

  trashCans.forEach((can) => {
    can.addEventListener("click", removeFromList);
  });
}

function handleClick() {
  this.classList.toggle("complete");
}

function saveToStorage(valueToSave) {
  localStorage.setItem(listKey, JSON.stringify(valueToSave));
}

function retrieveFromStorage() {
  const currentList = localStorage.getItem(listKey);

  if (!currentList) {
    return [];
  }

  return JSON.parse(currentList);
}

function removeFromList() {
  // console.log(event);
  console.log(event.target.dataset.item);

  const deleteThisItem = event.target.dataset.item;
  console.log(deleteThisItem);

  const newList = listItems.filter((item) => {
    if (deleteThisItem !== item) {
      return true;
    }
  });

  listItems = newList;

  createList();
}
