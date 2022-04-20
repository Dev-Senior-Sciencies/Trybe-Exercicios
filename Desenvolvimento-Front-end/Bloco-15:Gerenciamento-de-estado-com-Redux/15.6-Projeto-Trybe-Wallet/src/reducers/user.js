export const REQUEST_DATA_USER = 'REQUEST_DATA_USER';

const INICIAL_STATE = {
  email: '',
};

function user(state = INICIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_DATA_USER:
    return {
      ...state,
      email: action.payload.email,
    };
  default:
    return state;
  }
}

export default user;
