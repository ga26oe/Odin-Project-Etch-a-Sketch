const container = document.querySelector(".container"); /* .container selects elements by class name
                                                       and #container selects elements by ID */



function createGrid(size) {
    container.innerHTML = '';
    const NUMOFSQUARES = size * size;

    for (let i = 0; i <= NUMOFSQUARES; i++) {
        const square = document.createElement("div");
        square.classList.add('grid-square');
        container.appendChild(square);


    }
}

function etchSketch() {
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => {
        square.addEventListener('mouseenter', function () {
            this.classList.add('colored');
        });
    })

    squares.forEach(square => {
        square.addEventListener('mouseout', function () {
            this.classList.toggle('differentcolored');
        });
    })
}

createGrid(16);
etchSketch();



const button = document.getElementById('btn');
button.addEventListener('click', resizeGrid);


function resizeGrid() {
    let newSize = prompt("Enter a new grid size");
    newSize = parseInt(newSize);

    if (isNaN(newSize) || newSize <= 0) {
        alert("Enter a valid number");
        return;
    }

    container.innerHTML = '';
    createGrid(newSize);
    etchSketch();


} 