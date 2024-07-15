const NUMOFSQUARES = 16*16;
const container = document.querySelector(".container"); /* .container selects elements by class name
                                                       and #container selects elements by ID */


 for (let i = 0; i <=NUMOFSQUARES; i++) {
    const square = document.createElement("div"); 
    square.classList.add('grid-square');
    container.appendChild(square);

    
}
/* 
document.querySelector("div").addEventListener( 
    'mouseover', function() {
        dcument.querySelector("div").classList.toggle("colored");
    } ) */

const squares = document.querySelectorAll('.grid-square');
squares.forEach(square => {
    square.addEventListener('mouseover', function(event) {
        this.classList.toggle('colored');
    });
})