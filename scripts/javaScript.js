const etchArea = document.querySelector('.etchArea')
let numberOfAuto = ''

// TODO Implement repeat on grid template 
// TODO Implement hovering to change colors
// TODO Create text box and button 
// TODO Make textbox and button work to change grid size
// TODO Add in CSS changes to make website look nice 
// TODO Add in types of etch colors

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