import { openCart } from './viewCartButton.js';

const btnAddToCart = document.getElementById('btn-add-to-cart');
const btnIncrementItem = document.getElementById('btn-item-increment');
const btnDecrementItem = document.getElementById('btn-item-decrement');

export default function initAddToCartButton() {
  btnAddToCart.addEventListener('click', () => {
    openCart();
  });
}
