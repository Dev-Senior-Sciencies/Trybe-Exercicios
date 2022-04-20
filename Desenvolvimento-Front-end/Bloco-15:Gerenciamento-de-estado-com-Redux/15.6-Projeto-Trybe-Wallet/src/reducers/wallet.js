import { DELETE_EXPENSES } from '../actions';

export const REQUEST_DATA_WALLET = 'REQUEST_DATA_WALLET';
export const REQUEST_EXPENSES = 'REQUEST_EXPENSES';
export const REQUEST_EXPENSES_STATE = 'REQUEST_EXPENSES_STATE';

const INICIAL_STATE = {
  currencies: [],
  expensesSTate: {},
  expenses: [],
  ask: 0,
};

function wallet(state = INICIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_DATA_WALLET:
    return {
      ...state,
      currencies: action.currencies,
    };
  case REQUEST_EXPENSES:
    return {
      ...state,
      expenses: [...action.expenses],
    };
  case REQUEST_EXPENSES_STATE:
    return {
      ...state,
      expensesSTate: action.expensesSTate,
    };
  case DELETE_EXPENSES:
    return { ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.payload) };
  default:
    return state;
  }
}

export default wallet;
