import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;
    return (
      <div className="main-container">
        <div className="card">
          <h3 data-testid="name-card">{ cardName }</h3>
          <img
            className="image-card"
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
          <div className="main-container-div">

            <p
              className="descricao"
              data-testid="description-card"
            >
              { cardDescription }

            </p>
            <p
              className="poder"
              data-testid="attr1-card"
            >
              { cardAttr1 }

            </p>
            <p
              className="habilidade"
              data-testid="attr2-card"
            >
              { cardAttr2 }

            </p>
            <p
              className="dano"
              data-testid="attr3-card"
            >
              { cardAttr3 }

            </p>
            <h4
              className="raridade"
              data-testid="rare-card"
            >
              { cardRare }

            </h4>
          </div>
          { cardTrunfo ? <h3 data-testid="trunfo-card">Super Trunfo!</h3> : ''}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
