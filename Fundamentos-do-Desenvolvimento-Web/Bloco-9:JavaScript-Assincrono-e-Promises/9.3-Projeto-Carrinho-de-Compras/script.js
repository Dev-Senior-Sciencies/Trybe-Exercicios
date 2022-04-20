const shopping = document.querySelector('.cart__items');
const clearCart = document.querySelector('.empty-cart');
const intemsLista = document.getElementsByClassName('cart__item');
const listOfProducts = document.querySelector('.items');
const loadingMsg = document.createElement('p');
const priceTotal = document.querySelector('.total-price');

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function sum() {
  const SumTotal = [];
  for (let index = 0; index < intemsLista.length; index += 1) {
    const priceOfCart = Number(intemsLista[index].innerText.split('$')[1]);
    SumTotal.push(priceOfCart);
  }
  priceTotal.innerText = SumTotal.reduce((acum, element) => acum + element, 0);
}

function loading() {
  loadingMsg.innerText = 'carregando...';
  loadingMsg.className = 'loading';
  listOfProducts.appendChild(loadingMsg);
}

function createCustomElement(element, className, innerText) {
  const myElement = document.createElement(element);
  myElement.className = className;
  myElement.innerText = innerText;
  return myElement;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // coloque seu código aqui
  event.target.remove();
  saveCartItems(shopping.innerHTML);
  sum();
}
clearCart.addEventListener('click', () => {
  shopping.innerHTML = '';
  localStorage.removeItem('cartItems');
  sum();
});

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const addTocart = async (event) => {
  const pai = event.target.parentNode;
  const ids = getSkuFromProductItem(pai);
  const intemId = await fetchItem(ids);
  const { id, title, price } = intemId;
  const list = {
    sku: id,
    name: title,
    salePrice: price,
  };
  shopping.appendChild(createCartItemElement(list));
  saveCartItems(shopping.innerHTML);
  sum();
};

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));

  const bottun = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  bottun.addEventListener('click', addTocart);
  section.appendChild(bottun);

  return section;
}
const getElement = async () => {
  const product = await fetchProducts('computador');
  const arrayComputad = product.results;
  const intemsPai = document.querySelector('.items');
  arrayComputad.forEach((element) => {
    const { id, title, thumbnail } = element;
    const object = {
      sku: id,
      name: title,
      image: thumbnail,
    };
    intemsPai.appendChild(createProductItemElement(object));
  });
};

const attpaginaremoveintems = () => {
  for (let index = 0; index < intemsLista.length; index += 1) {
    intemsLista[index].addEventListener('click', cartItemClickListener);
  }
};

window.onload = async () => {
  loading();
  await getElement();
  loadingMsg.remove();
  getSavedCartItems();
  shopping.innerHTML = getSavedCartItems();
  await attpaginaremoveintems();
  sum();
};
