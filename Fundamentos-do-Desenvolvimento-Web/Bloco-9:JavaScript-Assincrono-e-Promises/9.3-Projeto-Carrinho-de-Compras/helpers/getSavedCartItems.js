const getSavedCartItems = () => localStorage.getItem('cartItems');

/* Referencias emanuel calado  codigo mais simples e menos code */

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
