let button = document.getElementById('criar-tarefa');
let newClass = document.getElementsByClassName('newClass');
let myList = document.getElementById('lista-tarefas');
let input = document.getElementById('texto-tarefa');
let selected = document.getElementsByClassName('selected');
let moveUpButton = document.getElementById('mover-cima');
let moveDownButton = document.getElementById('mover-baixo');

function addTarefa() {
  let listItem = document.createElement('li');

  listItem.innerText = input.value;
  listItem.className = 'newClass';
  myList.appendChild(listItem);
  input.value = '';
}

button.addEventListener('click', addTarefa);

function paintTask(event) {
  for (let i = 0; i < newClass.length; i += 1) {
    document.getElementsByClassName('newClass')[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

document.getElementById('lista-tarefas').addEventListener('click', paintTask);

function completTask(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

document.getElementById('lista-tarefas').addEventListener('dblclick', completTask);

function eraser() {
  if (newClass.length > 0) {
    document.getElementById('lista-tarefas').innerHTML = '';
  }
}

document.getElementById('apaga-tudo').addEventListener('click', eraser);

function eraseCompleted() {
  let completed = document.getElementsByClassName('completed');

  while (completed[0]) {
    completed[0].parentElement.removeChild(completed[0]);
  }
}

document.getElementById('remover-finalizados').addEventListener('click', eraseCompleted);

function saver() {
  let saveList = document.getElementById('lista-tarefas').innerHTML;
  let stringfyed = JSON.stringify(saveList);

  localStorage.setItem('saveList', stringfyed);
}

window.onload = function () {
  let storagedList = localStorage.getItem('saveList');
  let listParse = JSON.parse(storagedList);

  myList.innerHTML = listParse;
}

document.getElementById('salvar-tarefas').addEventListener('click', saver);

function positionSearcher() {
  let currentPosition = '';
  for (let i = 0; i < newClass.length; i += 1) {
    if (newClass[i].classList.contains('selected')) {
      currentPosition = i;
      break;
    }
  }
  return currentPosition;
}

function moveUp() {

  if (positionSearcher() > 0 && selected.length > 0) {
    let selectedContent = selected[0].outerHTML;
    let olderSibling = selected[0].previousElementSibling;
    let olderSiblingContent = olderSibling.outerHTML;

    selected[0].outerHTML = olderSiblingContent;
    olderSibling.outerHTML = selectedContent;
  }
}

function moveDown() {

  if (positionSearcher() < newClass.length - 1 && selected.length > 0) {
    let selectedContent = selected[0].outerHTML;
    let newestSibling = selected[0].nextElementSibling;
    let newestSiblingContent = newestSibling.outerHTML;

    selected[0].outerHTML = newestSiblingContent;
    newestSibling.outerHTML = selectedContent;
  }
}


moveUpButton.addEventListener('click', moveUp);
moveDownButton.addEventListener('click', moveDown);

function eraseSelected() {
  while (selected[0]) {
    selected[0].parentElement.removeChild(selected[0]);
  }
}

document.getElementById('remover-selecionado').addEventListener('click', eraseSelected);

//refencias https://github.com/tryber/sd-019-c-project-todo-list/blob/andre-rodrigues-santos-todo-list-project/script.js
