import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createState, requestDataWallt } from '../actions/index';
import api from '../api/currenciesApi';
import ExpencerTable from '../components/expenceTable';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      Valor: '',
      descrição: '',
      Moeda: '',
      MétodoDePagamento: '',
      Categoria: '',
    };
  }

    componentDidMount = async () => {
      const { dispatch } = this.props;
      const myApi = await api();
      dispatch(requestDataWallt(myApi, this.state));
    };

      handleChanger = ({ target }) => {
        this.setState((previusState) => ({
          ...previusState,
          [target.name]: target.value,
        }));
      }

    onClickButtonAddExpense = () => {
      const { dispatch } = this.props;
      dispatch(createState(this.state));
    }

    render() {
      const { email, currencies, expenses } = this.props;
      return (
        <div className="contener-flex-header">

          <header className="contener-header">

            <p
              data-testid="email-field"
            >
              Email(
              { email }
              )
            </p>
            <p data-testid="total-field">
              {
                (expenses.reduce((acc, { exchangeRates, currency, value }) => (
                  Number(acc) + (Number(exchangeRates[currency].ask) * value)), 0))
                  .toFixed(2)
              }
            </p>
            <p
              data-testid="header-currency-field"
            >
              BRL
            </p>
          </header>

          <form className="contener-form">

            <label
              className="contener-labeV"
              htmlFor="input-value"
            >
              Valor
              <input
                data-testid="value-input"
                type="number"
                id="input-value"
                name="Valor"
                onChange={ this.handleChanger }
              />
            </label>

            <label
              className="contener-labeD"
              htmlFor="input-description"
            >
              descrição
              <input
                name="descrição"
                data-testid="description-input"
                type="text"
                id="input-description"
                onChange={ this.handleChanger }
              />
            </label>

            <label
              className="contener-labeC"
              htmlFor="input-currency"
            >

              Moeda
              <select
                name="Moeda"
                data-testid="currency-input"
                id="input-currency"
                onChange={ this.handleChanger }
              >
                {
                  currencies
                    .map((element) => (
                      <option
                        key={ element }
                      >
                        { element }
                      </option>
                    ))
                }

              </select>

            </label>

            <label
              className="contener-labeM"
              htmlFor="input-method"
            >
              Método de pagamento

              <select
                name="MétodoDePagamento"
                data-testid="method-input"
                id="input-method"
                onChange={ this.handleChanger }
              >
                <option>
                  Dinheiro
                </option>

                <option>
                  Cartão de crédito
                </option>

                <option>
                  Cartão de débito
                </option>
              </select>

            </label>

            <label
              className="contener-labeT"
              htmlFor="input-tag"
            >
              Categoria
              <select
                name="Categoria"
                data-testid="tag-input"
                id="input-tag"
                onChange={ this.handleChanger }
              >
                <option>
                  Alimentação
                </option>

                <option>
                  Lazer
                </option>

                <option>
                  Trabalho
                </option>

                <option>
                  Transporte
                </option>

                <option>
                  Saúde
                </option>
              </select>

            </label>
            <button
              onClick={ this.onClickButtonAddExpense }
              className="inputButtonDesp"
              type="button"
            >
              Adicionar despesa
            </button>

          </form>
          <ExpencerTable />
        </div>
      );
    }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
  expensesSTate: state.wallet.expensesSTate,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  email: PropTypes.string,
}.isRequired;
export default connect(mapStateToProps)(Wallet);
