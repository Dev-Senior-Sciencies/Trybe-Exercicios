const data = require('../data/zoo_data');

const animalNome = data.species;
function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animals = animalNome.find((element) => element.name === animal);
  return animals.residents.every((element) => element.age >= age);
}

getAnimalsOlderThan('otters');
module.exports = getAnimalsOlderThan;
