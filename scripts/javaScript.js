const etchArea = document.querySelector('.etchArea')
const square = document.querySelector('.square')
const squares = document.getElementsByClassName('square');
const changeSizeTextBox = document.querySelector('.changeSizeTextBox')
const changeSizeBtn = document.querySelector('.changeSizeBtn')


// TODO Implement hovering to change colors
// TODO Make a clear button
// TODO Add in CSS changes to make website look nice 
// TODO Add in types of etch colors

window.onload = createGrid(16)

function createSquare(x) {
    let squareDIV = document.createElement('div')
    squareDIV.classList.add(`square`);
    etchArea.appendChild(squareDIV);
}

function createGrid(sizeOfGrid) {
    // Update gridTemplateColumns
    etchArea.style.gridTemplateColumns = `repeat(${sizeOfGrid}, 1fr)`;
    // Creates rows
    for (let i = 0; i < sizeOfGrid; i++) {
        // Creates columns
        for (let i = 0; i < sizeOfGrid; i++) {
            createSquare(i);
        } 
    }
}

function clearGrid() {
    while (squares.length > 0) {
        squares[0].parentNode.removeChild(squares[0]);
    }
}

changeSizeBtn.addEventListener('click', () => {
    let sizeInput = changeSizeTextBox.value;
    if (isNaN(sizeInput)) {
        changeSizeTextBox.value = ''
        return alert('Enter a number'); 
    }
    if (sizeInput < 1 || sizeInput > 64) {
        changeSizeTextBox.value = ''
        return alert('Enter a number between 1 - 64'); 
    }
    clearGrid()
    createGrid(sizeInput)
})

function colorBlackAndWhite() {
    square.style.backgroundColor = rgba(0, 0, 0, 0.8);
}