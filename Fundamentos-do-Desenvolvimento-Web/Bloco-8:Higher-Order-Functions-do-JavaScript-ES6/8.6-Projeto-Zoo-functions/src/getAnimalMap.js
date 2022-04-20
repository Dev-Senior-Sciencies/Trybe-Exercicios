const data = require('../data/zoo_data');

const { species } = data;
// Funções "callbacks" paralelas
const sortAnimals = (name, sort) => {
  if (sort === true) {
    return name.sort();
  }
  return name;
};

const sortSex = (array, sex) => {
  if (sex === undefined || array.sex === sex) {
    return array.name;
  }
};

const listAnimlsFolder = () => {
  const objectRegions = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach((element) => { objectRegions[element.location].push(element.name); });
  return objectRegions;
};
/* console.log(listAnimlsFolder()); */
// Final funções Callbacks;

function getAnimalMap(options) {
  // seu código aqui
  const objectRegions = { NE: [], NW: [], SE: [], SW: [] };
  if (!options || !options.includeNames) {
    return listAnimlsFolder();
  }
  species.forEach((intemExterno) => {
    let nomeOfaninals = [];
    intemExterno.residents.forEach((intemInterno) => {
      const listOfSex = sortSex(intemInterno, options.sex);
      if (listOfSex !== undefined) {
        nomeOfaninals.push(sortSex(intemInterno, options.sex));
      }
    });
    nomeOfaninals = sortAnimals(nomeOfaninals, options.sorted);
    const nameType = { [intemExterno.name]: nomeOfaninals };
    objectRegions[intemExterno.location].push(nameType);
  });
  return objectRegions;
}

module.exports = getAnimalMap;
