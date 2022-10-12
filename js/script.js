const createGrid = (gridSize) => {
  const container = document.querySelector("#container");
  containerWidth = container.clientWidth;
  containerHeight = container.clientHeight;

  for (let i = 0; i < gridSize**2; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = containerWidth / gridSize + "px";
    square.style.height = square.style.width;
    container.appendChild(square)
  }
};

const colorSquares = (color) => {
  let squares = document.querySelectorAll(".square");
  for (let square of squares) {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = color;
    });
  }
};

const changeColor = () => {
  const colorPicker = document.querySelector("#colorPicker");
  colorPicker.addEventListener("change", () => {
    colorSquares(colorPicker.value);
  });
};

const resizeButton = document.querySelector("#resizeButton");
resizeButton.addEventListener("click", () => {
  const container = document.querySelector("#container");
  let gridSize = prompt("Choose grid size (between 1 and 100): ");
  if (gridSize === null || gridSize == "") return;
  while (isNaN(gridSize) || parseInt(gridSize) < 1 || parseInt(gridSize) > 100) {
    gridSize = prompt(
      "Invalid value ! Please choose a number between 1 and 100: "
    );
  }
  container.textContent = "";
  createGrid(parseInt(gridSize));
  colorSquares(document.querySelector("#colorPicker").value);
});

const randomColorButton = document.querySelector("#randomColorButton");
randomColorButton.addEventListener("click", () => {
  let options = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += options[Math.floor(Math.random() * options.length)];
  }
  document.querySelector("#colorPicker").value = color;
  colorSquares(color);
});

const yourColorButton = document.querySelector("#yourColorButton");
yourColorButton.addEventListener("click", () => {
  let colorPicker = document.querySelector("#colorPicker");
  colorPicker.click();
  changeColor();
});

const clearButton = document.querySelector("#clearButton");
clearButton.addEventListener("click", () => {
  let squares = document.querySelectorAll(".square");
  for (let square of squares) {
    square.style.backgroundColor = "#fff";
  }
});

createGrid(16);
colorSquares(document.querySelector("#colorPicker").value);
