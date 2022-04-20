import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default class RCard extends React.Component {
  tesfunc = () => {
    const { saveCard, namefilter, rarefilter, superTruf } = this.props;
    if (namefilter) {
      return saveCard.filter((element) => element.cardName.includes(namefilter));
    } if (rarefilter) {
      return saveCard.filter((element) => element.cardRare.startsWith(rarefilter, 0));
    } if (superTruf) {
      console.log(saveCard.filter((element) => element.cardTrunfo.includes(superTruf)));
    } return saveCard;
  }

  render() {
    const { cardRemov } = this.props;
    return (
      <div className="contener-card">
        {this.tesfunc().map((element, indice) => (
          <div className="cardscree" key={ indice }>
            <Card
              cardName={ element.cardName }
              cardDescription={ element.cardDescription }
              cardAttr1={ element.cardAttr1 }
              cardAttr2={ element.cardAttr2 }
              cardAttr3={ element.cardAttr3 }
              cardImage={ element.cardImage }
              cardRare={ element.cardRare }
              cardTrunfo={ element.cardTrunfo }
              cardRemov={ this.cardRemov }
            />
            <button
              id={ element.cardName }
              className="cardDell"
              type="button"
              onClick={ cardRemov }
              data-testid="delete-button"
            >
              Excluir
            </button>
          </div>
        ))}
      </div>

    );
  }
}

RCard.propTypes = {
  saveCard: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
