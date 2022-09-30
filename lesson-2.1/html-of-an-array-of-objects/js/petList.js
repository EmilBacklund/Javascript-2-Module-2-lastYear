const pets = [
  {
    type: "dog",
    colour: "brown",
    age: 14,
    isFriendly: true,
  },
  {
    type: "cat",
    colour: "orange",
    age: 7,
    isFriendly: false,
  },
  {
    type: "duck",
    colour: "yellow",
    age: 20,
    isFriendly: true,
  },
];

const container = document.querySelector(".pet-container");

for (let i = 0; i < pets.length; i++) {
  let petColour = pets[i].colour;
  let petAge = pets[i].age;
  let friendly = "Yes";

  if (!pets[i].isFriendly) {
    friendly = "No";
  }

  console.log(pets[i]);
  container.innerHTML += `
  <h4 style="color: ${petColour}">${pets[i].type}</h4>
  <p>Age: ${petAge}</p>
  <p>Friendly: ${friendly}</p>
  `;
}
