import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const mission = missions.map(({ name, year, country, destination }) => (
      <MissionCard
        key={ name }
        name={ name }
        year={ year }
        country={ country }
        destination={ destination }
      />
    ));

    return (
      <div className="container-div-headline">
        <div
          className="container-headline"
          data-testid="missions"
        >
          <div className="container-title">
            <Title headline="Missões" />
          </div>
          <div className="container-misi">
            { mission }
          </div>

        </div>
        <footer className="container-footer">
          <h3>Todos os Direitos Reservados @SanioDev</h3>
        </footer>
      </div>
    );
  }
}
export default Missions;
