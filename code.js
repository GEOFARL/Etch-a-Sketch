const numberOfPixelsValue = document.querySelector('#choose-range');
const numberOfPixelsText = document.querySelector('.range');
const colorInput = document.querySelector('#choose-color');
const gameContainer = document.querySelector('.game-container');
const clearButton = document.querySelector('button');



let mousePressed = false;
let currentColor = '#ff0000';

document.addEventListener('mousedown', () => mousePressed = true);
document.addEventListener('mouseup', () => mousePressed = false);

function changeColor(e) {
    if (e.type === 'mouseover' && !mousePressed) return;
    e.target.style.backgroundColor = currentColor;
}


function setUpGame() {
    let numberDivs = Number(numberOfPixelsValue.value);
    let height = window.getComputedStyle(gameContainer).height;
    height = Number(height.slice(0, 3));
    let heightDiv = height / numberDivs;
    for (let i = 0; i < numberDivs ** 2; i++) {
        let newDiv = document.createElement('div');
        newDiv.setAttribute('style', `height: ${heightDiv}px; width: ${heightDiv}px; display: inline-block; margin:0; padding: 0;`);
        newDiv.addEventListener('mouseover', changeColor);
        newDiv.addEventListener('mousedown', changeColor);
        gameContainer.appendChild(newDiv);
    }
}

function changeDimensionValue() {
    numberOfPixelsText.innerText =
        `${numberOfPixelsValue.value} x ${numberOfPixelsValue.value}`;
}

setUpGame();


numberOfPixelsValue.addEventListener('mouseup', () => {
    gameContainer.innerHTML = "";
    changeDimensionValue();
    setUpGame();
});


numberOfPixelsValue.addEventListener('mousemove', () => {
    changeDimensionValue();
});

colorInput.addEventListener('change', () => { currentColor = colorInput.value; });

clearButton.addEventListener('click', () => {
    let divs = Array.from(document.querySelectorAll('.game-container div'))
    for (div of divs) {
        div.style.backgroundColor = 'white';
    }
})