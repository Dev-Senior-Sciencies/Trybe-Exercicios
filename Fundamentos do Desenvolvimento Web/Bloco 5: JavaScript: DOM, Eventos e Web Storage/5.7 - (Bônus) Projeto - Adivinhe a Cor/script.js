function generateColors() {
  answerArea = document.getElementById('answer')
  let rgbColor = []
  theColors = document.getElementsByClassName('the-colors')[0]
  theColors.innerHTML = ''
  for (let i=0;i<6;i+=1) {
      let genColor =  Math.floor(Math.random() * 256)
      let genColor2 = Math.floor(Math.random() * 256)
      let genColor3 = Math.floor(Math.random() * 256)
      rgbColor.push(`(${genColor}, ${genColor2}, ${genColor3})`)
      colorBall = document.createElement('div')
      theColors.appendChild(colorBall)
      colorBall.className = 'ball'
      colorBall.style.backgroundColor = `rgb${rgbColor[i]}`
  }
  const random = Math.floor(Math.random() * 6)
  const guessRgbColor = document.getElementById('rgb-color')
  currentColor = rgbColor[random]
  guessRgbColor.innerText = currentColor
  answerArea.innerText = 'Escolha uma cor:'
  generatedColors = document.getElementsByClassName('the-colors')[0].children
}
generateColors()

const scoreSection = document.getElementById('score')
let scorePoints = 0
function checkAnswer(e) {
  const correctColor = `rgb${currentColor}`
  let selectedColor = getComputedStyle(e.target).backgroundColor
  if (selectedColor === correctColor) {
      answerArea.innerText = 'Acertou!'
      scorePoints+=3
      scoreSection.innerText = `Placar: ${scorePoints} pontos`
  } else {
      answerArea.innerText = 'Errou! Tente novamente!'
  }
}

function checkClick() {
  for (let colors of generatedColors) {
      colors.addEventListener('click', checkAnswer)
  }
}
checkClick()


const restartBtn = document.getElementById('reset-game')
function reset() {
  generateColors()
  checkClick()
}
restartBtn.addEventListener('click', reset)

//referencia:https://github.com/tryber/sd-019-c-project-color-guess/tree/allan-carvalho-project-color-guess
