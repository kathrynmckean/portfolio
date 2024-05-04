// I want to finish what I've got before going back and changing it to be more dynamic

const projectData = [
  {
    projectId: 1,
    title: "Waluigi Jail",
    content: "A project intended to develop HTML, CSS, and JavaScript skills. Users interact with the central image, triggering dynamic transformations and text display with each click, demonstrating foundational coding proficiency and creativity.",
    floating : ['HTML', 'CSS', 'JS', 'Design'],
    link: "https://kathrynmckean.github.io/waluigiJail/",
    thoughts: "I think this is a very silly project. It was actually the first project I had ever worked on, but I value it as a building block toward larger projects.",
    img: "pics/firstWaPic.png",
    color: "#7e0cd6",
    className: "waluigiJail",
    folderNum: 'folder1',
    type: "Coding",
  },
  {
    projectId: 2,
    title: "Memory Game",
    content: "This is a simple project centered around JavaScript, focusing on state management and the utilization of for loops.",
    link: "https://kathrynmckean.github.io/NoteTaker/",
    floating : ['HTML', 'CSS', 'JS', 'For Loops'],
    thoughts: "kjk kk nwkdfn",
    img: "pics/finishedMG.png",
    color: "#c76d9d",
    className: "memoryGame",
    folderNum: 'folder2',
    type: "Coding",
  },
  {
    projectId: 3,
    title: "Note Taker",
    content: "Develops CRUD skills through a simple note making page. You can create, read, update, and delete notes.",
    floating : ['HTML', 'CSS', 'JS', 'CRUD', 'Firebase'],
    link: "https://kathrynmckean.github.io/noteTaker/",
    thoughts: "As the next step, the project aims to integrate Firebase for convenient note storage and access. Currently, the app is simply a proof of CRUD skills, adding a database will make it functional.",
    img: "me.png",
    color: "#588157",
    className: "noteTaker",
    folderNum: 'folder3',
    type: "Coding",
  },
  {
    projectId: 4,
    title: "MAYS (Pet Care)",
    content: "A A webpage for a local petcare company. Utilized Figma to design the webpage.",
    floating : ['HTML', 'CSS', 'JS', 'Figma'],
    link: "https://kathrynmckean.github.io/MAYS/",
    thoughts: "  lkjseklsdfffff",
    img: "me.png",
    color: "#4367aa",
    className: "petCare",
    folderNum: 'folder4',
    type: "Coding",
  },
  {
    projectId: 5,
    title: "Gif Fortune Teller",
    content: "Using the giphy API, your fortune is told. The user inputs their question and a related gif is shown. Like a giphy search bar, but more interesting",
    floating : ['GiphyAPI', 'SVG Design', 'JS', 'Design'],
    link: "https://kathrynmckean.github.io/gifFortune/",
    thoughts: "lsfljsf",
    img: "me.png",
    color: "#33158E",
    className: "gifFortune",
    folderNum: 'folder5',
    type: "Coding",
  },
]



const personalProjectData = [
  {
    projectId: 1,
    title: "ET: The Lamp",
    content: "Made with additive and reductive methods. Lightweight two-part epoxy clay created the basic form which was then sculpted by hand (and dremel)",
    floating : ['Design', 'Handbuilding', 'kdkjdf', 'dlk'],
    // link: "kathryn.mckean.github.io/waluigijail/",
    thoughts: "This was made for someone who loves ET and ambient lighting.",
    img: "pics/et1.png",
    color: "#7e0cd6",
    className: "ET",
    folderNum: 'pfolder1',
    type: "Personal",
    visibility: "hidden"
  },
  {
    projectId: 2,
    title: "Metalwork",
    content: "This is a simple project centered around JavaScript, focusing on state management and the utilization of for loops.",
    link: "kathryn.mckean.github.io/memorygame/",
    floating : ['Welding', 'Lost Wax Casting', 'Sand Casting', 'Design',],
    thoughts: "kjk kk nwkdfn",
    img: "pics/floral.png",
    color: "#c76d9d",
    className: "Metalwork",
    folderNum: 'pfolder2',
    type: "Personal",
    visibility: "hidden"
  },
  {
    projectId: 3,
    title: "Prosthetics",
    content: "Develops CRUD skills through a simple note making page. You can create, read, update, and delete notes.",
    floating : ['Chair-side Manner', 'Lost Wax Casting', '3D Printing', 'CAD', 'Resin Lamination'],
    link: "kathryn.mckean.github.io/noteTaker/",
    thoughts: "j j dfljerje",
    img: "pics/pinkLeg.png",
    color: "#588157",
    className: "Prosthetics",
    folderNum: 'pfolder3',
    type: "Personal",
    visibility: "hidden"
  },
  {
    projectId: 4,
    title: "2D",
    content: "A A webpage for a local petcare company. Utilized Figma to design the webpage.",
    floating : ['HTML', 'CSS', 'JS', 'Design'],
    link: "kathryn.mckean.github.io/MAYS/",
    thoughts: "  lkjseklsdfffff",
    img: "pics/us.png",
    color: "#4367aa",
    className: "2D",
    folderNum: 'pfolder4',
    type: "Personal",
    visibility: "hidden"
  },
  {
    projectId: 5,
    title: "3D",
    content: "Using the giphy API, your fortune is told. The user inputs their question and a related gif is shown. Like a giphy search bar, but more interesting",
    floating : ['HTML', 'CSS', 'JS', 'Design'],
    link: "kathryn.mckean.github.io/gifFortune/",
    thoughts: "lsfljsf",
    img: "pics/woodsculpture.png",
    color: "#33158E",
    className: "3D",
    folderNum: 'pfolder5',
    type: "Personal",
    visibility: "hidden"
  },
]

