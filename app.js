// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  header  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  project panel  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let getProjectWrapper = document.getElementById("projectWrapper")
let getProjectContents = document.getElementById("projectContents")

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  outer folder screen  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let getMainBody = document.getElementById("mainBody");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  inner folder screen  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let getTitle = document.getElementById("mainTitle");
let getSubtitle = document.getElementById("mainSubtitle");
let getBulletPoints = document.getElementById("mainBulletPoints");
let getLink = document.getElementById("mainLink");

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  about panel   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let getAboutContents = document.getElementById("aboutContents")



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  header  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  project panel  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function openProjectContents() { 
  if (getAboutContents.classList.contains("open")) { closeAbout();
  } else if (!getProjectContents.classList.contains("open")) {openProjects();
  } else (closeProjects())
  }

  function openProjects() {
    getProjectContents.style.maxHeight = 'calc(100vh - 190px)';
    getProjectContents.classList.add("open")
  }
  
  function closeProjects() {
    getProjectContents.style.maxHeight = '0px';
    getProjectContents.classList.remove("open")
  }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  folder screen  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  inner folder screen  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function projectFrameOpening() {
  document.getElementById("projectFrame").classList.remove("hidden");
  document.getElementById("folderFrame").classList.add("hidden");
}

function projectFrameClosing() {
  // runs when the back button is pressed
  // shows all the folders again
    document.getElementById("projectFrame").classList.add("hidden");
    document.getElementById("folderFrame").classList.remove("hidden");
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  about panel  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function openAboutContents() {
  // if both panels are open then close both panels
  // if only the project panel is open then only open the about panel
  // if both panels are closed then open both
  if (getProjectContents.classList.contains('open')) {
    if(getAboutContents.classList.contains('open')) {
      closeAbout();
      closeProjects()
      return
    } else {
    openAbout();
    return }}
  else {
    openAbout();
    openProjects() 
  }
}


function openAbout() {
  getAboutContents.style.maxHeight = 'calc(100vh - 190px)';
  getAboutContents.classList.add('open')
}

function closeAbout() {
  getAboutContents.style.maxHeight = '0px';
  getAboutContents.classList.remove('open')
}












function showPersonalFolders() {
  getMainBody.classList.add("personal");
  getMainBody.classList.remove("coding");
  // hide coding projects
  // query selector all for class of folder and coding, add hidden
  let getCodingFolders = document.querySelectorAll(".folder.coding");
  getCodingFolders.forEach(function (elem) {
    elem.classList.add('hidden');
  });
  // show personal projects
  // same thing, but remove hidden
  let getPersonalFolders = document.querySelectorAll(".folder.personal");
  getPersonalFolders.forEach(function (elem) {
    elem.classList.remove('hidden');
  });
}

function showCodingFolders() {
    getMainBody.classList.remove("personal");
  getMainBody.classList.add("coding");
  // show coding projects
  // query selector all for class of folder and coding, remove hidden
  let getCodingFolders = document.querySelectorAll(".folder.coding");
  getCodingFolders.forEach(function (elem) {
    elem.classList.remove('hidden');
  });
  // hide personal projects
  // same thing, but add hidden
  let getPersonalFolders = document.querySelectorAll(".folder.personal");
  getPersonalFolders.forEach(function (elem) {
    elem.classList.add('hidden');
  });
}



function openWaluigiContents() {
//   show projectFrame
//   hide folderFrame
  projectFrameOpening();
  getTitle.innerHTML = "Waluigi Jail";
  getSubtitle.innerHTML = "This is an introductory web development project intended to develop HTML, CSS, and JavaScript skills. Users interact with the central image, triggering dynamic transformations and text display with each click, demonstrating foundational coding proficiency and creativity."
  getBulletPoints.innerHTML = "123";
  getLink.setAttribute("href", "kathryn.mckean.github.io/waluigijail/");
}

function openMemoryContents() {
  projectFrameOpening();
  getTitle.innerHTML = "Memory Game";
  getSubtitle.innerHTML = "This is a simple project centered around JavaScript, focusing on state management and the utilization of for loops."
  getBulletPoints.innerHTML = "1234";
  getLink.setAttribute("href", "kathryn.mckean.github.io/memorygame/");
}

function openNoteContents() {
  projectFrameOpening();
  getTitle.innerHTML = "Note Taking";
  getSubtitle.innerHTML = "Develops CRUD skills through a simple note making page. You can create, read, update, and delete notes.";
  getBulletPoints.innerHTML = "the skills developed";
  getLink.setAttribute("href", "kathryn.mckean.github.io/noteTaker/")
}

function openPetContents() {
  projectFrameOpening();
  getTitle.innerHTML = "Michelle at your Service";
  getSubtitle.innerHTML = "A webpage for a local petcare company. Utilized Figma to design the webpage.";
  getBulletPoints.innerHTML = "Figma, etc";
  getLink.setAttribute("href", "kathryn.mckean.github.io/MAYS/")
}
function openFortuneContents() { 
  projectFrameOpening();
  getTitle.innerHTML = "giFortune Teller";
  getSubtitle.innerHTML = "Using the giphy API, your fortune is told. The user inputs their question and a related gif is shown. Like a giphy search bar, but more interesting";
  getBulletPoints.innerHTML = "Pro/Con";
  getLink.setAttribute("href", "kathryn.mckean.github.io/gifFortune/")
}

function openETContents() { 
  projectFrameOpening();
  getTitle.innerHTML = "ET: the lamp";
  getSubtitle.innerHTML = "Using the giphy API, your fortune is told. The user inputs their question and a related gif is shown. Like a giphy search bar, but more interesting";
  getBulletPoints.innerHTML = "Pro/Con";
  // getLink.setAttribute("href", "kathryn.mckean.github.io/gifFortune/")
//   hide link
}

function openMetalContents() { 
  projectFrameOpening();
  getTitle.innerHTML = "Metalwork";
  getSubtitle.innerHTML = "Using the giphy API, your fortune is told. The user inputs their question and a related gif is shown. Like a giphy search bar, but more interesting";
  getBulletPoints.innerHTML = "Pro/Con";
  // getLink.setAttribute("href", "kathryn.mckean.github.io/gifFortune/")
//   hide link
}

function openETContents() { 
  projectFrameOpening();
  getTitle.innerHTML = "ET: the lamp";
  getSubtitle.innerHTML = "Using the giphy API, your fortune is told. The user inputs their question and a related gif is shown. Like a giphy search bar, but more interesting";
  getBulletPoints.innerHTML = "Pro/Con";
  // getLink.setAttribute("href", "kathryn.mckean.github.io/gifFortune/")
//   hide link
}