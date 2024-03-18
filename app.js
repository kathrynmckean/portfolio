
let getProjectsPanel = document.getElementById("projectsPanelContents");
let getContactPanelContents = document.getElementById("contactPanelContents")


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
  } else {
   closeProjectsPanelContents();
  }
}
function closeProjectsPanelContents() {
    // when adding to this function you should likely add it to other panel functions
  // getProjectsPanel.style.animation = "1s slideOut";
  // setTimeout(() => {
    // timeout is so the animation can finish playing before the content becomes officially hidden
    getProjectsPanel.classList.remove("visible");
    getProjectsPanel.classList.add("hidden");
    // getProjectsPanel.style.display = "none";
    // reapplies the slideIn animation for future click
    // getProjectsPanel.style.animation = "1s slideIn";
  // }, 995);
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
    // getContactPanelContents.style.display = "none";
    // getContactPanelContents.style.animation = "1s slideInContact";
  // }, 995);
}


let getWaluigiContents = document.getElementById("waluigiContents");
let getMemoryContents = document.getElementById("memoryContents");

function openWaluigiContents() {
  console.log("hello waluigi")
  if (getMemoryContents.classList.contains("visible")) {
    closeMemoryContents();
  }
  if (getWaluigiContents.classList.contains("hidden")) {
    // getWaluigiContents.style.display = "flex";
    getWaluigiContents.classList.remove("hidden");
    getWaluigiContents.classList.add("visible");
  } else {
   closeWaluigiContents();
  }
}

function closeWaluigiContents() {
  console.log("goodbye waluigi")
    getWaluigiContents.style.animation = "1s slideOutProject";
  // setTimeout(() => {
    // timeout is so the animation can finish playing before the content becomes officially hidden
    getWaluigiContents.classList.remove("visible");
    getWaluigiContents.classList.add("hidden");
    // getWaluigiContents.style.display = "none";
    // reapplies the slideIn animation for future click
    // getWaluigiContents.style.animation = "1s slideInProject";
  // }, 980);
}

function openMemoryContents() {
  console.log("hello memory")
  if (getWaluigiContents.classList.contains("visible")) {
    closeWaluigiContents();
  }
  if (getMemoryContents.classList.contains("hidden")) {
    // getMemoryContents.style.display = "flex";
    getMemoryContents.classList.remove("hidden");
    getMemoryContents.classList.add("visible");
  } else {
   closeMemoryContents();
  }
}

function closeMemoryContents() {
  console.log("goodbye memory")
      // getMemoryContents.style.animation = "1s slideOutProject";
  // setTimeout(() => {
    // timeout is so the animation can finish playing before the content becomes officially hidden
    getMemoryContents.classList.remove("visible");
    getMemoryContents.classList.add("hidden");
    // getMemoryContents.style.display = "none";
    // reapplies the slideIn animation for future click
    // getMemoryContents.style.animation = "1s slideInProject";
  // }, 980);
}