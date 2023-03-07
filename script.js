const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navBarLinks = document.getElementsByClassName('menu-links')[0];
const dimBackground = document.getElementsByClassName('dim-background')[0];
const exitMobileButton = document.getElementsByClassName('exit-mobile-menu')[0];
const menuTabs = document.getElementsByClassName('menutabs');

toggleButton.addEventListener('click', () => {
  navBarLinks.classList.toggle('active');
  dimBackground.classList.toggle('active');
  toggleButton.classList.toggle('active');
  exitMobileButton.classList.toggle('active');
});

exitMobileButton.addEventListener('click', () => {
  navBarLinks.classList.toggle('active');
  dimBackground.classList.toggle('active');
  toggleButton.classList.toggle('active');
  exitMobileButton.classList.toggle('active');
});

for (var i = 0; i < menuTabs.length; i++) {
  menuTabs[i].addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
    dimBackground.classList.toggle('active');
    toggleButton.classList.toggle('active');
    exitMobileButton.classList.toggle('active');
  });
}