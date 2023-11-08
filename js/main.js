const container = document.querySelector(".container");

const generateBtn = () => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.textContent = "Change grid size";
  container.appendChild(btn);
  btn.addEventListener("click", () => {
    let gridSize = parseInt(
      prompt(
        "How many squares per side do you want in the new grid? (between 1 and 100)"
      )
    );
    while (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
      gridSize = prompt("Choose a number between 1 and 100");
    }
    updateContainer(gridSize);
  });
};

const generateGrid = (gridSize) => {
  const grid = document.createElement("div");
  grid.classList.add("grid");

  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < gridSize; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
    }
    grid.appendChild(row);
  }
  container.appendChild(grid);
};

const colorSquares = () => {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "#666";
    });
  });
};

const updateContainer = (gridSize) => {
  container.innerHTML = "";
  generateBtn();
  generateGrid(gridSize);
  colorSquares();
};

updateContainer(16);
