const cartMenu = document.getElementById('cart-menu');
const cartButton = document.getElementById('cart-button');

console.log(cartMenu);

let cartOpen = true;

function openCart() {
  cartMenu.style.opacity = 0;
  cartOpen = true;
}

function closeCart() {
  cartMenu.style.opacity = 1;
  cartOpen = false;
}

export default function initCartButton() {
  cartButton.addEventListener('click', () => {
    cartOpen ? closeCart() : openCart();
  });
}
