const container = document.getElementById("container");
const reset = document.getElementById("reset")
const sizeOfGrid = document.getElementById("size")

let gridSize = 16
let squareColour = 'black'

function makeRows(gridSize) { 
    container.style.setProperty('--grid-rows', gridSize);
    container.style.setProperty('--grid-cols', gridSize);
    for (c = 0; c < (gridSize * gridSize); c++) {
        let square = document.createElement("div");
        container.appendChild(square).className = "square";
        square.addEventListener('mouseover', e => e.target.style.backgroundColor = squareColour);

    };

};

function resetGrid () {
    let squares = document.querySelectorAll(".square")
        squares.forEach( (square) => {
            square.style.backgroundColor = 'white';
        } )

}

function size () {
    gridSize = prompt("enter a grid size")
    container.style.setProperty('--grid-rows', gridSize);
    container.style.setProperty('--grid-cols', gridSize);
    for (c = 0; c < (gridSize * gridSize); c++) {
        let square = document.createElement("div");
        container.appendChild(square).className = "square";
        square.addEventListener('mouseover', e => e.target.style.backgroundColor = squareColour);

    };
}



   

makeRows(gridSize)
reset.addEventListener('click', resetGrid)
sizeOfGrid.addEventListener('click', size)



