document.addEventListener("DOMContentLoaded", function () {
    const chessboard = document.getElementById("chessboard");
    const addRowBtn = document.getElementById("addRowBtn");
    const addColumnBtn = document.getElementById("addColumnBtn");

    let rowCount = 1;
    let colCount = 1;

    // Object to store cell colors
    const cellColors = {};

    function createChessboard() {
        chessboard.innerHTML = "";
        for (let i = 0; i < rowCount; i++) {
            const row = document.createElement("tr");
            for (let j = 0; j < colCount; j++) {
                const cell = document.createElement("td");
                const cellId = `cell_${i}_${j}`;
                cell.id = cellId;
                cell.contentEditable = true;
                cell.addEventListener("input", validateCell);
                cell.addEventListener("click", changeCellColor);
                row.appendChild(cell);

                // Set cell color if it exists
                if (cellColors[cellId]) {
                    cell.style.backgroundColor = cellColors[cellId];
                }
            }
            chessboard.appendChild(row);
        }
    }

    function validateCell(event) {
        const cell = event.target;
        const text = cell.innerText;
        if (text === "") {
            alert("Cannot be empty");
            cell.innerText = "";
            return;
        }
        // Zde můžete provést další validaci, například pro neplatné znaky.
    }

    function changeCellColor(event) {
        const cell = event.target;
        const cellId = cell.id;
        const newColor = prompt("Colour:", cell.style.backgroundColor);
        if (newColor !== null) {
            cell.style.backgroundColor = newColor;
            // Store the color in the cellColors object
            cellColors[cellId] = newColor;
        }
    }

    function addRow() {
        rowCount++;
        createChessboard();
    }

    function addColumn() {
        colCount++;
        createChessboard();
    }

    addRowBtn.addEventListener("click", addRow);
    addColumnBtn.addEventListener("click", addColumn);

    createChessboard();
});