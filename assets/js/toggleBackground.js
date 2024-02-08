export function toggleBackground() {
  let toggleButton = document.getElementById("toggle-background");

  toggleButton.classList.toggle("justify-end");
  if (toggleButton.classList.contains("justify-end")) {
    document.body.style.backgroundColor = "grey";
    toggleButton.style.backgroundColor = "grey";
  } else {
    document.body.style.backgroundColor = "white";
    toggleButton.style.backgroundColor = "white";
  }
}
