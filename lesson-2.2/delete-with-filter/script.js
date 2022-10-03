// let items = ["a", "a", "a", "b", "b", "c", "d", "e", "e"];

let items = [
  { id: 1, letter: "a" },
  { id: 2, letter: "b" },
  { id: 3, letter: "c" },
  { id: 4, letter: "d" },
];

// console.log(items);

// items = filteredItems;

// console.log(filteredItems);

function removeItem(idToRemove) {
  const filteredItems = items.filter(({ id }) => {
    if (id !== idToRemove) {
      return true;
    }
  });
  items = filteredItems;
}

removeItem(2);

console.log(items);
