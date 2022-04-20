import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name } = this.props;
    const { year } = this.props;
    const { country } = this.props;
    const { destination } = this.props;
    return (
      <div className="container-missions">
        <div className="missioncards" data-testid="mission-card">
          <div data-testid="mission-name">{ name }</div>
          <div data-testid="mission-year">{ year }</div>
          <div data-testid="mission-country">{ country }</div>
          <div data-testid="mission-destination">{ destination }</div>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