//defining all the variables
let getHeader = document.querySelector(".header");
let getProjectWrapper = document.getElementById("projectWrapper")
let getProjectContents = document.getElementById("projectContents")
let getAboutContents = document.getElementById("aboutContents")
let getTitle = document.getElementById("mainTitle");
let getSubtitle = document.getElementById("mainSubtitle");
let getBulletPoints = document.getElementById("mainBulletPoints");
let getLink = document.getElementById("mainLink");
let getMainBody = document.getElementById("mainBody");
let getPersonalTabTitle = document.querySelector(".tab.personal")
let getCodingTabTitle = document.querySelector('.tab.coding')
let getLeftClick = document.querySelector('.clickLeft');
let getRightClick = document.querySelector('.clickRight')
let getThoughtsParagraph = document.getElementById('thoughtsParagraph')
let getThoughtsPicture = document.getElementById('thoughtsPicture')



// ~~~~~~~ FUNCTIONS THAT CONTROL PANEL OPENING/CLOSING

function openProjectContents() {  // determines if the panels are open and opens/closes the panels accordingly
  if (getAboutContents.classList.contains("open")) { closeAbout() } 
    else if (!getProjectContents.classList.contains("open")) { openProjects() } 
    else (closeProjects())
  }


function openProjects() { // does the actual opening
  console.log('open projects')
  getProjectContents.style.maxHeight = 'calc(100vh - 190px)';
  getProjectContents.classList.add("open")
  changeHeaderSize();
}

function closeProjects() { // does the actual closing
  console.log('close projects')
  getProjectContents.style.maxHeight = '0px';
  getProjectContents.classList.remove("open");
  changeHeaderSize();
}

function openAboutContents() { // determines if the panels are open and opens/closes the panels accordingly
  if (getProjectContents.classList.contains('open')) {
    if(getAboutContents.classList.contains('open')) {
      closeAbout();
      closeProjects();
      return;
    } else {
       openAbout();
       return; }}
      else {
        openAbout();
        openProjects(); 
     }}


function openAbout() { // does the actual opening
  getAboutContents.style.maxHeight = 'calc(100vh - 190px)';
  getAboutContents.classList.add('open');
  changeHeaderSize();
}

function closeAbout() { // does the actual closing
  getAboutContents.style.maxHeight = '0px';
  getAboutContents.classList.remove('open');
  changeHeaderSize();
}

// when header is clicked close both panels 
function closeAllPanels() {
  closeAbout();
  closeProjects();
  changeHeaderSize();
}

