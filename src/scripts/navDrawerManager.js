const navDrawer = document.getElementById('nav-drawer');
const btnCloseDrawer = document.getElementById('btn-close-nav-drawer');
const btnOpenDrawer = document.getElementById('btn-open-nav-drawer');

export default function initDrawerButtons() {
  btnCloseDrawer.addEventListener('click', () => {
    navDrawer.dataset.active = 'false';
  });

  btnOpenDrawer.addEventListener('click', () => {
    navDrawer.dataset.active = 'true';
  });
}
