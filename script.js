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


makeGrid();


/* creating trace function for drawing */

let divs = document.querySelectorAll(".box");

divs.forEach(div => {
    div.addEventListener("mouseover", () => {
        div.classList.add("trail");
    })
})




