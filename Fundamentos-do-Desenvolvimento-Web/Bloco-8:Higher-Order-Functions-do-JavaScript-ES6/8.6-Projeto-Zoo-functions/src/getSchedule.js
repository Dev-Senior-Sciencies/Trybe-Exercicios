const data = require('../data/zoo_data');

const { hours } = data;
const plusDays = Object.keys(hours);
const hDays = Object.values(hours);
const animals = ['lions', 'tigers', 'bears', 'penguins', 'otters', 'frogs', 'snakes', 'elephants'];
const info = ['officeHour', 'exhibition'];
const { species } = data;

const calendary = () => {
  const object = {};

  plusDays.forEach((element) => {
    object[element] = { [info[0]]: '', [info[1]]: '' };
  });

  return object;
};

/* console.log(calendary()); */

const hoursDays = () => {
  const calendar = calendary();

  plusDays.forEach((element, index) => {
    calendar[element][info[0]] = `Open from ${hDays[index].open}am until ${hDays[index].close}pm`;
  });

  return calendar;
};

/* console.log(hoursDays()); */

const animais = () => {
  const calendar = hoursDays();

  plusDays.forEach((element) => {
    calendar[element][info[1]] = species.filter((casa) => casa.availability.includes(element))
      .map((elementss) => elementss.name);
  });

  calendar.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };

  return calendar;
};

/* console.log(animais()); */

const unicDay = (day) => {
  const schedule = animais();

  const ofDay = { [day]: schedule[day] };

  return ofDay;
};

/* console.log(unicDay('Friday')); */

const unicAnimal = (animal) => species.find((element) =>
  element.name.includes(animal)).availability;

/* console.log(unicAnimal('lions')); */

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (animals.includes(scheduleTarget)) return unicAnimal(scheduleTarget);

  if (plusDays.includes(scheduleTarget)) return unicDay(scheduleTarget);

  return animais();
}
/* console.log(getSchedule('')); */

module.exports = getSchedule;
