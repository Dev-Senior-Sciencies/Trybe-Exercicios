const data = require('../data/zoo_data');

const { species } = data;

const objectQTDA = () => {
  const animais = species.map((element) => element.name);
  const qTDSpecies = {};
  const qTD = species.map((element) => element.residents.length);
  animais.forEach((element, i) => {
    qTDSpecies[element] = qTD[i];
  });
  return qTDSpecies;
};

const pegaAnimalSexo = (obj) => {
  const animalType = data.species.find((element) => element.name === obj.specie);
  const animalSexo = animalType.residents.filter((element) => element.sex === obj.sex).length;

  return animalSexo;
};

const pegaAnimalEspecifico = (obj) => {
  const animalType = data.species.find((element) => element.name === obj.specie).residents.length;
  return animalType;
};

function countAnimals(animal) {
  // seu código aqui

  if (typeof animal === 'object' && Object.keys(animal).length === 1) {
    return pegaAnimalEspecifico(animal);
  }
  if (typeof animal === 'object' && Object.keys(animal).length === 2) {
    return pegaAnimalSexo(animal);
  }
  return objectQTDA();
}

module.exports = countAnimals;
