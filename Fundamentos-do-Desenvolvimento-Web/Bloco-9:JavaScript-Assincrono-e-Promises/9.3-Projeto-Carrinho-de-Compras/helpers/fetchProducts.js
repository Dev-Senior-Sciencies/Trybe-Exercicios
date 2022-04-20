const fetchProducts = async (item) => {
  // seu código aqui
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${item}`);
    const object = await response.json();
    return object;
  } catch (error) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
