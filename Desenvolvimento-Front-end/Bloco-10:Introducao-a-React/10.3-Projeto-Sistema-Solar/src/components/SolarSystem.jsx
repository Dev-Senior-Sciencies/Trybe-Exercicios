import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    const listOfPlanet = planets.map(({ name, image }) => (

      <PlanetCard key={ name } planetName={ name } planetImage={ image } />

    ));
    return (
      <div
        className="container-div-solarsytems"
        data-testid="solar-system"
      >
        <Title headline="Planetas" />
        <li>{ listOfPlanet }</li>
      </div>
    );
  }
}

export default SolarSystem;
