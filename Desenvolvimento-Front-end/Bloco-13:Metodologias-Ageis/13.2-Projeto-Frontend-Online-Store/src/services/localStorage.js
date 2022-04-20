export const getSavedCartItems = () => JSON.parse(localStorage.getItem('cartItems'));
export const getSavedCounter = () => JSON.parse(localStorage.getItem('counter'));

export const saveCartItems = (parameter) => {
  localStorage.setItem('cartItems', JSON.stringify(parameter));
};

export const saveCounter = (parameter) => {
  localStorage.setItem('counter', JSON.stringify(parameter));
};
