import { openCart } from './viewCartButton.js';

const btnAddToCart = document.getElementById('btn-add-to-cart');
const btnIncrementItem = document.getElementById('btn-item-increment');
const btnDecrementItem = document.getElementById('btn-item-decrement');
const inputItemQty = document.getElementById('item-quantity');

export default function initAddToCartButton() {
  btnAddToCart.addEventListener('click', () => {
    openCart();
  });

  btnIncrementItem.addEventListener('click', () => {
    if (!inputItemQty.value) {
      inputItemQty.value = 0;
    }

    if (parseInt(inputItemQty.value) >= 100) {
      inputItemQty.value = 100;
    } else {
      inputItemQty.value = parseInt(inputItemQty.value) + 1;
    }
  });

  btnDecrementItem.addEventListener('click', () => {
    if (!inputItemQty.value) {
      inputItemQty.value = 0;
    }

    if (parseInt(inputItemQty.value) <= 0) {
      inputItemQty.value = 0;
    } else {
      inputItemQty.value = parseInt(inputItemQty.value) - 1;
    }
  });
}
