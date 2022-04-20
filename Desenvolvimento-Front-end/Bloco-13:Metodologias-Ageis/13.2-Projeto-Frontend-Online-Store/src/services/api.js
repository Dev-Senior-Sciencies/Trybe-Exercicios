export async function getCategories() {
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((element) => element.json())
    .catch(() => 'Não foi possível carregar as categorias');
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const catAndQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((element) => element.json())
    .catch(() => 'Não foi possível carregar');
  return catAndQuery;
}

export async function getProductDetails(query) {
  const getDetails = await fetch(`https://api.mercadolibre.com/items/${query}`)
    .then((element) => element.json())
    .catch(() => 'Não foi possível carregar os detalhes');
  return getDetails;
}
