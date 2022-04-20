import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Search from './components/Search';
import Header from './components/Header';
import './App.css';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      addedToCart: [],
    };
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(infos) {
    this.setState(({ addedToCart }) => ({ addedToCart: [...addedToCart, infos] }));
  }

  render() {
    return (
      <div className="content">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ () => (
                <>
                  <Header />
                  <Search addToCart={ this.addToCart } />
                </>) }
            />

            <Route
              path="/product/:id"
              render={ (props) => (
                <>
                  <Header />
                  <ProductDetails { ...props } addToCart={ this.addToCart } />
                </>) }
            />

            <Route
              exact
              path="/shopping-cart"
              render={ () => (
                <>
                  <Header />
                  <ShoppingCart { ...this.state } />
                </>) }
            />

          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
