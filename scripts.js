const container = document.getElementById("container");
const reset = document.getElementById("reset")
const sizeOfGrid = document.getElementById("size")
const rainbowButton = document.getElementById('rainbow')
const blackButton = document.getElementById("black")

let gridSize = 16
let squareColour = 'black'
let currentMode = 'black'
let newMode = currentMode

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
    if (gridSize > 100) {
        alert("Grid size must be smaller than 100")
        size()
    }
    else {
        container.style.setProperty('--grid-rows', gridSize);
        container.style.setProperty('--grid-cols', gridSize);
        for (c = 0; c < (gridSize * gridSize); c++) {
            let square = document.createElement("div");
            container.appendChild(square).className = "square";
            square.addEventListener('mouseover', e => e.target.style.backgroundColor = squareColour);
    };
    }
}
function setCurrentMode (newMode) {
    activateButton (newMode)
    currentMode = newMode
}
function changeColor(currentMode) {
    if (currentMode === 'rainbow') {
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'black') {
        squareColour = 'black'
    } else if (currentMode === 'eraser') {
        squareColour  = '#fefefe'
    }
  }





  function activateButton(newMode) {
    if (currentMode === 'rainbow') {
      rainbowButton.classList.remove('active')
    } else if (currentMode === 'black') {
      blackButton.classList.remove('active')
    } else if (currentMode === 'eraser') {
      eraserBtn.classList.remove('active')
    }
  
    if (newMode === 'rainbow') {
      rainbowButton.classList.add('active')
    } else if (newMode === 'black') {
      blackButton.classList.add('active')
    } else if (newMode === 'eraser') {
      eraserBtn.classList.add('active')
    }
  }
   

makeRows(gridSize)
activateButton(newMode)
changeColor(currentMode)
reset.addEventListener('click', resetGrid)
sizeOfGrid.addEventListener('click', size)
rainbowButton.addEventListener('click', setCurrentMode('rainbow'))
blackButton.addEventListener('click', setCurrentMode('black'))





