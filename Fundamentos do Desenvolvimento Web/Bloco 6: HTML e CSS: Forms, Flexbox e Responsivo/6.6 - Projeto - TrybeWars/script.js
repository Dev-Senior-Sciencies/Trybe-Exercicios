// Definicao de variaveis necessarias
const btnEntrar = document.getElementById('btnEntrar');
const inpEmail = document.getElementById('email');
const inpSenha = document.getElementById('password');
const checkAgreement = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');
const form = document.getElementById('evaluation-form');
const contador = document.querySelector('#counter');
const textarea = document.querySelector('#textarea');

const materias = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];

// inicializa o agreement nao selecionado e o botao desativado
checkAgreement.checked = false;
btnSubmit.disabled = true;

// Verifica se o login esta correto
function handleEntrar(event) {
  event.preventDefault();
  const email = inpEmail.value;
  const senha = inpSenha.value;
  if (email === 'tryber@teste.com' && senha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

// habilita botao apos selecionar agreement
function handleCheckAgreement() {
  if (checkAgreement.checked) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}

// contador decremental dos caracteres disponiveis no text area
function contadorX() {
  const numeroCharacteres = textarea.value.length;
  const caracterisRestantes = 500 - numeroCharacteres;
  contador.innerHTML = caracterisRestantes;
}

// atribui classe hide aos filhos do form para ocultalos
function ocultaFilhosForm() {
  const divs = document.querySelectorAll('#evaluation-form div');
  for (let index = 0; index < divs.length; index += 1) {
    divs[index].classList.add('hide');
  }
}

// cria elementos do tipo paragrafo para substituir o conteudo do form
function criaElementoTexto(text1, text2) {
  const paragrafo = document.createElement('p');
  paragrafo.innerText = `${text1}: ${text2}`;
  form.appendChild(paragrafo);
}

// cria string com as materias selecionadas
function listaMaterias() {
  let matSelect = '';
  for (let index = 0; index < materias.length; index += 1) {
    const materia = materias[index];
    const assinalado = form.elements[materia].checked;
    if (assinalado && matSelect === '') {
      matSelect = `${materia},`;
    } else if (assinalado) {
      matSelect += ` ${materia},`;
    }
  }
  return matSelect;
}

// Remove conteudo do form e apresenta na forma de texto
// documentação auxiliar utilizada:
// https://developer.mozilla.org/en-US/docs/Web/API/FormData/getAll
// https://developer.mozilla.org/en-US/docs/Web/API/FormDataEntryValue
// https://developer.mozilla.org/en-US/docs/Web/API/FormData/keys
// https://stackoverflow.com/questions/30964568/how-to-get-a-key-value-data-set-from-a-html-form
// https://jakearchibald.com/2021/encoding-data-for-post-requests/#formdata
function handleSubmit(event) {
  event.preventDefault();
  ocultaFilhosForm();
  const textAux = `${form.elements['input-name'].value} ${form.elements['input-lastname'].value}`;
  criaElementoTexto('Nome', textAux);
  criaElementoTexto('Email', `${form.elements['input-email'].value}`);
  criaElementoTexto('Casa', `${form.elements.house.value}`);
  criaElementoTexto('Família', `${form.elements.family.value}`);
  let matlist = listaMaterias();
  if (matlist !== '') {
    matlist = matlist.slice(0, -1);
  }
  criaElementoTexto('Matérias', matlist);
  criaElementoTexto('Avaliação', `${form.elements.rate.value}`);
  criaElementoTexto('Observações', `${form.elements.textarea.value}`);
}

// Adiciona event listeners aos elementos
btnEntrar.addEventListener('click', handleEntrar);
checkAgreement.addEventListener('change', handleCheckAgreement);
textarea.addEventListener('input', contadorX);
btnSubmit.addEventListener('click', handleSubmit);
