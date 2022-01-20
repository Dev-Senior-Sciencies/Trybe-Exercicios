const colorPallet = document.querySelectorAll('#color-palette div');
const grid = document.querySelector('#pixel-board');
const pixels = document.getElementsByClassName('pixel');
const clearBoard = document.getElementById('clear-board');
const boardSize = document.getElementById('board-size');
const vqvButton = document.getElementById('generate-board');
const generatingColor = document.getElementById('generate-color');
let disignColorB = document.getElementById('color2');
let disignColorC = document.getElementById('color3');
let disignColorD = document.getElementById('color4');
let colorRgb = [];


function pickColor(event) {
  for (let index = 0; index < colorPallet.length; index += 1) {
    if (colorPallet[index].className === 'color selected') {
      colorPallet[index].className = 'color';
      break;
    }
  }
  event.target.className = 'color selected';

}

for (let i = 0; i < colorPallet.length; i += 1) {
  colorPallet[i].addEventListener('click', pickColor);
}
function painting(event) {
  event.target.style.backgroundColor = window.getComputedStyle(document.getElementsByClassName('color selected')[0]).getPropertyValue('background-color');
}

for (let i = 0; i < pixels.length; i += 1) {
  grid.addEventListener('click', painting);
}
function clear() {

  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

clearBoard.addEventListener('click', clear);


function intervalCheck() {
  if (boardSize.value <= 5 && boardSize.value !== '') {
    boardSize.value = 5;
  } else if (boardSize.value >= 50) {
    boardSize.value = 50;
  }
}

function eraser(event) {
  event.target.style.backgroundColor = 'white';
}

for (let i = 0; i < pixels.length; i += 1) {
  grid.addEventListener('dblclick', eraser);
}

function createBoard() {
  if (boardSize.value === '') {
    alert('Board inválido!')
  }

  grid.innerHTML = '';

  intervalCheck();

  grid.style.width = 42 * boardSize.value + 'px';
  for (let index = 0; index < boardSize.value * boardSize.value; index += 1) {
    let pixel = document.createElement('div');
    pixel.className = 'pixel';
    grid.appendChild(pixel);
  }
}

vqvButton.addEventListener('click', createBoard);

function randomNumbers() {
  let rgb = []
  for (let i = 0; i < 3; i += 1) {
    rgb.push(Math.floor(Math.random() * 255) + 1)
  }

  return 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')'
}

function randomColors() {
  for (let index = 0; index < 3; index += 1) {
    let color = randomNumbers();

    if (index === 0) {
      colorRgb.push(color);
    }
    if (index === 1 && color !== colorRgb[0]) {
      colorRgb.push(color)
    } else if (index === 1) {
      colorRgb.push(randomNumbers())
    }
    if (index === 2 && color !== colorRgb[0] && color !== colorRgb[1]) {
      colorRgb.push(color)
    } else if (index === 2) {
      colorRgb.push(randomNumbers())
    }
  }
}

function palletGenerator() {
  colorRgb = [];

  randomColors();

  disignColorB.style.backgroundColor = colorRgb[0]
  disignColorC.style.backgroundColor = colorRgb[1]
  disignColorD.style.backgroundColor = colorRgb[2]
}
generatingColor.addEventListener('click', palletGenerator)

window.onload = palletGenerator

//Referências: https://github.com/tryber/sd-019-c-project-pixels-art/blob/andre-rodrigues-santos-project-pixels-art/script.js
