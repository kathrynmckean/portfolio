
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
  getAboutContents.classList.remove("open");
} else if (!getProjectContents.classList.contains("open")) {
 getProjectContents.classList.add("open");
} else (getProjectContents.classList.remove("open"))
  
}


function openAboutContents() {
  // if the panel is closed then open both panels
if (getProjectContents.classList.contains("open")) {
  if(getAboutContents.classList.contains("open") ) {
    getAboutContents.classList.remove("open")
    getProjectContents.classList.remove("open")
    return
  } else {
    getAboutContents.classList.add("open")
    return
  }

} else {
  getAboutContents.classList.add("open")
  getProjectContents.classList.add("open")
}
}


let getTitle = document.getElementById("mainTitle");
let getSubtitle = document.getElementById("mainSubtitle");
let getBulletPoints = document.getElementById("mainBulletPoints");
let getLink = document.getElementById("mainLink");

function openWaluigiContents() {
//   show projectFrame
//   hide folderFrame
  projectFrameOpening();
  getTitle.innerHTML = "Waluigi Jail";
  getSubtitle.innerHTML = "This is an introductory web development project intended to develop HTML, CSS, and JavaScript skills. Users interact with the central image, triggering dynamic transformations and text display with each click, demonstrating foundational coding proficiency and creativity."
  getBulletPoints.innerHTML = "123";
  getLink.setAttribute("href", "kathryn.mckean.github.io/waluigijail/");
}

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