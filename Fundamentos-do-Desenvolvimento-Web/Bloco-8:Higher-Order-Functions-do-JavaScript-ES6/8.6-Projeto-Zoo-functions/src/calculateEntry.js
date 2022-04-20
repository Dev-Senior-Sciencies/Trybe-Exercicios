const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter((element) => element.age < 18).length;
  const adult = entrants.filter((element) => element.age >= 18 && element.age < 50).length;
  const senior = entrants.filter((element) => element.age >= 50).length;
  const objctEtario = { child, adult, senior };
  return objctEtario;
}

const calculaPreco = (obj, objPreco) => {
  const totalKids = obj.child * objPreco.child;
  const totaAdult = obj.adult * objPreco.adult;
  const totalOld = obj.senior * objPreco.senior;
  return totalKids + totaAdult + totalOld;
};

function calculateEntry(entrants) {
  // seu código aqui
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const a = countEntrants(entrants);
  return calculaPreco(a, data.prices);
}

module.exports = { calculateEntry, countEntrants };
