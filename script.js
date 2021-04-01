let container = document.querySelector(".container");
let width = container.offsetWidth - 2;
let height = container.offsetHeight - 2;
createGrid(16);

let divs = document.querySelectorAll('.square');

window.addEventListener('resize', () => {
    changeSquareDimension(16)
});

divs.forEach( div => {
    div.addEventListener("mouseover", () => {
        div.style.background = "black";
    })
} )

let button = document.querySelector('#createGrid');
button.addEventListener('click', () => {
    let gridSize = document.getElementById("gridSize").value;
    createGrid(gridSize);
    changeSquareDimension(gridSize);
})


// function changeSquareDimension(gridNumber) {
    
//     width = container.offsetWidth;
//     height = container.offsetHeight;
//     divs.forEach( div => {
//         div.style.minWidth = String(((width)/gridNumber)-4) + "px";
//         div.style.minHeight = String(((height)/gridNumber)-4) + "px";
//     } )
// }

function createGrid(gridNumber) {
    width = container.offsetWidth;
    console.log(width)
    height = container.offsetHeight;
    for(let i=0; i < (gridNumber*gridNumber); i++) {
        let div = document.createElement("div");
        div.classList.add("square");
        // div.style.minWidth = String(((width)/gridNumber)) + "px";
        // console.log(div.style.minWidth)
        // div.style.minHeight = String(((height)/gridNumber)) + "px";
        container.appendChild(div);
        // console.log(div.offsetWidth)
    }
}