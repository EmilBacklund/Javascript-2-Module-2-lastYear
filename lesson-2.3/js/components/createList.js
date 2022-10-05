import { listKey } from "../settings.js";
import { saveToStorage } from "../utils/storage.js";

export default function createList(listItems) {
  const listContainer = document.querySelector("ul");

  listContainer.innerHTML = "";

  listItems.forEach((listItem) => {
    let checked = "";

    if (listItem.complete) {
      checked = "checked";
    }

    listContainer.innerHTML += `
    <li><span class="${checked}">${listItem.item}</span> 
    <input ${checked} type="checkbox" data-id="${listItem.id}" />
    </li>`;
  });

  const checkboxes = document.querySelectorAll("li input");

  checkboxes.forEach((box) => {
    box.addEventListener("click", toggleComplete);
  });

  function toggleComplete() {
    const id = event.target.dataset.id;
    const checked = event.target.checked;
    // console.log(id);
    // console.log(checked);
    const updatedList = updateList(listItems, id, checked);
    saveToStorage(listKey, updatedList);
    createList(updatedList);
  }
}

function updateList(listItems, id, checked) {
  //   console.log("listItems: ", listItems);
  //   console.log("id: ", id);
  //   console.log("checked: ", checked);

  const thisItemIndex = listItems.findIndex((item) => {
    if (item.id === JSON.parse(id)) {
      return true;
    }
  });

  listItems[thisItemIndex].complete = checked;

  console.log(listItems);
  //   console.log(thisItemIndex);

  return listItems;
}
