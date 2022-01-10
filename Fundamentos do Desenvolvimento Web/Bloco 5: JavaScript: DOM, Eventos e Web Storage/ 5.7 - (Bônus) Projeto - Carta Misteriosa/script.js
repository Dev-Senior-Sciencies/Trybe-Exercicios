//const span = document.getElementsByTagName('span');
const p = document.getElementById('carta-gerada');
let styleGroup = ['newspaper', 'magazine1', 'magazine2'];
let sizeGroup = ['medium', 'big', 'reallybig'];
let rotateGroup = ['rotateleft', 'rotateright'];
let skewGroup = ['skewleft', 'skewright'];
let contador = document.getElementById('carta-contador');
let botao = document.getElementById('criar-carta');


function createElement (){
  remover(p);
  const input = document.getElementById('carta-texto')
  let valueInput = input.value;
  let arrayInput = valueInput.split(' ');
  for (let i = 0; i < arrayInput.length; i +=1) {
   let spanCreat = document.createElement('span')
   spanCreat.innerText = arrayInput[i];
   p.appendChild(spanCreat);
   if (spanCreat.innerText == '') {
     p.innerText = "Por favor, digite o conteúdo da carta.";

   }
   numbeRandom(spanCreat)
  }
  contadorX()

}

function crearBotao(){
  const botao = document.getElementById('criar-carta')
  botao.addEventListener('click', createElement);

}
crearBotao();

function remover (carta){
  while (carta.firstChild) {
    carta.removeChild(carta.lastChild);
   }
}
function numbeRandom(parament){
  parament.classList.add(styleGroup[Math.floor(Math.random() * styleGroup.length)])
  parament.classList.add(sizeGroup[Math.floor(Math.random() * sizeGroup.length)])
  parament.classList.add(rotateGroup[Math.floor(Math.random() * rotateGroup.length)])
  parament.classList.add(skewGroup[Math.floor(Math.random() * skewGroup.length)])

}
p.addEventListener('click' , (event)=>{

  if(event.target.tagName === 'SPAN'){

    event.target.className = '';

    numbeRandom(event.target);
  }
})

function contadorX() {
  let span = document.getElementsByTagName('span').length
  contador.innerHTML = span;
}

