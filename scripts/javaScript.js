const etchArea = document.querySelector('.etchArea');
const square = document.querySelector('.square');
const squares = document.getElementsByClassName('square');
const changeSizeTextBox = document.querySelector('.changeSizeTextBox');
const changeSizeBtn = document.querySelector('.changeSizeBtn');
const resetBtn = document.querySelector('.resetBtn');
const defaultSize = 50


// TODO Add in types of etch colors

window.onload = createGrid(defaultSize)

function createSquare(x) {
    let squareDIV = document.createElement('div');
    squareDIV.classList.add(`square`);
    squareDIV.addEventListener('mouseover', e => e.target.classList.add('grey-color'));
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
    clearGrid();
    createGrid(sizeInput);
})

resetBtn.addEventListener('click', () => {
    clearGrid() 
    changeSizeTextBox.value = ''
    createGrid(defaultSize)
})