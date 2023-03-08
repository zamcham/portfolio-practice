// #region Mobile Menu
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navBarLinks = document.getElementsByClassName('menu-links')[0];
const dimBackground = document.getElementsByClassName('dim-background')[0];
const exitMobileButton = document.getElementsByClassName('exit-mobile-menu')[0];
const menuTabs = document.getElementsByClassName('menutabs');

const toggleActiveClass = () => {
  navBarLinks.classList.toggle('active');
  dimBackground.classList.toggle('active');
  toggleButton.classList.toggle('active');
  exitMobileButton.classList.toggle('active');
};

toggleButton.addEventListener('click', toggleActiveClass);
exitMobileButton.addEventListener('click', toggleActiveClass);
for (let i = 0; i < menuTabs.length; i += 1) {
  menuTabs[i].addEventListener('click', toggleActiveClass);
}
// #endregion