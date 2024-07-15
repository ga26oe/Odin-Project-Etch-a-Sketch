const NUMOFSQUARES = 16*16;
const container = document.querySelector(".container"); /* .container selects elements by class name
                                                       and #container selects elements by ID */


 for (let i = 0; i <=NUMOFSQUARES; i++) {
    const square = document.createElement("div"); 
    square.classList.add('grid-square');
    container.appendChild(square);

    
}
const squares = document.querySelectorAll('.grid-square');
squares.forEach(square => {
    square.addEventListener('mouseenter', function() {
        this.classList.add('colored');
    });
})

squares.forEach(square => {
    square.addEventListener('mouseout', function() {
        this.classList.toggle('differentcolored');
    });
})

