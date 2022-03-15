function makeGrid() {
    let container = document.createElement("div");
    container.id = "main";

    for (let i = 0; i < 16; i++) {
        let row = document.createElement("div");
        row.id = "row-" + i;
        row.className = "row";

        for (let j = 0; j < 16; j++) {
            let col = document.createElement("div");
            col.className = "box";
            row.appendChild(col);
        }

        container.appendChild(row);
        
    }

    document.body.appendChild(container);
}

makeGrid();