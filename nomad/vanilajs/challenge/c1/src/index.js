// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  MouseEnter: function () {
    h2.style.color = colors[0];
    h2.innerText = "The mouse is here!";
  },
  MouseLeave: function () {
    h2.style.color = colors[1];
    h2.innerText = "The mouse is gone!";
  },
  Resize: function () {
    h2.style.color = colors[2];
    h2.innerText = "You just resized!";
  },
  RightClick: function () {
    h2.style.color = colors[3];
    h2.innerText = "That was a right click!";
  }
};

const h2 = document.querySelector("h2");

h2.addEventListener("mouseenter", superEventHandler.MouseEnter);
h2.addEventListener("mouseleave", superEventHandler.MouseLeave);
window.addEventListener("resize", superEventHandler.Resize);
window.addEventListener("mouseup", superEventHandler.RightClick);
