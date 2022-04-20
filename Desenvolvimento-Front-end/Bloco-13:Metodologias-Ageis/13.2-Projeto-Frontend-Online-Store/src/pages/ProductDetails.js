import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

export default class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      thumbnail: '',
      price: '',
      id: '',
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const result = await api.getProductDetails(id);
    this.setState({
      title: result.title,
      thumbnail: result.thumbnail,
      price: result.price,
      id: result.id });
  }

  render() {
    const { title, thumbnail, price, id } = this.state;
    const { addToCart } = this.props;
    return (
      <div className="product-details">
        <h3 data-testid="product-detail-name">{title}</h3>
        <img alt={ title } src={ thumbnail } />
        <p>
          Preço:
          {price}
        </p>
        <p>
          Detalhes:
          {id}
        </p>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => addToCart({ ...this.state, qty: 1 }) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  addToCart: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};
