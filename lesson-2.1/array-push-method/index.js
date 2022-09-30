const products = [
  { id: 1, name: "Product A" },
  { id: 2, name: "Product B" },
  { id: 3, name: "Product C" },
  { id: 4, name: "Product D" },
];

const newProduct = { id: 5, name: "Some name" };

products.push(newProduct);

console.log(products);
