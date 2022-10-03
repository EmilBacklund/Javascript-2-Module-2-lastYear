let products = [
  { id: 1, name: "Great Product" },
  { id: 2, name: "Terrible Product" },
  { id: 3, name: "Ok Product" },
  { id: 4, name: "Meh Product" },
];

for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}

const itemIndex = products.findIndex(({ id, name }) => {
  if (name === "Ok Product") {
    return true;
  }
});

console.log(itemIndex);

const thisItem = products[itemIndex];

console.log(thisItem);

products[itemIndex].name = "updated name";

console.log(products);
