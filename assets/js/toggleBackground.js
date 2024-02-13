export function toggleBackground() {
  let toggleButton = document.getElementById("toggle-background");
  let ball = document.getElementById("tb-ball");

  ball.classList.toggle("justify-end");

  if (ball.classList.contains("justify-end")) {
    document.body.style.backgroundColor = "gray";
    document.body.style.transition = "all 1s";
    toggleButton.style.backgroundColor = "white";
    ball.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.transition = "all 1s";
    toggleButton.style.backgroundColor = "white";
    ball.style.backgroundColor = "black";
  }
}
