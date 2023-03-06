const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navBarLinks = document.getElementsByClassName('menu-links')[0];
const dimBackground = document.getElementsByClassName('dim-background')[0];


toggleButton.addEventListener('click', () => {
  navBarLinks.classList.toggle('active');
  dimBackground.classList.toggle('active');
})