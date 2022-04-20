import { REQUEST_DATA_USER } from '../reducers/user';
import { REQUEST_DATA_WALLET, REQUEST_EXPENSES, REQUEST_EXPENSES_STATE }
from '../reducers/wallet';

export const DELETE_EXPENSES = 'DELETE_EXPENSES';

export const requestDataUser = (payload) => ({
  type: REQUEST_DATA_USER,
  payload,
});
export const requestDataWallt = (currencies) => ({
  type: REQUEST_DATA_WALLET,
  currencies,
});
export const createExpenses = (expenses) => ({
  type: REQUEST_EXPENSES,
  expenses,
});

export const createState = (expensesSTate) => ({
  type: REQUEST_EXPENSES_STATE,
  expensesSTate,
});

export const deleteExpenses = (payload) => ({
  type: DELETE_EXPENSES,
  payload,
});
