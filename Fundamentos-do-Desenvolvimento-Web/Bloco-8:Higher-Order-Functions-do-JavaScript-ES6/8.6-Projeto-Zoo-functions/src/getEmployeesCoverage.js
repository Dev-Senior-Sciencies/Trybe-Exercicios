const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const nameSpecies = (idspecies) => species.find((element) => element.id === idspecies).name;
/* console.log(localemployees('e8481c1d-42ea-4610-8e11-1752cfc05a46')); */

const localSpecies = (idspecies) => species.find((element) => element.id === idspecies).location;
/* console.log(localSpecies('e8481c1d-42ea-4610-8e11-1752cfc05a46')); */

const getEmployeess = (employeese) => employees.find((element) => {
  if (element.id === employeese.id) return true;
  if (element.firstName === employeese.name) return true;
  if (element.lastName === employeese.name) return true;
  return false;
});

/* console.log(getEmployeess({ name: 'Sharonda' })); */

const dadosReturn = (objEmployee) => ({
  id: objEmployee.id,
  fullName: `${objEmployee.firstName} ${objEmployee.lastName}`,
  locations: objEmployee.responsibleFor.map((id) => localSpecies(id)),
  species: objEmployee.responsibleFor.map((id) => nameSpecies(id)),
});

function getEmployeesCoverage(employee) {
  // seu código aqui
  if (!employee) {
    return employees.map((element) => dadosReturn(element));
  }
  const helpEmployess = getEmployeess(employee);

  if (!helpEmployess) {
    throw new Error('Informações inválidas');
  }
  const get = dadosReturn(helpEmployess);
  return get;
}
/* console.log(getEmployeesCoverage()); */
module.exports = getEmployeesCoverage;
