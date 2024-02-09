export function toggleBackground() {
  let toggleButton = document.getElementById("toggle-background");
  let ball = document.getElementById("tb-ball");

  toggleButton.classList.toggle("justify-end");
  if (toggleButton.classList.contains("justify-end")) {
    document.body.style.backgroundColor = "gray";
    toggleButton.style.backgroundColor = "black";
    ball.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "white";
    toggleButton.style.backgroundColor = "white";
    ball.style.backgroundColor = "black";
  }
}
