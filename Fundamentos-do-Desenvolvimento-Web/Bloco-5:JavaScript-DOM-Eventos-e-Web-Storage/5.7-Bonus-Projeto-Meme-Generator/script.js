const input = document.querySelector("#text-input");
const divContenertext = document.querySelector("#meme-text");
const contenerMeme = document.querySelector("#meme-image-container");
let img = document.querySelector("#meme-image");
const buttonIMG = document.querySelector("#meme-insert");
const botoes = document.getElementsByClassName('botao');

// requisito 1
input.addEventListener('input' , function(){
  let textEntrada = input.value;
  divContenertext.innerText = textEntrada;
  });

// requisito 2
buttonIMG.addEventListener('input' , function(){
  let imgEntrada = URL.createObjectURL(buttonIMG.files[0]);
  img.src = imgEntrada;
});

// requisito 6
for (let index = 0; index < botoes.length; index += 1) {
  botoes[index].addEventListener('click', trocaBorda)
}
function trocaBorda(event) {
  for (let index = 0; index < botoes.length; index += 1) {
      let click = event.target.id;
      contenerMeme.className = "";
      contenerMeme.classList.add(click);
  }
}

// requisito 7
miniaturas.addEventListener('click', memeDefault)

function memeDefault(event) {
  if (event.target != event.currentTarget) {
  let src = event.target.getAttribute('src')
  img.src = src
}

};

//reference: https://github.com/tryber/sd-019-c-project-meme-generator/tree/emanuel-calado-meme-generator-projectgit

///// 2x  ultimate for (let index = 0; index < botoes.length; index += 1) {} reference's
