


let container = document.querySelector("#grid-container")

/* creating grid */
let box;
function makeGrid() {
    for (let i = 0; i < 256; i++) {
        box = document.createElement("div");
        box.className = "box";
        container.appendChild(box);
    }
}


/* creating reset button that clears and updates the squares */
let updateButton = document.querySelector("#update-button");
updateButton.addEventListener("click", () => {

    let isFalse = true;
    
    while(isFalse) {
        let gridSize = prompt("Enter grid(1-100): ");
        if(gridSize >= 1 && gridSize <= 100) {
            updateGrid(gridSize);
            isFalse = false;
        }
    }
    
  
})


/* clears previous squares so it wont stack and creates a new one */

function updateGrid(gridSize) {
    container.innerHTML="";
    container.style.gridTemplateColumns = "repeat(" + gridSize + ", 1fr)";
    container.style.gridTemplateRows = "repeat(" + gridSize + ", 1fr)";
    for (let i = 0; i < gridSize * gridSize; i++) {
        box = document.createElement("div");
        box.className = "box";
        container.appendChild(box);
    }
    draw();
}


/* creating trace function for drawing */
function draw() {
    let divs = document.querySelectorAll(".box");

    divs.forEach(div => {
        div.addEventListener("mouseover", () => {
            div.classList.add("trail");
        })
    })
    
}

makeGrid();
draw();








