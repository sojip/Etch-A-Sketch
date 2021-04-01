//initial grid
let container = document.querySelector("#container");
let createButton = document.querySelector('#createGrid');
let resetButton = document.querySelector('#resetGrid');

window.addEventListener("load", () => {
    container.style.gridTemplateColumns = `repeat(16, 1fr)`;
    container.style.gridTemplaterows = `repeat(16, 1fr)`;
    createGrid(16);
})


createButton.addEventListener('click', () => {
    let gridSize = document.getElementById("gridSize").value;
    if (gridSize >= 0 && gridSize < 101){
        deleteGrid()
        container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
        container.style.gridTemplaterows = `repeat(${gridSize}, 1fr)`
        createGrid(gridSize);
    }
    else {
        alert ("Change the size")
    }
    
})

resetButton.addEventListener('click', () => {
    let squares = document.querySelectorAll('.square');
    squares.forEach( square => {
       square.style.background = "white"} )
})



function createGrid(gridNumber) {
    for(let i=0; i < (gridNumber*gridNumber); i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
    }

    let squares = document.querySelectorAll('.square');
    squares.forEach( square => {
        square.addEventListener("mouseover", () => {
            square.style.background = "black";
        })
    } )
}

function deleteGrid() {   
    squares = document.querySelectorAll('.square');
    squares.forEach( square => {
        container.removeChild(square) })
}