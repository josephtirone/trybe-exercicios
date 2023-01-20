"use strict";
let black = document.getElementById('btn-black');
let blue = document.getElementById('btn-blue');
let green = document.getElementById('btn-green');
let red = document.getElementById('btn-red');
let pixel = document.getElementsByClassName('pixel');
let pixelBoard = document.getElementById('pixel-board');
let clearButton = document.getElementById('clear');
let inputNumber = document.getElementById('input-number');
let corAtual;
function redefinePixel() {
    pixel = document.getElementsByClassName('pixel');
}
function getPreto() {
    corAtual = 'black';
    console.log(corAtual);
}
black.addEventListener('click', getPreto);
black.onclick = () => {
    corAtual = "black";
    console.log(corAtual);
};
blue.onclick = () => {
    corAtual = "blue";
    console.log(corAtual);
};
green.onclick = () => {
    corAtual = "green";
    console.log(corAtual);
};
red.onclick = () => {
    corAtual = "red";
    console.log(corAtual);
};
function pintaPixel(e) {
    console.log(e);
    e.target.style.backgroundColor = corAtual;
}
const watchClick = () => {
    redefinePixel();
    for (let index = 0; index < pixel.length; index += 1) {
        pixel[index].addEventListener('click', pintaPixel);
    }
};
function tableClear() {
    for (let index = 0; index < pixel.length; index++) {
        pixel[index].style.backgroundColor = "white";
    }
}
watchClick();
clearButton.addEventListener('click', tableClear);
inputNumber.addEventListener('change', changeTable);
function changeTable(e) {
    let countPixel = e.target.value;
    if (parseInt(countPixel) > 100) {
        alert('Ultrapassou o limete de pixels');
        return;
    }
    redefinePixel();
    console.log(pixel.length);
    for (let index = pixel.length - 1; index >= 0; index--) {
        pixel[index].remove();
    }
    for (let index = 0; index < parseInt(countPixel) * parseInt(countPixel); index++) {
        let pixelAtual = document.createElement('button');
        pixelAtual.classList.add('pixel');
        pixelBoard.appendChild(pixelAtual);
        pixelBoard.style.gridTemplateColumns = `repeat(${countPixel}, 40px)`;
    }
    watchClick();
}
