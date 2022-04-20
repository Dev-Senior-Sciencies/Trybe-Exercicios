import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">[O carrinho]</Link>
        <Link to="/">Inicial</Link>
      </div>
    );
  }
}
