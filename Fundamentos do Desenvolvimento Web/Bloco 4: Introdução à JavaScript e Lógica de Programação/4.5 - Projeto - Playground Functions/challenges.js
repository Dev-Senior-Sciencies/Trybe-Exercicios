function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return 3 * wins + ties;
}

// Desafio 6
function highestCount(array) {
  let maiorNumeroRepetido = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > maiorNumeroRepetido) {
      maiorNumeroRepetido = array[index];
    }
  }
  let cont = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maiorNumeroRepetido) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7 Referencia : thiago https://github.com/tryber/sd-019-c-project-playground-functions/blob/thiago-ferrarese-playground-functions/src/challenges.js
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);

  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
// console.log(catAndMouse(17, 12, 6));

// Desafio 8 Referencia : marcilio https://github.com/tryber/sd-019-c-project-playground-functions/blob/marcilio-lima-playground-functions/src/challenges.js
function fizzBuzz(array) {
  let resul = [];
  for (a in array) {
    if ((array[a] % 3 === 0) && (array[a] % 5 === 0)) {
      resul.push('fizzBuzz');
    }
    else if (array[a] % 3 === 0) {
      resul.push('fizz');
    }
    else if (array[a] % 5 === 0) {
      resul.push('buzz');
    }
    else {
      resul.push('bug!');
    }
  }
  return resul;
}


// Desafio 9  referencias: marcilio https://github.com/tryber/sd-019-c-project-playground-functions/blob/marcilio-lima-playground-functions/src/challenges.js
function encode(string) {
  let encodeString = '';

  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
      case 'a':
        encodeString += 1;
        break;
      case 'e':
        encodeString += 2;
        break;
      case 'i':
        encodeString += 3;
        break;
      case 'o':
        encodeString += 4;
        break;
      case 'u':
        encodeString += 5;
        break;
      default:
        encodeString += string[index];
        break;
    }
  }
  return encodeString;
}

function decode(string) {
  let decodeString = '';

  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
      case '1':
        decodeString += 'a';
        break;
      case '2':
        decodeString += 'e';
        break;
      case '3':
        decodeString += 'i';
        break;
      case '4':
        decodeString += 'o';
        break;
      case '5':
        decodeString += 'u';
        break;
      default:
        decodeString += string[index];
        break;
    }
  }
  return decodeString;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
