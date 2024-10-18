import { openCart } from './viewCartButton.js';

const btnAddToCart = document.getElementById('btn-add-to-cart');

export default function initAddToCartButton() {
  btnAddToCart.addEventListener('click', () => {
    openCart();
  });
}
