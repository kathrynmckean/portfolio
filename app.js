
let getProjectWrapper = document.getElementById("projectWrapper")
let getProjectContents = document.getElementById("projectContents")
let getAboutContents = document.getElementById("aboutContents")

function openProjectContents() { 
  // when i click the project title i want to make the max-height of the wrapper 90vh
// check if the panel itself is open
// then check if the other panel is open
// if other panel is open then only close that panel and return
// if other panel isn't open then open only this panel

if (getAboutContents.classList.contains("open")) {
  closeAbout();
} else if (!getProjectContents.classList.contains("open")) {
 openProjects();
} else (closeProjects())
}


function openProjects() {
  console.log('open projects')
  getProjectContents.style.maxHeight = 'calc(100vh - 190px)';
  getProjectContents.classList.add("open")
  changeHeaderSize()
  // changeHeaderSize();
}

function closeProjects() {
  console.log('close projects')
  getProjectContents.style.maxHeight = '0px';
  getProjectContents.classList.remove("open");
  changeHeaderSize()
  // changeHeaderSize();
}

function openAboutContents() {
  // if the panel is closed then open both panels
  // max-height becomes calc(100% - 190px)
  // console.log(math);
  
   // getAboutContents.style.height = 'calc(100% - 95px)';
  console.log("done")
  
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
      
  
  
// if (getProjectContents.classList.contains("open")) {
//   if(getAboutContents.classList.contains("open") ) {
//     getAboutContents.classList.remove("open")
//     getProjectContents.classList.remove("open")
//     return
//   } else {
//     getAboutContents.classList.add("open")
//     return
//   }

// } else {
//   getAboutContents.classList.add("open")
//   getProjectContents.classList.add("open")
// }
}


function openAbout() {
  getAboutContents.style.maxHeight = 'calc(100vh - 190px)';
  getAboutContents.classList.add('open')
  changeHeaderSize();

}
function closeAbout() {
  getAboutContents.style.maxHeight = '0px';
  getAboutContents.classList.remove('open')
  changeHeaderSize()
}


let getTitle = document.getElementById("mainTitle");
let getSubtitle = document.getElementById("mainSubtitle");
let getBulletPoints = document.getElementById("mainBulletPoints");
let getLink = document.getElementById("mainLink");



function projectFrameOpening() {
  document.getElementById("projectFrame").classList.remove("hidden");
  document.getElementById("folderFrame").classList.add("hidden");
}

function projectFrameClosing() {
  // runs when the back button is pressed
  // first we reset the inner tabs so the next folder opened will open on the overview
  resetInnerTabs();
  tabOverviewLoadContents()
  // shows all the folders again
    document.getElementById("projectFrame").classList.add("hidden");
    document.getElementById("folderFrame").classList.remove("hidden");
}

let getMainBody = document.getElementById("mainBody");
let getPersonalTabTitle = document.querySelector(".tab.personal")
let getCodingTabTitle = document.querySelector('.tab.coding')


function showPersonalFolders() {
  getMainBody.classList.add("personal");
  getMainBody.classList.remove("coding");
  getPersonalTabTitle.classList.add('focus');
  getCodingTabTitle.classList.remove('focus')

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

  getPersonalTabTitle.classList.remove('focus');
  getCodingTabTitle.classList.add('focus')
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
  getSubtitle.innerHTML = "A project intended to develop HTML, CSS, and JavaScript skills. Users interact with the central image, triggering dynamic transformations and text display with each click, demonstrating foundational coding proficiency and creativity."
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

// when header is clicked close both panels 
function closeAllPanels() {
  closeAbout();
  closeProjects();
  changeHeaderSize();
}

let getHeader = document.querySelector(".header");

function changeHeaderSize() {

  if (getAboutContents.classList.contains("open")) {
    getHeader.classList.add('smallFont');
    getHeader.classList.remove("bigFont")
  console.log("make small??");
  } else if (getProjectContents.classList.contains('open')) {
    getHeader.classList.add('smallFont');
    getHeader.classList.remove("bigFont");
  console.log("make small??");
  } else {
    getHeader.classList.remove('smallFont');
    getHeader.classList.add("bigFont");
  console.log("make big??");
  }
}


let text = document.getElementById('myEmail').textContent;
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Email address copied to clipboard');
    // show .confirm
    document.querySelector(".confirm").style.opacity = "100%"

    console.log(text)
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

function openTab(id) {
  console.log(id);
  // on click add className focus to the tab with id id
  let allTabs = document.querySelectorAll('.innerTab');
  allTabs.forEach(function (elem) {
    elem.classList.remove('focus');
  });
  let selectedTab = document.querySelector(`#${id}`);
  selectedTab.classList.add('focus');
  // run another function with name like ${id}LoadContents
  // ${id}LoadContents();
}

//runs when you click back
function resetInnerTabs() {
  //resets the tabs themselves
    let allTabs = document.querySelectorAll('.innerTab');
  allTabs.forEach(function (elem) {
    elem.classList.remove('focus');
  });
  let selectedTab = document.querySelector(`#tabOverview`);
  selectedTab.classList.add('focus');
  
  //pull back up the overview screen
 
}


let getMainBodyProjects = document.getElementById('mainBodyProjects')

function tabThoughtsLoadContents(id) {
  console.log('hi')
  openTab(id);
  let getThoughtsElements = document.querySelectorAll(".thoughts");
   getThoughtsElements.forEach(function (elem) {
    elem.classList.remove('hidden');
  });
   let getOverviewElements = document.querySelectorAll(".overview");
   getOverviewElements.forEach(function (elem) {
    elem.classList.add('hidden');
  });
  // getMainBodyProjects.classList.remove('projectPage');
  getMainBodyProjects.classList.replace('projectPage', "thoughtsPage")
}

function tabOverviewLoadContents() {
  openTab('tabOverview');
  
  let getThoughtsElements = document.querySelectorAll(".thoughts");

  let getMainBodyProjects = document.getElementById('mainBodyProjects');


  if(getMainBodyProjects.classList.contains('thoughtsPage')){
      let getOverviewElements = document.querySelectorAll(".overview");
   getOverviewElements.forEach(function (elem) {
    elem.classList.remove('hidden');
  });
  getThoughtsElements.forEach(function (elem) {
    elem.classList.add('hidden');
  });
  getMainBodyProjects.classList.replace('thoughtsPage', "projectPage");
  } else {
return
  }
  
}