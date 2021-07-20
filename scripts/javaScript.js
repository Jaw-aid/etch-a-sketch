const etchArea = document.querySelector('.etchArea')
let numberOfAuto = ''



function createSquare(x) {
    let square = document.createElement('div')
    square.classList.add(`square`);
    // square.textContent = `${x}`
    etchArea.appendChild(square);
}

function createGrid(sizeOfGrid) {
    // Update gridTemplateColumns
    for (let i = 0; i < sizeOfGrid; i++) {
        numberOfAuto += ('auto' + ' ')
    }
    console.log(numberOfAuto)
    etchArea.style.gridTemplateColumns = numberOfAuto
    // Creates rows
    for (let i = 0; i < sizeOfGrid; i++) {
        // Creates columns
        for (let i = 0; i < sizeOfGrid; i++) {
            createSquare(i);
        } 
    }
}