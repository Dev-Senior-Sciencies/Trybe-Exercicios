/* eslint-disable no-undef */
const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  // seu código aqui
  const listOfManagers = [];
  employees.forEach((element) => element.managers.forEach((ids) => listOfManagers.push(ids)));
  return listOfManagers.some((element) => element === id);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  const listPeopleResponsibleFor = [];
  if (isManager(managerId) === true) {
    employees.forEach((element) => {
      if (element.managers.includes(managerId) === true) {
        listPeopleResponsibleFor.push(`${element.firstName} ${element.lastName}`);
      }
    });
  } else {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return listPeopleResponsibleFor;
}

getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992');
module.exports = { isManager, getRelatedEmployees };
