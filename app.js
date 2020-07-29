const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

const brushSizeInput = document.getElementById("jsBrushSize");
const brushSizeText = document.getElementById("jsBrushSizeText");

const mode = document.getElementById("jsMode");

const colors = document.getElementsByClassName("jsColor");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;

let isPainting = false;
let isFilling = false;

const stopPainting = () => {
  isPainting = false;
};

const startPainting = () => {
  isPainting = true;
};

const onMouseMove = (event) => {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!isPainting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
};

const handleColorClick = (event) => {
  ctx.strokeStyle = event.target.style.backgroundColor;
};

const handleBrushSizeChange = (event) => {
  const brushSize = event.target.value;
  ctx.lineWidth = brushSize;
  brushSizeText.innerText = brushSize.includes(".")
    ? brushSize
    : `${brushSize}.0`;
};

const handleModeClick = () => {
  if (isFilling) {
    isFilling = false;
    mode.innerText = "FILL";
  } else {
    isFilling = true;
    mode.innerText = "Paint";
  }
};

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

if (brushSizeInput) {
  brushSizeInput.addEventListener("input", handleBrushSizeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}
