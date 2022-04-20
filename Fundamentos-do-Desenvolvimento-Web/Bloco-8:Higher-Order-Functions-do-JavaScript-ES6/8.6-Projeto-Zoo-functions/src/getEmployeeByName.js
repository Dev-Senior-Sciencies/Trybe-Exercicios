const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui

  if (!employeeName) {
    return {};
  }

  const nomeFuncionario = employees.find((element) =>
    element.firstName === employeeName || element.lastName === employeeName);
  return nomeFuncionario;
}

module.exports = getEmployeeByName;
