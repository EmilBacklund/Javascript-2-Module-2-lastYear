const items = document.querySelectorAll("li span");

items.forEach(function (item) {
  item.addEventListener("click", handleClick);
});

function handleClick() {
  event.target.classList.toggle("complete");
}
