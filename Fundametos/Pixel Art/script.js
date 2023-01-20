const black = document.getElementById('btn-black');
const blue = document.getElementById('btn-blue');
const green = document.getElementById('btn-green');
const red = document.getElementById('btn-red');
let pixel = document.getElementsByClassName('pixel');
const pixelBoard = document.getElementById('pixel-board');
const clearButton = document.getElementById('clear');
const inputNumber = document.getElementById('input-number');
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
  corAtual = 'black';
  console.log(corAtual);
};
blue.onclick = () => {
  corAtual = 'blue';
  console.log(corAtual);
};
green.onclick = () => {
  corAtual = 'green';
  console.log(corAtual);
};
red.onclick = () => {
  corAtual = 'red';
  console.log(corAtual);
};
function pintaPixel(e) {
  console.log(e);
  e.target.style.backgroundColor = corAtual;
}
for (let index = 0; index < pixel.length; index += 1) {
  pixel[index].addEventListener('click', pintaPixel);
}
function tableClear() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', tableClear);

function changeTable(e) {
  const countPixel = e.target.value;
  if (parseInt(countPixel, 10) > 100) {
    alert('Ultrapassou o limete de pixels');
    return;
  }
  redefinePixel();
  console.log(pixel.length);
  for (let index = pixel.length - 1; index >= 0; index -= 1) {
    pixel[index].remove();
  }
  for (let index = 0; index < parseInt(countPixel, 10) * parseInt(countPixel, 10); index += 1) {
    const pixelAtual = document.createElement('button');
    pixelAtual.classList.add('pixel');
    pixelBoard.appendChild(pixelAtual);
    pixelBoard.style.gridTemplateColumns = `repeat(${countPixel}, 40px)`;
  }
}
inputNumber.addEventListener('change', changeTable);
