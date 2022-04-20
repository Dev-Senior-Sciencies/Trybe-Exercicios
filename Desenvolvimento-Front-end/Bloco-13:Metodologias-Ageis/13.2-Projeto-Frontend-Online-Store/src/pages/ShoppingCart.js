import React from 'react';

import PropType from 'prop-types';

export default class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: {},
      loading: false,
    };
    // this.initialState = this.initialState.bind(this);
    // this.increaseQty = this.increaseQty.bind(this);
    // this.decreaseQty = this.decreaseQty.bind(this);
    // this.removeItem = this.removeItem.bind(this);
  }

  // componentDidMount() {
  //   this.initialState();
  // }
  // componentDidMount() {
  //   console.log(this.props.addedToCart);
  // }

  // initialState() {
  //   const { addedToCart } = this.props;
  //   const myProducts = getSavedCartItems();
  //   const myCounter = getSavedCounter();
  //   if (myProducts) {
  //     this.setState({ products: myProducts, counter: myCounter, loading: true });
  //   }

  //   addedToCart.forEach(async (id) => {
  //     const result = await api.getProductDetails(id);
  //     this.setState((acc) => (
  //       {
  //         products: [...acc.products, result],
  //       }), () => this.setState({ loading: false }));
  //   });

  //   if (Object.keys(addedToCart).length === 0) {
  //     this.setState({ loading: false });
  //   }
  // }

  increaseQty(id) {
    const { state } = this;
    if (state.counter[id]) {
      this.setState(({ counter }) => (
        { counter: { ...counter, [id]: counter[id] + 1 } }
      ));
    } else {
      this.setState(({ counter }) => ({ counter: { ...counter, [id]: 2 } }));
    }
  }

  decreaseQty(id) {
    const { state } = this;
    if (state.counter[id] > 0) {
      this.setState(({ counter }) => (
        { counter: { ...counter, [id]: counter[id] - 1 } }
      ));
    }
  }

  // removeItem(id) {
  //   console.log(id);
  //   console.log('item removido');
  // }

  // if (products.length !== 0) {
  //   saveCartItems(products);
  //   saveCounter(counter);
  // }

  render() {
    const { counter, loading } = this.state;
    const { addedToCart } = this.props;

    return (
      <div className="cart-products">
        {addedToCart.length === 0
          && (
            <span data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </span>
          )}
        {
          loading
            ? <span>Carregando...</span>
            : (
              addedToCart.map((element) => (
                <div key={ element.id } className="product">
                  <h3 data-testid="shopping-cart-product-name">{element.title}</h3>
                  <img alt={ element.title } src={ element.thumbnail } />
                  <p>
                    Preço:
                    {element.price}
                  </p>
                  <p data-testid="shopping-cart-product-quantity">
                    { counter[element.id] ? counter[element.id] : 1 }
                  </p>
                  <button
                    data-testid="product-increase-quantity"
                    type="button"
                    onClick={ () => this.increaseQty(element.id) }
                  >
                    Aumentar 1
                  </button>

                  <button
                    data-testid="product-decrease-quantity"
                    type="button"
                    onClick={ () => this.decreaseQty(element.id) }
                  >
                    Diminuir 1
                  </button>

                  <button
                    type="button"
                    onClick={ () => this.removeItem(element.id) }
                  >
                    Remover do carrinho
                  </button>
                </div>
              ))
            )
        }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  addedToCart: PropType.arrayOf(PropType.string).isRequired,
};
