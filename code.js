const container = document.querySelector(".container"); /* .container selects elements by class name
                                                       and #container selects elements by ID */
const containerSize = 480;

function createGrid(size) {
    container.innerHTML = '';
    const squareSize = containerSize / size;

    const NUMOFSQUARES = size * size;

    for (let i = 0; i < NUMOFSQUARES; i++) { // Use < instead of <=
        const square = document.createElement("div");
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }

    // Add event listeners to new squares
    etchSketch();
}

function etchSketch() {
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => {
        square.addEventListener('mouseenter', function () {
            this.classList.add('colored');
        });
    });

    squares.forEach(square => {
        square.addEventListener('mouseout', function () {
            this.classList.toggle('differentcolored');
        });
    });
}

function resizeGrid() {
    let newSize = prompt("Enter a new grid size");
    newSize = parseInt(newSize);

    if (isNaN(newSize) || newSize <= 0) {
        alert("Enter a valid number");
        return;
    }

    createGrid(newSize);
}

// Initial grid creation
createGrid(16);

const button = document.getElementById('btn');
button.addEventListener('click', resizeGrid);

