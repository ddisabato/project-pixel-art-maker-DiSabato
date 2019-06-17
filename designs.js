// Pixel Art Maker project - Dan DiSabato

// main function for making the grid, getting DOM elements, coloring boxes
function makeGrid() {

    // define size input variables from DOM elements and get users input
    const gridHeight = document.querySelector('#inputHeight');
    const gridWidth = document.querySelector('#inputWidth');

    // define table variable from DOM element
    const designCanvas = document.querySelector('#pixelCanvas');

    // define color variable from DOM element and get users input
    const colorInput = document.querySelector("#colorPicker");

    designCanvas.innerHTML = '';
        let grid = document.createDocumentFragment();
        for (let x = 0; x < gridHeight.value; x++) {
            let tr = document.createElement('tr');
            for (let y = 0; y < gridWidth.value; y++) {
                let td = document.createElement('td');
                tr.appendChild(td);
            }
            tr.addEventListener('click', clickedBox);
            grid.appendChild(tr);
        }
    designCanvas.appendChild(grid);

    // color a grid box
    function clickedBox(event) {
        let color = colorInput.value;
        event.target.style.backgroundColor = color;
    }

};

// call the makeGrid() function
document.querySelector('form').addEventListener('submit', function(event){
    event.preventDefault();
    makeGrid();
});
