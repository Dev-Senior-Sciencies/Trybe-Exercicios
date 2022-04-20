const saveCartItems = (argument) => localStorage.setItem('cartItems', argument);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
