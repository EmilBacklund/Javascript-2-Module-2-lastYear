const pet = {
  type: "dog",
  colour: "brown",
  age: 24,
  isFriendly: true,
  name: "Anders",
};

const petDetail = document.querySelector(".pet-detail");

let friendly = "";

if (pet.isFriendly) {
  friendly = "Yes";
} else {
  friendly = "No";
}

const petColour = pet.colour;

let petAge = "Unknown";

if (pet.age) {
  petAge = pet.age;
}

petDetail.innerHTML = `
<h4 style="color: ${petColour}">${pet.type}</h4>
<p>Age: ${petAge}</p>
<p>Friendly: ${friendly}</p>
<p style="color: ${petColour}">Name: ${pet.name}</p>`;

console.log(friendly);
