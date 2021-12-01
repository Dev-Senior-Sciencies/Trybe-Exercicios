//Duas formas de resolver o exercício
function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split('');
    fimPalavra = fimPalavra.split('');
    controle = true;
    for (let index = 0; index < fimPalavra.length; index += 1) {
      if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
        controle = false;
      }
    }
    return controle;
  }
  
  function verificaFimPalavra(palavra, fimPalavra) {
    let inversoPalavra = palavra.split('').reverse().join('');
    let inversoFimPalavra = fimPalavra.split('').reverse().join('');
    let result;
  
    for (let index = 0; index < inversoFimPalavra.length; index += 1) {
      if (inversoPalavra[index] !== inversoFimPalavra[index]) {
        result = false;
        break;
      } else {
        result = true;
      }
    }
    
    return result;
  }
  
  console.log(verificaFimPalavra('trybe', 'be')); //true
  console.log(verificaFimPalavra('joaofernando', 'fernan')); //false