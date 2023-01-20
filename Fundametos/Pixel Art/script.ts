
let black = document.getElementById('btn-black') as HTMLButtonElement;
let blue = document.getElementById('btn-blue') as HTMLButtonElement;
let green = document.getElementById('btn-green') as HTMLButtonElement;
let red = document.getElementById('btn-red') as HTMLButtonElement;
let pixel = document.getElementsByClassName('pixel') as HTMLCollectionOf<HTMLButtonElement>;
let pixelBoard = document.getElementById('pixel-board') as HTMLElement;
let clearButton = document.getElementById('clear') as HTMLButtonElement;
let inputNumber = document.getElementById('input-number') as HTMLInputElement;
let corAtual:string;

function redefinePixel(){
  pixel = document.getElementsByClassName('pixel') as HTMLCollectionOf<HTMLButtonElement>;
}

function getPreto() {
  corAtual = 'black';
  console.log(corAtual);
}

black.addEventListener('click', getPreto)

black.onclick = () => {
  corAtual = "black";
  console.log(corAtual);
}

blue.onclick = () => {
  corAtual = "blue";
  console.log(corAtual);
}

green.onclick = () => {
  corAtual = "green";
  console.log(corAtual);
}

red.onclick = () => {
  corAtual = "red";
  console.log(corAtual);
}


function pintaPixel(e:Event){
  console.log(e);
  (e.target as HTMLElement).style.backgroundColor = corAtual;
}


const watchClick = () => {
  redefinePixel()
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', pintaPixel);
  }
};

function tableClear(){
  for (let index = 0; index < pixel.length; index++) {
    pixel[index].style.backgroundColor = "white";
    
  }
}

watchClick()

clearButton.addEventListener('click', tableClear);

inputNumber.addEventListener('change', changeTable);

function changeTable(e:Event){
  let countPixel =  (e.target as HTMLInputElement).value;
  if(parseInt(countPixel)  > 100){
    alert('Ultrapassou o limete de pixels');
    return;
  }
  redefinePixel();
  console.log(pixel.length);

  for (let index = pixel.length-1; index >= 0; index--) {
    
    pixel[index].remove();
  }

  for (let index = 0; index < parseInt(countPixel) * parseInt(countPixel); index++) {
    let pixelAtual = document.createElement('button');
    pixelAtual.classList.add('pixel');
    pixelBoard.appendChild(pixelAtual);

    pixelBoard.style.gridTemplateColumns = `repeat(${countPixel}, 40px)`;
  }

  watchClick()

}






