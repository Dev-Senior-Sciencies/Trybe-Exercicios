import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/api';

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      category: '',
      categories: [],
      dataResults: [],
      initialMessage: true,
      loading: false,
      loadingCat: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.searchInput = this.searchInput.bind(this);
    this.onBtnClick = this.onBtnClick.bind(this);
  }

  componentDidMount() {
    api.getCategories().then((listCategories) => {
      this.setState({ categories: listCategories, loadingCat: false });
    });
  }

  onBtnClick(e) {
    this.setState({ category: e.target.id }, () => this.searchInput(e));
  }

  onInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  async searchInput(e) {
    this.setState({ initialMessage: false, loading: true });
    e.preventDefault();
    const { inputValue, category } = this.state;
    const data = await api.getProductsFromCategoryAndQuery(category, inputValue);
    this.setState({ dataResults: data.results, loading: false });
  }

  render() {
    const { inputValue, loading, loadingCat,
      dataResults, initialMessage, categories } = this.state;
    const { addToCart } = this.props;
    return (
      <>
        <form onSubmit={ this.searchInput }>
          <input
            data-testid="query-input"
            type="text"
            value={ inputValue }
            onChange={ this.onInputChange }
          />
          <button type="submit" data-testid="query-button">Buscar</button>
        </form>
        { initialMessage
          ? (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          )
          : (
            <div className="results">
              { loading
                ? <span>Carregando...</span>
                : (
                  dataResults.map((element) => (
                    <div data-testid="product" key={ element.id }>
                      <Link
                        data-testid="product-detail-link"
                        to={ `/product/${element.id}` }
                      >
                        <img alt={ element.title } src={ element.thumbnail } />
                        <h3 data-testid="product-detail-name">{element.title}</h3>
                      </Link>
                      <p>
                        Preço:
                        {element.price}
                      </p>
                      <button
                        data-testid="product-add-to-cart"
                        type="button"
                        onClick={ () => addToCart({ ...element, qty: 1 }) }
                      >
                        Adicionar ao carrinho
                      </button>
                    </div>
                  ))
                )}
            </div>
          )}

        <div className="categories">
          { loadingCat
            ? <span>Carregando...</span>
            : categories.map((element) => (
              <button
                type="button"
                id={ element.id }
                onClick={ this.onBtnClick }
                data-testid="category"
                key={ element.id }
              >
                {element.name}
              </button>
            ))}
        </div>
      </>
    );
  }
}

Search.propTypes = {
  addToCart: PropType.func.isRequired,
};
