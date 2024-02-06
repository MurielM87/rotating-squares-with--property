const container = document.querySelector("#container");

let NUM_OF_SQUARES = 20;
let SPACE_BETWEEN_SQUARES = 15;
let DEGREES_BETWEEN_SQUARES = 220;
let ROTATION = 0;
let BORDER_SIZE = 1;

function build() {
  for (let i = 0; i < NUM_OF_SQUARES; i++) {
    const square = document.createElement("div");

    square.style.height = `${SPACE_BETWEEN_SQUARES * (i + 1)}px`;
    square.style.width = `${SPACE_BETWEEN_SQUARES * (i + 1)}px`;
    
    square.style.setProperty(
      "--incrementor",
      `${DEGREES_BETWEEN_SQUARES * (i + 1)}deg`
    );
    square.style.setProperty(
      "--degs",
      `${DEGREES_BETWEEN_SQUARES * (i + 1)}deg`
    );
    square.style.setProperty("--rotation", `${ROTATION * (i + 1)}deg`);
    square.style.borderWidth = `${BORDER_SIZE}px`;

    container.appendChild(square);
  }
}

function destroy() {
  const squares = container.querySelectorAll("*");

  for (const square of squares) {
    square.remove();
  }
}

function buildAndDestroy() {
  destroy();
  build();
}

function changeNum(e) {
  NUM_OF_SQUARES = parseInt(e);
  buildAndDestroy();
}

function changeBorder(e) {
  BORDER_SIZE = parseInt(e);
  buildAndDestroy();
}

function changeSpace(e) {
  SPACE_BETWEEN_SQUARES = parseInt(e);
  buildAndDestroy();
}

function changeDegrees(e) {
  DEGREES_BETWEEN_SQUARES = parseInt(e);
  buildAndDestroy();
}

function changeRotation(e) {
  ROTATION = parseInt(e);
  buildAndDestroy();
}

addEventListener("load", build());
