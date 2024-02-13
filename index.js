const main = document.createElement("div");
main.setAttribute("class", "main");
const title = document.createElement("h1");
title.setAttribute("class", "title");
title.innerText = "Ladybird in a Box";
main.appendChild(title);
const box = document.createElement("div");
box.setAttribute("class", "box");
main.appendChild(box);
const ladyBug = document.createElement("div");
ladyBug.setAttribute("class", "lady_bug");
box.appendChild(ladyBug);

const controlButtons = document.createElement("div");
controlButtons.setAttribute("class", "control_buttons");

const buttons = [
  { name: "left", symbol: "←" },
  { name: "right", symbol: "→" },
  { name: "up", symbol: "↑" },
  { name: "down", symbol: "↓" },
  { name: "turn_clockwise", symbol: "↻" },
  { name: "turn_anti_clockwise", symbol: "↺" },
  { name: "home", symbol: "H" },
];
buttons.forEach((el) => {
  const individualButton = document.createElement("button");
  individualButton.id = el.name;
  individualButton.innerText = el.symbol;
  document.body.prepend(individualButton);
  controlButtons.appendChild(individualButton);
});

document.body.prepend(main, controlButtons);

const bug = document.querySelector(".lady_bug");
const upBtn = document.querySelector("#up");
const downBtn = document.querySelector("#down");
const rightBtn = document.querySelector("#right");
const leftBtn = document.querySelector("#left");
const homeBtn = document.querySelector("#home");
const turnClockWiseBtn = document.querySelector("#turn_clockwise");
const turnAntiClockWiseBtn = document.querySelector("#turn_anti_clockwise");

let rotation = 0;
let xPos = 0;
let yPos = 0;

const setTransform = () => {
  bug.style.left = `${xPos}px`;
  bug.style.top = `${yPos}px`;
  bug.style.transform = `rotate(${rotation}deg)`;
};

const stepLeft = () => {
  xPos > 0 && (xPos -= 10);
  setTransform();
};
const stepRight = () => {
  xPos < 360 && (xPos += 10);
  setTransform();
};
const stepUp = () => {
  yPos > 0 && (yPos -= 10);
  setTransform();
};
const stepDown = () => {
  yPos < 360 && (yPos += 10);
  setTransform();
};

const turnClockWise = () => {
  rotation += 90;

  setTransform();
};
const turnAntiClockWise = () => {
  rotation -= 90;

  setTransform();
};

const home = () => {
  yPos = 0;
  xPos = 0;
  rotation = 0;
  setTransform();
};

upBtn.addEventListener("click", stepUp);
downBtn.addEventListener("click", stepDown);
rightBtn.addEventListener("click", stepRight);
leftBtn.addEventListener("click", stepLeft);
homeBtn.addEventListener("click", home);
turnClockWiseBtn.addEventListener("click", turnClockWise);
turnAntiClockWiseBtn.addEventListener("click", turnAntiClockWise);
