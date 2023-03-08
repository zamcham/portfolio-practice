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

// #region projects data
const projectsList = [
  {
    name: 'My First Project in List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    feturedImageMobile: 'mobilepeojectpreview.jpg',
    feauturedImageDesktop: 'desktopSnapshot.svg',
    livelink: 'https://www.google.com/',
    sourcelink: '#',
  },
  {
    name: 'My Second Project in List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    feturedImageMobile: 'cardplaceholder.png',
    feauturedImageDesktop: 'cardplaceholder.png',
    livelink: '#',
    sourcelink: '#',
  },
  {
    name: 'My Third Project in List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    feturedImageMobile: 'cardplaceholder.png',
    feauturedImageDesktop: 'cardplaceholder.png',
    livelink: '#',
    sourcelink: '#',
  },
  {
    name: 'My Fourth Project in List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    feturedImageMobile: 'cardplaceholder.png',
    feauturedImageDesktop: 'cardplaceholder.png',
    livelink: '#',
    sourcelink: '#',
  },
  {
    name: 'My Fifth Project in List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    feturedImageMobile: 'cardplaceholder.png',
    feauturedImageDesktop: 'cardplaceholder.png',
    livelink: '#',
    sourcelink: '#',
  },
  {
    name: 'My Sixth Project in List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    feturedImageMobile: 'cardplaceholder.png',
    feauturedImageDesktop: 'cardplaceholder.png',
    livelink: '#',
    sourcelink: '#',
  },
];
// #endregion