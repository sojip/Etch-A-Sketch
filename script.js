
let gridNumber = 16;
let container = document.querySelector(".container");
let width = container.offsetWidth;
let height = container.offsetHeight;

console.log(width)


for(let i=0; i < (gridNumber*gridNumber); i++) {
    let div = document.createElement("div");
    div.classList.add("carreau");
    div.style.minWidth = String(width/(gridNumber+1)) + "px";
    div.style.minHeight = String(height/(gridNumber+1)) + "px";
    container.appendChild(div);
    console.log(div.style.width)
}
