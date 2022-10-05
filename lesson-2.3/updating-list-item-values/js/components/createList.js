import { listKey } from "../settings.js";
import { saveToStorage } from "../utils/storage.js";

export default function createList(listItems) {
  const listContainer = document.querySelector("ul");

  listContainer.innerHTML = "";

  listItems.forEach((listItem) => {
    listContainer.innerHTML += `
    <li><input type="text" value="${listItem.item}" data-id="${listItem.id}"/> </li>`;
  });

  const textBoxes = document.querySelectorAll("li input[type=text");

  textBoxes.forEach((textBox) => {
    textBox.addEventListener("keyup", updateValue);
  });

  function updateValue() {
    const id = event.target.dataset.id;
    const value = event.target.value.trim();

    const updatedList = updateValueList(listItems, id, value);
    saveToStorage(listKey, updatedList);
    console.log(updatedList);
  }
}

function updateValueList(listItems, id, value) {
  const itemIndex = listItems.findIndex((item) => item.id === parseInt(id));

  listItems[itemIndex].item = value;

  return listItems;
}
