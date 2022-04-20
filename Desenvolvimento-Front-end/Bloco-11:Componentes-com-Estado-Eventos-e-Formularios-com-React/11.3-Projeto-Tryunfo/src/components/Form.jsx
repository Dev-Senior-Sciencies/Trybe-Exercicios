import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      cardDescription,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div className="container-div-form">
        <form className="container-form">

          <label
            className="label"
            htmlFor="cardName"
          >
            Nome
            <input
              id="cardName"
              onChange={ onInputChange }
              value={ cardName }
              name="cardName"
              type="text"
              data-testid="name-input"
            />
          </label>

          <label
            className="label"
            htmlFor="cardAttr1"
          >
            Poder
            <input
              id="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              name="cardAttr1"
              type="number"
              data-testid="attr1-input"
            />
          </label>

          <label
            className="label"
            htmlFor="cardAttr2"
          >
            Dano
            <input
              id="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              name="cardAttr2"
              type="number"
              data-testid="attr2-input"
            />
          </label>

          <label
            className="label"
            htmlFor="cardAttr3"
          >
            Habilidade
            <input
              id="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              name="cardAttr3"
              type="number"
              data-testid="attr3-input"
            />
          </label>

          <label
            className="label"
            htmlFor="cardImage"
          >
            Imagem
            <input
              id="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
              name="cardImage"
              type="text"
              data-testid="image-input"
            />
          </label>

          <label
            className="label"
            htmlFor="cardRare"
          >
            Raridade
            <select
              id="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
              name="cardRare"
              data-testid="rare-input"
            >
              <option
                value="normal"
              >
                normal

              </option>
              <option
                value="raro"
              >
                raro

              </option>
              <option
                value="muito raro"
              >
                muito raro

              </option>
            </select>
          </label>
          {
            !hasTrunfo ? (
              <label
                className="label"
                htmlFor="cardTrunfo"
              >
                Super Trunfo
                <input
                  id="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                  name="cardTrunfo"
                  type="checkbox"
                  data-testid="trunfo-input"
                />
              </label>
            ) : (<h2>Você já tem um Super Trunfo em seu baralho</h2>
            )
          }
          <label
            className="label"
            htmlFor="cardDescription"
          >
            Descrição
            <textarea
              id="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
              name="cardDescription"
              type="textarea"
              data-testid="description-input"
            />
          </label>

          <button
            className="save-button"
            disabled={ this.isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            type="submit"
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}
Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,

};

export default Form;
