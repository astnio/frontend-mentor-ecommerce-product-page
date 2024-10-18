const cartMenu = document.getElementById('cart-menu');
const cartButton = document.getElementById('cart-button');

let cartOpen = false;

function openCart() {
  cartMenu.style.opacity = 1;
  cartMenu.style.visibility = 'visible';
  cartMenu.style.pointerEvents = 'all';
  cartOpen = true;
}

function closeCart() {
  cartMenu.style.opacity = 0;
  cartMenu.style.visibility = 'hidden';
  cartMenu.style.pointerEvents = 'none';
  cartOpen = false;
}

export default function initCartButton() {
  cartButton.addEventListener('click', () => {
    cartOpen ? closeCart() : openCart();
  });
}
