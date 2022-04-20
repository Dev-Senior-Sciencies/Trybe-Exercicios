import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpenses } from '../actions';

class ExpencerTable extends React.Component {
  constructor() {
    super();
    this.state = {
      Categoria: '',
      Moeda: '',
      MétodoDePagamento: '',
      Valor: '',
      descrição: '',
    };
  }

 allConvert = (money, baseMoney) => parseFloat(money * baseMoney).toFixed(2)

  handleChanger = ({ target }) => {
    this.setState((previusState) => ({
      ...previusState,
      [target.name]: target.value,
    }));
  }

  render() {
    const { expenses, dispatch } = this.props;
    return (

      <table>
        <thead>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </thead>
        <tbody>
          {expenses.map(({
            index,
            id,
            description,
            tag,
            method,
            value,
            exchangeRates,
            currency }) => {
            const exchange = Number(exchangeRates[currency].ask);

            return (
              <tr key={ index }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>{Number(value).toFixed(2)}</td>
                <td>{exchangeRates[currency].name}</td>
                <td>{exchange.toFixed(2)}</td>
                <td>{(exchange * value).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button
                    data-testid="edit-btn"
                    type="button"
                  >
                    Editar
                  </button>
                  <button
                    data-testid="delete-btn"
                    type="button"
                    onClick={ () => dispatch(deleteExpenses(id)) }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

ExpencerTable.propTypes = {
  expenses: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
  expensesSTate: state.wallet.expensesSTate,
});

export default connect(mapStateToProps)(ExpencerTable);
