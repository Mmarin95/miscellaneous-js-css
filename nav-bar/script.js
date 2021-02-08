const toggleButton = document.getElementById("toggle-button");
const nav = document.getElementById("nav");

toggleButton.addEventListener("click", () => {
  nav.classList.toggle("active");
});
