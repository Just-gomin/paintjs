const canvas = document.getElementById("jsCanvas");

let isPainting = false;

const stopPainting = () => {
  isPainting = false;
};

const onMouseMove = (event) => {
  const x = event.offsetX;
  const y = event.offsetY;
};

const onMouseDown = (event) => {
  isPainting = true;
};

const onMouseUp = (event) => {
  stopPainting();
};

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseleave", stopPainting);
}
