
let getProjectWrapper = document.getElementById("projectWrapper")
let getAboutWrapper = document.getElementById("aboutWrapper")

function openProjectWrapper() {
  // when i click the project title i want to make the max-height of the wrapper 90vh
// check if the panel itself is open
// then check if the other panel is open
// if other panel is open then only close that panel and return
// if other panel isn't open then open only this panel

if (getAboutWrapper.classList.contains("open")) {
  getAboutWrapper.classList.remove("open");
} else if (!getProjectWrapper.classList.contains("open")) {
  getProjectWrapper.classList.add("open");
} else (getProjectWrapper.classList.remove("open"))
  
}


function openAboutWrapper() {
  // if the panel is closed then open both panels
if (getProjectWrapper.classList.contains("open")) {
  if(getAboutWrapper.classList.contains("open") ) {
    getAboutWrapper.classList.remove("open")
    getProjectWrapper.classList.remove("open")
    return
  } else {
    getAboutWrapper.classList.add("open")
    return
  }

} else {
  getAboutWrapper.classList.add("open")
  getProjectWrapper.classList.add("open")
}
}