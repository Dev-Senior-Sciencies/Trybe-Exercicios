const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;
function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const idEmployees = employees.find((element) => element.id === id);
  const idAnimal = idEmployees.responsibleFor.find((element) => element[0]);
  const animal = species.filter((element) => element.id === idAnimal);
  const chosenAnimal = animal[0].residents;
  const olderAnimal = chosenAnimal.sort((a, b) => a.age - b.age);
  const getAnimal = olderAnimal[olderAnimal.length - 1];
  return Object.values(getAnimal);
}
/* console.log(getOldestFromFirstSpecies('c1f50212-35a6-4ecd-8223-f835538526c2')); */
module.exports = getOldestFromFirstSpecies;
