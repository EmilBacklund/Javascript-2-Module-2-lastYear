export default function clearButton() {
  const clearButton = document.querySelector("#clear");

  clearButton.addEventListener("click", clearList);

  function clearList() {
    const listContainer = document.querySelector("ul");

    // clear the localstorage
    // clear the ul

    if (confirm("Are you sure?")) {
      localStorage.clear();
      listContainer.innerHTML = "";
    }
  }
}
