const navDrawer = document.getElementById('nav-drawer');
const drawerOverlay = document.getElementById('nav-drawer-overlay');
const btnCloseDrawer = document.getElementById('btn-close-nav-drawer');
const btnOpenDrawer = document.getElementById('btn-open-nav-drawer');

export default function initDrawerButtons() {
  btnCloseDrawer.addEventListener('click', () => {
    navDrawer.dataset.active = 'false';
    drawerOverlay.dataset.active = 'false';
  });

  btnOpenDrawer.addEventListener('click', () => {
    navDrawer.dataset.active = 'true';
    drawerOverlay.dataset.active = 'true';
  });

  drawerOverlay.addEventListener('click', () => {
    navDrawer.dataset.active = 'false';
    drawerOverlay.dataset.active = 'false';
  });
}
