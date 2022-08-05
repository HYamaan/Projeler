const container = document.querySelector(".container");

const colors = [
  "#632E1F",
  "#B1AE11",
  "#65A619",
  "#610E81",
  "#259A69",
  "#C5A238",
  "#5000A8",
  "#818181",
  "#8EE80E",
];
const square = 500;

for (let i = 0; i < square; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(div) {
  const randomColor = getRandomColor();
  div.style.backgroundColor = randomColor;
  div.style.boxShadow = `0 0 2px ${randomColor} , 0 0 10px ${randomColor}`;
}
function getRandomColor() {
  return colors[Math.trunc(Math.random() * colors.length)];
}
function removeColor(div) {
  div.style.backgroundColor = "#111";
  div.style.boxShadow = `0 0 2px #000`;
}
