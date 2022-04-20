import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import RCard from './components/RCard';
import Search from './components/Search';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.valid = this.valid.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.resetStates = this.resetStates.bind(this);
    this.superTrunfo = this.superTrunfo.bind(this);
    this.cardRemov = this.cardRemov.bind(this);
    this.filterHandle = this.filterHandle.bind(this);
    this.filterHandlerare = this.filterHandlerare.bind(this);
    this.filterHandleSuperTrunf = this.filterHandleSuperTrunf.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      saveCard: [],
    };
  }

  onSaveButtonClick(e) {
    e.preventDefault();
    const {
      cardName,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardDescription,
      hasTrunfo,

    } = this.state;
    const card = {
      cardName,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      cardDescription,
    };
    this.setState((state) => ({ saveCard: [...state.saveCard, card] }),
      () => { this.resetStates(); });
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    },
    () => this.valid());
  }

  cardRemov({ target }) {
    const { saveCard } = this.state;
    const newCardSavArray = saveCard.filter((card) => card.cardName !== target.id);
    const checkCardTrunfo = newCardSavArray.some((card) => card.cardTrunfo);
    this.setState({ saveCard: newCardSavArray, hasTrunfo: checkCardTrunfo });
  }

  valid() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
    } = this.state;
    const att1 = +cardAttr1;
    const att2 = +cardAttr2;
    const att3 = +cardAttr3;
    const attmax = 90;
    const maxattplus = 210;
    const limit = (att1 <= attmax && att2 <= attmax && att3 <= attmax);
    const minAtt = (att1 >= 0 && att2 >= 0 && att3 >= 0);
    const slotVazio = (cardName && cardDescription && cardImage);
    const plusAtts = (att1 + att2 + att3 <= maxattplus);

    if (slotVazio && limit && minAtt && plusAtts) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  resetStates() {
    const verifica = this.superTrunfo();
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      hasTrunfo: verifica,
    });
  }

  superTrunfo() {
    const { saveCard } = this.state;
    const verifica = saveCard.some((element) => element.cardTrunfo === true);
    return verifica;
  }

  filterHandle(e) {
    this.setState({ namefilter: e.target.value });
  }

  filterHandlerare(e) {
    if (e.target.value === 'todas') {
      e.target.value = '';
    }
    this.setState({ rarefilter: e.target.value });
  }

  filterHandleSuperTrunf({ target }) {
    const { checked } = target;
    value = target;
    if (type === 'checkbox') {
      value = checked;
    }
    this.setState({ superTruf: e.target.checked });
  }

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
      isSaveButtonDisabled,
      saveCard,
      namefilter,
      rarefilter,
      superTruf,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <section className="form-render">
          <Form
            cardName={ cardName }
            onInputChange={ this.onInputChange }
            cardDescription={ cardDescription }
            filterHandle={ this.filterHandle }
            filterHandlerare={ this.filterHandlerare }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.onSaveButtonClick }
            hasTrunfo={ this.superTrunfo() }
          />
        </section>
        <section className="card-prev">
          <Card
            cardName={ cardName }
            onInputChange={ this.onInputChange }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </section>
        <RCard
          saveCard={ [...saveCard] }
          cardRemov={ this.cardRemov }
          namefilter={ namefilter }
          rarefilter={ rarefilter }
          superTruf={ superTruf }
        />
        <Search
          filterHandle={ this.filterHandle }
          filterHandlerare={ this.filterHandlerare }
          filterHandleSuperTrunf={ this.filterHandleSuperTrunf }
        />
      </div>
    );
  }
}

export default App;
