let listItems = [];
//! let itemCount = [];

const listInput = document.querySelector("input");
const listButton = document.querySelector("button");

listButton.addEventListener("click", addToList);

function addToList() {
  const newItem = listInput.value.trim();

  if (newItem.length >= 2) {
    if (!listItems.includes(newItem)) {
      listItems.push(newItem);
      //! itemCount.push(1);
    }
    //! else {
    //!   itemCount[listItems.indexOf(newItem)]++;
    //!   console.log(listItems[listItems.indexOf(newItem)]);
    //! }
    createList();
    listInput.value = "";
    // console.log(listItems);
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

  //! for (let i = 0; i < listItems.length; i++) {
  //!   items[i].insertAdjacentHTML("afterend", ` x ${itemCount[i]}`);
  //! }

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

function removeFromList() {
  // console.log(event);
  console.log(event.target.dataset.item);

  //! let deleteListCount = listItems.indexOf(event.target.dataset.item);
  const deleteThisItem = event.target.dataset.item;

  const newList = listItems.filter((item) => {
    if (deleteThisItem !== item) {
      //! itemCount.splice(deleteListCount, 1);
      return true;
    }
  });

  listItems = newList;

  createList();
}
