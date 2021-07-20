const etchArea = document.querySelector('.etchArea')
let numberOfAuto = ''



function createSquare(x) {
    let square = document.createElement('div')
    square.classList.add(`square`);
    square.textContent = `${x}`
    etchArea.appendChild(square);
}

function createGrid() {
    // Update gridTemplateColumns
    for (let i = 0; i < 3; i++) {
        numberOfAuto += 'auto'
    }
    console.log(numberOfAuto)
    etchArea.style.gridTemplateColumns = numberOfAuto
    // Creates rows
    for (let i = 0; i < 3; i++) {
        // Creates columns
        for (let i = 0; i < 3; i++) {
            createSquare(i);
        } 
    }
}