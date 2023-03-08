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

//if it's activated
exitMobileButton.addEventListener('click', () => {
  navBarLinks.classList.toggle('active');
  dimBackground.classList.toggle('active');
  toggleButton.classList.toggle('active');
  exitMobileButton.classList.toggle('active');
});

// Adds a listener to the links in the menu
for (let i = 0; i < menuTabs.length; i += 1) {
  menuTabs[i].addEventListener('click', () => {
    navBarLinks.classList.toggle('active');
    dimBackground.classList.toggle('active');
    toggleButton.classList.toggle('active');
    exitMobileButton.classList.toggle('active');
  });
}

//#region projects data
let projectsList = [
  {
    name: 'My First Project in List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    feturedImageMobile: 'mobilepeojectpreview.jpg',
    feauturedImageDesktop: 'desktopSnapshot.svg',
    livelink: 'https://www.google.com/',
    sourcelink: '#'
  },
  {
    name: 'My Second Project in List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    feturedImageMobile: 'cardplaceholder.png',
    feauturedImageDesktop: 'cardplaceholder.png',
    livelink: '#',
    sourcelink: '#'
  },
  {
    name: 'My Third Project in List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    feturedImageMobile: 'cardplaceholder.png',
    feauturedImageDesktop: 'cardplaceholder.png',
    livelink: '#',
    sourcelink: '#'
  },
  {
    name: 'My Fourth Project in List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    feturedImageMobile: 'cardplaceholder.png',
    feauturedImageDesktop: 'cardplaceholder.png',
    livelink: '#',
    sourcelink: '#'
  },
  {
    name: 'My Fifth Project in List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    feturedImageMobile: 'cardplaceholder.png',
    feauturedImageDesktop: 'cardplaceholder.png',
    livelink: '#',
    sourcelink: '#'
  },
  {
    name: 'My Sixth Project in List',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    feturedImageMobile: 'cardplaceholder.png',
    feauturedImageDesktop: 'cardplaceholder.png',
    livelink: '#',
    sourcelink: '#'
  },
]
//#endregion

// Get the project card template from the DOM
let projectCardTemplate = document.getElementById('cardtemplate');

// Get the container where the project cards will be inserted
let projectsContainer = document.querySelector('.works');

// Loop through the projectsList array and generate the HTML for each project
for (let i = 0; i < projectsList.length; i += 1) {
  // Clone the project card template
  let projectCard = projectCardTemplate.content.cloneNode(true);

  // Fill in the details for the project
  let project = projectsList[i];
  projectCard.querySelector('h3').textContent = project.name;
  projectCard.querySelectorAll('.tag').forEach((tag, index) => {
    tag.textContent = project.technologies[index];
  });
  projectCard.querySelector('.button').textContent = 'See Project';
  projectCard.querySelector('.button').addEventListener('click', () => {
    ShowModal(i);
  });

  // Insert the project card into the projects container
  projectsContainer.appendChild(projectCard);
}

//#region Modal Pop Up
let modalPopUp = document.getElementsByClassName('modalcontainer')[0];
let overlayBg = document.getElementById('overlay');
let liveL = document.getElementById('see-live');
let sourceL = document.getElementById('see-source');
let bgImage = document.getElementsByClassName('modal-featured-image')[0];
let currentScrollPosition = window.scrollY;

function ShowModal(index) {

  //Declare Variables
  let project = projectsList[index];
  currentScrollPosition = window.scrollY;

  //toggle pop up activation
  modalPopUp.classList.toggle('active');
  overlayBg.classList.toggle('active');

  //scroll all the way to the pop up
  window.scrollTo(0, 0);

  modalPopUp.querySelector('h3').textContent = project.name;
  modalPopUp.querySelectorAll('.tag').forEach((tag, index) => {
    tag.textContent = project.technologies[index];
  });
  modalPopUp.querySelector('p').textContent = project.description;
  liveL.setAttribute('onclick', `window.location.href='${project.livelink}'`);
  sourceL.setAttribute('onclick', `window.location.href='${project.sourcelink}'`);
}

function HideModal() {
  modalPopUp.classList.toggle('active');
  overlayBg.classList.toggle('active');
  scrollTo(0, currentScrollPosition);
}
//#endregion
