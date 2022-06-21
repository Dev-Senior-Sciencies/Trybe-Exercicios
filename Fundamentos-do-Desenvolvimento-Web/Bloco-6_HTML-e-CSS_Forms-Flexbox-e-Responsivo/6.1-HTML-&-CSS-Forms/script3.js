const estado = document.querySelector("#estado");
const enviar = document.querySelector("#enviar");
const dadosPessoais = document.querySelector("#dados-inseridos");
const nome = document.querySelector("#input-nome");
const email = document.querySelector("#input-email");
const cidade = document.querySelector("#input-cidade");
const endereco = document.querySelector("#input-endereco");
const cpf = document.querySelector("#input-cpf");
const casa = document.querySelector("#casa");
const apartamento = document.querySelector("#ap");
const resumiToCuricle = document.querySelector("#resumiToCuricle");
const cargo = document.querySelector("#input-cargo");
const descricaoDoCargo = document.querySelector("#input-descrição-cargo");
const data = document.querySelector("#input-data");
const dadosInseridos = document.querySelector("#dados-inseridos");


function getStop(event) {
    event.preventDefault();
    dadosInseridos.innerHTML = `${nome.value}  Email:${email.value} cidade:${cidade.value}  Endereço:${endereco.value}  CPF:${cpf.value} Dados:${resumiToCuricle.value}  Cargo:${cargo.value}  Descrinção Do Cargo:${descricaoDoCargo.value}  Data:${data.value}`;
}

enviar.addEventListener('click' , getStop);




