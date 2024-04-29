// I want to finish what I've got before going back and changing it to be more dynamic

// import { projectData } from "./data";
// import { projectData } from './data';

const projectData = [
  {
    projectId: 1,
    title: "Waluigi Jail from obj",
    content: "A project intended to develop HTML, CSS, and JavaScript skills. Users interact with the central image, triggering dynamic transformations and text display with each click, demonstrating foundational coding proficiency and creativity.",
    floating : "n/a",
    link: "kathryn.mckean.github.io/waluigijail/",
    thoughts: "words",
    img: "pics/firstWaPic.png",
    color: "#7e0cd6",
  },
  {
    projectId: 2,
    title: "Memory Game",
    content: "This is a simple project centered around JavaScript, focusing on state management and the utilization of for loops.",
    link: "kathryn.mckean.github.io/memorygame/",
    floating : "n/a",
    thoughts: "kjk kk nwkdfn",
    img: "pics/",
    color: "#c76d9d",
  },
  {
    projectId: 3,
    title: "Note Taker",
    content: "Develops CRUD skills through a simple note making page. You can create, read, update, and delete notes.",
    floating : "n/a",
    link: "kathryn.mckean.github.io/noteTaker/",
    thoughts: "j j dfljerje",
    img: "me.png",
    color: "#588157",
  },
  {
    projectId: 4,
    title: "MAYS (Pet Care)",
    content: "A A webpage for a local petcare company. Utilized Figma to design the webpage.",
    floating : "n/a",
    link: "kathryn.mckean.github.io/MAYS/",
    thoughts: "  lkjseklsdfffff",
    img: "me.png",
    color: "#4367aa",
  },
  {
    projectId: 5,
    title: "Gif Fortune Teller",
    content: "Using the giphy API, your fortune is told. The user inputs their question and a related gif is shown. Like a giphy search bar, but more interesting",
    floating : "n/a",
    link: "kathryn.mckean.github.io/gifFortune/",
    thoughts: "lsfljsf",
    img: "me.png",
    color: "#33158E",
  },
]



const personalProjectData = [
  {
    projectId: 1,
    title: "ET: The Lamp",
    content: "Made with additive and reductive methods. Lightweight two-part epoxy clay created the basic form which was then sculpted by hand (and dremel)",
    floating : "insert photo",
    // link: "kathryn.mckean.github.io/waluigijail/",
    thoughts: "This was made for someone who loves ET and ambient lighting.",
    img: "pics/et1.png",
    color: "#7e0cd6",
  },
  {
    projectId: 2,
    title: "Metalwork",
    content: "This is a simple project centered around JavaScript, focusing on state management and the utilization of for loops.",
    link: "kathryn.mckean.github.io/memorygame/",
    floating : "n/a",
    thoughts: "kjk kk nwkdfn",
    img: "pics/floral.png",
    color: "#c76d9d",
  },
  {
    projectId: 3,
    title: "Prosthetics",
    content: "Develops CRUD skills through a simple note making page. You can create, read, update, and delete notes.",
    floating : "n/a",
    link: "kathryn.mckean.github.io/noteTaker/",
    thoughts: "j j dfljerje",
    img: "pics/pinkLeg.png",
    color: "#588157",
  },
  {
    projectId: 4,
    title: "2D",
    content: "A A webpage for a local petcare company. Utilized Figma to design the webpage.",
    floating : "n/a",
    link: "kathryn.mckean.github.io/MAYS/",
    thoughts: "  lkjseklsdfffff",
    img: "pics/us.png",
    color: "#4367aa",
  },
  {
    projectId: 5,
    title: "3D",
    content: "Using the giphy API, your fortune is told. The user inputs their question and a related gif is shown. Like a giphy search bar, but more interesting",
    floating : "n/a",
    link: "kathryn.mckean.github.io/gifFortune/",
    thoughts: "lsfljsf",
    img: "pics/woodsculpture.png",
    color: "#33158E",
  },
]

// so if i click between two folders I want it to open on the overview, so update the openfolder functions to reflect that



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
  // change buttons back to hidden by changing id to hideButtonLeft and hideButtonRight
  getLeftClick.id = "hideButtonLeft"
  getRightClick.id = "hideButtonRight"
  
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
let getLeftClick = document.querySelector('.clickLeft');
let getRightClick = document.querySelector('.clickRight')

function assignLeftRight(num) {
  // function that parses the number within the id of the opened folder, adds one, subtracts one, and assigns those to the buttons
  if (num>10) {
    num = (Number(num)-20)
    let leftButtonNumber = (Number(num)-1);
    leftButtonNumber = `pfolder${leftButtonNumber}`
    getLeftClick.id = `${leftButtonNumber}`;

    let rightButtonNumber = (Number(num)+1);
    rightButtonNumber = `pfolder${rightButtonNumber}`
    getRightClick.id = `${rightButtonNumber}`;
  } else {
  // the left button will be one less than the current folder
  let leftButtonNumber = (Number(num)-1);
   // add back in the word folder
  leftButtonNumber = `folder${leftButtonNumber}`
  // get the button's id and set it to the above
  getLeftClick.id = `${leftButtonNumber}`;
  
  let rightButtonNumber = (Number(num)+1);
   // add back in the word folder
  rightButtonNumber = `folder${rightButtonNumber}`
  // get the button's id and set it to the above
  getRightClick.id = `${rightButtonNumber}`;
}
}





