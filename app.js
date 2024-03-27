
let getProjectsPanel = document.getElementById("projectsPanelContents");
let getContactPanelContents = document.getElementById("contactPanelContents");
let getInnerProjectFrame = document.getElementById("projectContentsFrame");
let getWaluigiContents = document.getElementById("waluigiContents");
let getMemoryContents = document.getElementById("memoryContents");
let getFolders = document.getElementById("projectCardFrame");
let getTitle = document.getElementById("mainTitle");
let getSubtitle = document.getElementById("mainSubtitle");
let getBulletPoints = document.getElementById("mainBulletPoints");
let getLink = document.getElementById("mainLink");
let getMeDescriptor = document.getElementById("meDescriptor");

function closePanels() {
   if (getContactPanelContents.classList.contains("visible")) {closeContactPanelContents()}
   if (getProjectsPanel.classList.contains("visible")) {closeProjectsPanelContents()} 
}

function openProjectsPanelContents() {
  // when adding to this function you should likely add it to other panel functions
  // if another panel is open, close it while opening this panel
  if (getContactPanelContents.classList.contains("visible")) {
    closeContactPanelContents();
  }
  //   if .PPC is hidden, change .ProjectsPanelContents display to visible
  if (getProjectsPanel.classList.contains("hidden")) {
    // getProjectsPanel.style.display = "flex";
       getProjectsPanel.classList.remove("hidden");
    getProjectsPanel.classList.add("visible");
    // when you open the projects panel the folders frame will automatically appear after 1s
    // setTimeout (() => {
      getFolders.classList.remove("hidden")
    getFolders.classList.add("visible")
    // }, 500);
//     make the excess page shrink
    // document.getElementById("shrink").style.flexGrow = ".001";
    // document.getElementById("shrink").style.maxHeight = "0px";
//     hide descriptor
    getMeDescriptor.style.display = "none";
  } else {
   closeProjectsPanelContents();
  }
}
function closeProjectsPanelContents() {
    getProjectsPanel.classList.remove("visible");
    getProjectsPanel.classList.add("hidden");
      //     make the excess page grow
    // document.getElementById("shrink").style.flexGrow = "1";
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


function openContactPanelContents() {
  console.log("open contact")
if (getProjectsPanel.classList.contains("visible")) {
closeProjectsPanelContents();
}

  if (getContactPanelContents.classList.contains("hidden")) {
    // getContactPanelContents.style.display = "flex";
    getContactPanelContents.classList.remove("hidden");
    getContactPanelContents.classList.add("visible");
    //     hide descriptor
    // getMeDescriptor.style.display = "none";
    //     make the excess page shrink
    // document.getElementById("shrink").style.flexGrow = ".001";
  } else {
    closeContactPanelContents();
  }
}
function closeContactPanelContents() {
    // when adding to this function you should likely add it to other panel functions
  // getContactPanelContents.style.animation = "1s slideOutContact";
  // setTimeout(() => {
    getContactPanelContents.classList.remove("visible");
    getContactPanelContents.classList.add("hidden");
  //     make the excess page grow
    // document.getElementById("shrink").style.flexGrow = "1";
    // getContactPanelContents.style.display = "none";
    // getContactPanelContents.style.animation = "1s slideInContact";
  // }, 995);
}




function openWaluigiContents() {
hideFolders();
  setTimeout (() => {
showProjectContents();
    }, 100)
  getTitle.innerHTML = "Waluigi Jail";
  getSubtitle.innerHTML = "This is an introductory web development project intended to develop HTML, CSS, and JavaScript skills. Users interact with the central image, triggering dynamic transformations and text display with each click, demonstrating foundational coding proficiency and creativity."
  getBulletPoints.innerHTML = "123";
  getLink.setAttribute("href", "kathryn.mckean.github.io/waluigijail/");
}
function openMemoryContents() {
hideFolders();
  setTimeout (() => {
showProjectContents();
     }, 100)
  getTitle.innerHTML = "Memory Game";
  getSubtitle.innerHTML = "This is a simple project centered around JavaScript, focusing on state management and the utilization of for loops."
  getBulletPoints.innerHTML = "1234";
  getLink.setAttribute("href", "kathryn.mckean.github.io/memorygame/");
}

function showFolders() {
  console.log("go back to folder screen");
  setTimeout (() => {
  getFolders.classList.remove("hidden");
  getFolders.classList.add("visible");
          }, 300)
  getProjectContents.classList.remove('visible');
  getProjectContents.classList.add("hidden");
}

function hideFolders() {
 console.log("hiding folders");
 getFolders.classList.remove("visible");
 getFolders.classList.add("hidden");
}

let getProjectContents = document.getElementById("projectContentsFrame");

function showProjectContents() {
  console.log("showing content frame")    
  getProjectContents.classList.remove('hidden');
  getProjectContents.classList.add("visible");
}
