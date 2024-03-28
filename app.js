// header
let getMeSubtitle = document.getElementById("meSubtitle");

// project panel
let getProjectsPanel = document.getElementById("projectsPanelContents");

// folder screen
let getFolders = document.getElementById("projectCardFrame");

// inside the folder
let getInnerProjectFrame = document.getElementById("projectContentsFrame");

// inner folder template
let getTitle = document.getElementById("mainTitle");
let getSubtitle = document.getElementById("mainSubtitle");
let getBulletPoints = document.getElementById("mainBulletPoints");
let getLink = document.getElementById("mainLink");

// inner folder project specific (only one of these shows)
let getWaluigiContents = document.getElementById("waluigiContents");
let getMemoryContents = document.getElementById("memoryContents");

// content panel
let getContactPanelContents = document.getElementById("contactPanelContents");


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~ header ~~~~~~~~~~~~~~~~~~~~
function hideMeSubtitle() { // hide my header subtitle (hidden when a panel is open)
  getMeSubtitle.style.display = "none";
  console.log("hide me subtitle")
}

function showMeSubtitle() { // show my header subtitle (only visible when panels are closed)
  setTimeout (() => {
  getMeSubtitle.style.display = "flex";
  }, 300)  
  
}

// ~~~~~~~~~~~~~~~~~~~~ project panel ~~~~~~~~~~~~~~~~~~~~

function closePanels() {
   if (getContactPanelContents.classList.contains("visible")) {closeContactPanelContents()}
   if (getProjectsPanel.classList.contains("visible")) {closeProjectsPanelContents()}
  showMeSubtitle();
}

function openProjectsPanelContents() {
  // when adding to this function you should likely add it to other panel functions
  // if another panel is open, close it while opening this panel
  if (getContactPanelContents.classList.contains("visible")) {
    closeContactPanelContents();
  }
  //   if .PPC is hidden, change .ProjectsPanelContents display to visible
  if (getProjectsPanel.classList.contains("hidden")) {
    getProjectsPanel.classList.remove("hidden");
    getProjectsPanel.classList.add("visible");
    // when you open the projects panel the folders frame will automatically appear after 1s
    getFolders.classList.remove("hidden")
    getFolders.classList.add("visible")
    hideMeSubtitle();
  } else {
   closeProjectsPanelContents();
   showMeSubtitle();
  }
}
function closeProjectsPanelContents() {
    getProjectsPanel.classList.remove("visible");
    getProjectsPanel.classList.add("hidden");
//   closing the inner project frame
  if (getInnerProjectFrame.classList.contains('visible')) {
    getInnerProjectFrame.classList.remove("visible")
    getInnerProjectFrame.classList.add("hidden")
  }
//   closing the outer folder frame
    if (getFolders.classList.contains('visible')) {
    getFolders.classList.remove("visible")
    getFolders.classList.add("hidden")
  }
}

// ~~~~~~~~~~~~~~~~~~~~ folder screen ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function showFolders() {
  console.log("go back to folder screen");
  setTimeout (() => {
  getFolders.classList.remove("hidden");
  getFolders.classList.add("visible");
          }, 300)
  getInnerProjectFrame.classList.remove('visible');
  getInnerProjectFrame.classList.add("hidden");
}

function hideFolders() {
 console.log("hiding folders");
 getFolders.classList.remove("visible");
 getFolders.classList.add("hidden");
}
// ~~~~~~~~~~~~~~~~~~~~ inner folders ~~~~~~~~~~~~~~~~~~~~

function showProjectContents() {
  console.log("showing content frame")    
  getInnerProjectFrame.classList.remove('hidden');
  getInnerProjectFrame.classList.add("visible");
}

function folderOpeningGeneral() { // the general things that happen when you open a folder,
  // gets called by another function that changes the template's contents
  hideFolders();
  setTimeout (() => {
showProjectContents();
    }, 100)
}

function openWaluigiContents() {
  folderOpeningGeneral();
  getTitle.innerHTML = "Waluigi Jail";
  getSubtitle.innerHTML = "This is an introductory web development project intended to develop HTML, CSS, and JavaScript skills. Users interact with the central image, triggering dynamic transformations and text display with each click, demonstrating foundational coding proficiency and creativity."
  getBulletPoints.innerHTML = "123";
  getLink.setAttribute("href", "kathryn.mckean.github.io/waluigijail/");
}


function openMemoryContents() {
  folderOpeningGeneral();
  getTitle.innerHTML = "Memory Game";
  getSubtitle.innerHTML = "This is a simple project centered around JavaScript, focusing on state management and the utilization of for loops."
  getBulletPoints.innerHTML = "1234";
  getLink.setAttribute("href", "kathryn.mckean.github.io/memorygame/");
}

function openNoteContents() {
  folderOpeningGeneral();
  getTitle.innerHTML = "Note Taking";
  getSubtitle.innerHTML = "Develops CRUD skills through a simple note making page. You can create, read, update, and delete notes.";
  getBulletPoints.innerHTML = "the skills developed";
  getLink.setAttribute("href", "kathryn.mckean.github.io/noteTaker/")
}

function openPetContents() {
  folderOpeningGeneral();
  getTitle.innerHTML = "Michelle at your Service";
  getSubtitle.innerHTML = "A webpage for a local petcare company. Utilized Figma to design the webpage.";
  getBulletPoints.innerHTML = "Figma, etc";
  getLink.setAttribute("href", "kathryn.mckean.github.io/MAYS/")
}
function openFortuneContents() { 
  folderOpeningGeneral();
  getTitle.innerHTML = "giFortune Teller";
  getSubtitle.innerHTML = "Using the giphy API, your fortune is told. The user inputs their question and a related gif is shown. Like a giphy search bar, but more interesting";
  getBulletPoints.innerHTML = "Pro/Con";
  getLink.setAttribute("href", "kathryn.mckean.github.io/gifFortune/")
}

// function openContentsTemplate() { fill in info for specific project
//   folderOpeningGeneral();
//   getTitle.innerHTML = "";
//   getSubtitle.innerHTML = "";
//   getBulletPoints.innerHTML = "";
//   getLink.setAttribute("href", "kathryn.mckean.github.io/~~~/")
// }


// ~~~~~~~~~~~~~~~~~~~~ contact panel ~~~~~~~~~~~~~~~~~~~~

function openContactPanelContents() {
  console.log("open contact")
if (getProjectsPanel.classList.contains("visible")) {
closeProjectsPanelContents();
}

  if (getContactPanelContents.classList.contains("hidden")) {
    getContactPanelContents.classList.remove("hidden");
    getContactPanelContents.classList.add("visible");
    hideMeSubtitle();
  } else {
    closeContactPanelContents();
    showMeSubtitle();
  }
}

function closeContactPanelContents() {
    getContactPanelContents.classList.remove("visible");
    getContactPanelContents.classList.add("hidden");
}