let getThoughtsParagraph = document.getElementById('thoughtsParagraph')
let getThoughtsPicture = document.getElementById('thoughtsPicture')

function openFolder(xyz) {
  console.log('replacement open folder function')
  // remove 'folder' and youre left with the number uyou want to open
  let currentNumber = parseInt(xyz.replace("folder", ""))
  let indexNumber = (Number(currentNumber)-1);

  assignLeftRight(currentNumber);
  projectFrameOpening();

  const projectsData = projectData[indexNumber];

  let title = projectsData.title ?? "N/A";
  getTitle.innerHTML = `${title}`;

  let subtitleContent = projectsData.content ?? "N/A";
  getSubtitle.innerHTML = `${subtitleContent}`

  let floating = projectsData.floating ?? "N/A";
  getBulletPoints.innerHTML = `${floating}`;

  let link = projectsData.link ?? "N/A";
  getLink.setAttribute("href", `${link}`);

  let thoughtsContent = projectsData.thoughts ?? "N/A"
  getThoughtsParagraph.innerHTML = `${thoughtsContent}`;

  let imgContents = projectsData.img ?? "N/A"
  getThoughtsPicture.src = `${imgContents}`

}

function openPersonalFolder(xyz) {
  console.log('replacement open folder function')
  // remove 'folder' and youre left with the number uyou want to open
  let currentNumber = parseInt(xyz.replace("pfolder", ""))
  let indexNumber = (Number(currentNumber)-1);

  let makeDifferentNumber = (Number(currentNumber)+20)
  assignLeftRight(makeDifferentNumber);
  projectFrameOpening();

  const personalProjectsData = personalProjectData[indexNumber];

  let title = personalProjectsData.title ?? "N/A";
  getTitle.innerHTML = `${title}`;

  let subtitleContent = personalProjectsData.content ?? "N/A";
  getSubtitle.innerHTML = `${subtitleContent}`

  let floating = personalProjectsData.floating ?? "N/A";
  getBulletPoints.innerHTML = `${floating}`;

  let link = personalProjectsData.link ?? "N/A";
  getLink.setAttribute("href", `${link}`);

  let thoughtsContent = personalProjectsData.thoughts ?? "N/A"
  getThoughtsParagraph.innerHTML = `${thoughtsContent}`;

  let imgContents = personalProjectsData.img ?? "N/A"
  getThoughtsPicture.src = `${imgContents}`

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
// copies email to clipboard (not my code)
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Email address copied to clipboard');
    // show .confirm
    document.querySelector(".confirm").style.opacity = "100%"
    // after 4 seconds set opacity back to 0%
setTimeout(() => {
  document.querySelector(".confirm").style.opacity = "0%"
}, "1000");
    
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

// switches the highlighted tab itself
function openTab(id) {
  console.log(id);
  // on click add className focus to the tab with id id
  let allTabs = document.querySelectorAll('.innerTab');
  allTabs.forEach(function (elem) {
    elem.classList.remove('focus');
  });
  let selectedTab = document.querySelector(`#${id}`);
  selectedTab.classList.add('focus');
}

//runs when you click back
function resetInnerTabs() {
  //resets which tab is highlighted back to the overview tab
    let allTabs = document.querySelectorAll('.innerTab');
  allTabs.forEach(function (elem) {
    elem.classList.remove('focus');
  });
  let selectedTab = document.querySelector(`#tabOverview`);
  selectedTab.classList.add('focus');
}


let getMainBodyProjects = document.getElementById('mainBodyProjects')

function tabThoughtsLoadContents(id) {
  // switch the highlighted tab to 'thoughts'
  openTab(id);
  // switch from overview page to thoughts page
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

  let getThoughtsElements = document.querySelectorAll(".thoughts");

function tabOverviewLoadContents() {
  // switch the highlighted tab back to overview
  openTab('tabOverview');
  // switch from the thoughts page back to the overview
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




// i know this is really ugly, and I will come back and make it better but i'm trying not look up stuff this iteration
function scrollFolder(x) {
  if (x == "folder1") {
    openFolder('folder1')
  } else if (x == "folder2") {
    openFolder('folder2')
  }  else if (x == "folder3") {
    openFolder('folder3')
  }  else if (x == "folder4") {
    openFolder('folder4')
  }  else if (x == "folder5") {
    openFolder('folder5')
  } else if (x == "pfolder1") {
    openPersonalFolder('pfolder1')
  } else if (x == "pfolder2") {
    openPersonalFolder('pfolder2')
  } else if (x == "pfolder3") {
    openPersonalFolder('pfolder3')
  } else if (x == "pfolder4") {
    openPersonalFolder('pfolder4')
  } else if (x == "pfolder5") {
    openPersonalFolder('pfolder5')
  } else {
    return;
  }
}