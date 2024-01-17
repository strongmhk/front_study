const colors = ["blue", "violet", "orange"];
const h2 = document.querySelector("body h2");
const body = document.querySelector("body");
h2.style.color = "white";
body.style.backgroundColor = colors[0];

function ResizeWindow() {
  const currentColor = body.style.backgroundColor;
  let newColor;
  if (currentColor === "blue") {
    newColor = "violet";
  } else if (currentColor === "violet") {
    newColor = "orange";
  } else if (currentColor === "orange") {
    newColor = "violet";
  }
  body.style.backgroundColor = newColor;
}

window.addEventListener("resize", ResizeWindow);