function changeHeaderSize() { //when you open a panel the header shrinks to fit snugly alongside the panel title

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


// ~~~~~~~~ FUNCTIONS WITHIN THE 'PROJECT' PANEL

function projectFrameOpening() { // when you click open a folder, the project contents are shown
  document.getElementById("projectFrame").classList.remove("hidden");
  document.getElementById("folderFrame").classList.add("hidden");
}

function projectFrameClosing() { // runs when the back button is pressed, shows the list of folders again
  // Reset the inner tabs so the next folder opened will open on the overview
  resetInnerTabs();
  tabOverviewLoadContents();
  // shows all the folders again
    document.getElementById("projectFrame").classList.add("hidden");
    document.getElementById("folderFrame").classList.remove("hidden");
  // change buttons back to hidden by changing id to hideButtonLeft and hideButtonRight
  getLeftClick.id = "hideButtonLeft";
  getRightClick.id = "hideButtonRight";
}

function showPersonalFolders() { // This hides the coding folders and instead shows the personal folders
  getMainBody.classList.add("personal");
  getMainBody.classList.remove("coding");
  
  // highlights the personal tab, unhighlights the coding tab
  getPersonalTabTitle.classList.add('focus');
  getCodingTabTitle.classList.remove('focus')
  
  // query selector all for class of folder and coding, add hidden
  let getCodingFolders = document.querySelectorAll(".folder.Coding");
  getCodingFolders.forEach(function (elem) {
    elem.classList.add('hidden');
  });
  // show personal projects
  // same thing, but remove hidden
  let getPersonalFolders = document.querySelectorAll(".folder.Personal");
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
  let getCodingFolders = document.querySelectorAll(".folder.Coding");
  getCodingFolders.forEach(function (elem) {
    elem.classList.remove('hidden');
  });
  // hide personal projects
  // same thing, but add hidden
  let getPersonalFolders = document.querySelectorAll(".folder.Personal");
  getPersonalFolders.forEach(function (elem) {
    elem.classList.add('hidden');
  });
}


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


function openCodingFolder(xyz) {
  
  tabOverviewLoadContents()
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


  getBulletPoints.innerHTML = ''
  let floating = projectsData.floating ?? [];
  const floatingItems = floating.map((item) => {
let makeListItem = document.createElement('li', `${item}`)
makeListItem.innerHTML = item;
getBulletPoints.appendChild(makeListItem);
  })

  let link = projectsData.link ?? "N/A";
  getLink.setAttribute("href", `${link}`);
  getLink.setAttribute('target', '_blank')

  let thoughtsContent = projectsData.thoughts ?? "N/A"
  getThoughtsParagraph.innerHTML = `${thoughtsContent}`;

  let imgContents = projectsData.img ?? "N/A"
  getThoughtsPicture.src = `${imgContents}`
}

function openPersonalFolder(xyz) {
  tabOverviewLoadContents()
  
  if (xyz.includes('p')){

  
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

  getBulletPoints.innerHTML = ''
  let floating = personalProjectsData.floating ?? [];
  const floatingPersonalItems = floating.map((item) => {
let makeListItem = document.createElement('li', `${item}`)
makeListItem.innerHTML = item;
getBulletPoints.appendChild(makeListItem);

  })
  
  getLink.classList.add('hidden')

  let thoughtsContent = personalProjectsData.thoughts ?? "N/A"
  getThoughtsParagraph.innerHTML = `${thoughtsContent}`;

  let imgContents = personalProjectsData.img ?? "N/A"
  getThoughtsPicture.src = `${imgContents}`
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
    openCodingFolder('folder1');
  } else if (x == "folder2") {
    openCodingFolder('folder2')
  }  else if (x == "folder3") {
    openCodingFolder('folder3')
  }  else if (x == "folder4") {
    openCodingFolder('folder4')
  }  else if (x == "folder5") {
    openCodingFolder('folder5')
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

function createFolderIcon(passedInItem) {
  
  // create case div ( id folder(x) ) (class of (folder, coding/personal, className(fromarray))
  let createContainerDiv = document.createElement('div')
  createContainerDiv.setAttribute("class", `${passedInItem.className} folder ${passedInItem.type} ${passedInItem.visibility}`)
  createContainerDiv.setAttribute('id', `${passedInItem.folderNum}`)
  createContainerDiv.setAttribute('onclick', `open${passedInItem.type}Folder(this.id)`)
  
  // child div class folderBack
  let createFolderBack = document.createElement('div')
  createFolderBack.setAttribute('class', 'folderBack')
  
  // child div class folderTab and append to folderBack
  let createFolderTab = document.createElement('div')
  createFolderTab.setAttribute('class', 'folderTab')
  createFolderBack.appendChild(createFolderTab);
  
  // child div class folderFront with style="background color = color(fromarray)" and append to folderBack
  let createFolderFront = document.createElement('div')
  createFolderFront.setAttribute('class', 'folderFront')
  createFolderFront.style.backgroundColor = `${passedInItem.color}`
  createFolderBack.appendChild(createFolderFront);
  
  // append the icon to the container
  createContainerDiv.appendChild(createFolderBack);
  
  // find the folder container and append folder to it
  getMainBody.appendChild(createContainerDiv)
  
   // child h5 class folderTitle with innerHTML = className(fromArray)
  let createFolderTitle = document.createElement('h5')
  createFolderTitle.setAttribute('class',"folderTitle")
  createFolderTitle.innerHTML= `${passedInItem.className}`
  createContainerDiv.appendChild(createFolderTitle);
  
}

function preload() {
  projectData.forEach((item) => {
    createFolderIcon(item);
  });
  personalProjectData.forEach((item) => {
    createFolderIcon(item);
  })
  // theres a known problem with google icons where it takes a split second to initially load the icons. So that's why I'm preloading them to prevent that being visible to the user.
  getLeftClick.id = `show`;
  getRightClick.id = "show";
  setTimeout(() => {
    getLeftClick.id = `hideButtonLeft`;
    getRightClick.id = "hideButtonRight";
  }, "300");

  let getFirstPage = document.getElementById('firstPage')
  getFirstPage.style.height = 'calc(100vh - 190px)';
  
} preload()