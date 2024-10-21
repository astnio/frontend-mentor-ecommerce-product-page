import { openCart } from './viewCartButton.js';

const btnAddToCart = document.getElementById('btn-add-to-cart');
const btnRemoveFromCart = document.getElementById('btn-delete-cart-item');

const btnIncrementItem = document.getElementById('btn-item-increment');
const btnDecrementItem = document.getElementById('btn-item-decrement');
const inputItemQty = document.getElementById('item-quantity');

const productPriceLabel = document.getElementById('product-price-cart');
const productQtyLabel = document.getElementById('product-qty-cart');
const productTotalLabel = document.getElementById('product-total-cart');

const productPrice = 125.0;

function setItemQty(n) {
  inputItemQty.value = n;
  productQtyLabel.innerText = inputItemQty.value;
}

function removeFromCart() {
  setItemQty(0);
  updateTotalLabel();
}

function updateTotalLabel() {
  const total = inputItemQty.value * productPrice;
  const totalFixed = Number.parseFloat(total).toFixed(2).toString();
  productTotalLabel.innerText = totalFixed;
}

function checkInputQtyValid() {
  if (!inputItemQty.value) {
    setItemQty(0);
  }
}

function incrementItem() {
  checkInputQtyValid();

  if (parseInt(inputItemQty.value) >= 100) {
    setItemQty(100);
  } else {
    setItemQty(parseInt(inputItemQty.value) + 1);
  }

  updateTotalLabel();
}

function decrementItem() {
  checkInputQtyValid();

  if (parseInt(inputItemQty.value) <= 0) {
    setItemQty(0);
  } else {
    setItemQty(parseInt(inputItemQty.value) - 1);
  }

  updateTotalLabel();
}

export default function initAddToCartButton() {
  btnAddToCart.addEventListener('click', openCart);
  btnIncrementItem.addEventListener('click', incrementItem);
  btnDecrementItem.addEventListener('click', decrementItem);
}

productPriceLabel.innerText = Number.parseFloat(productPrice).toFixed(2);
