function openProjectsPanelContents() {
  console.log("open projects");
  //   if .RPC has a diisplay of none, change .ProjectsPanelContents display to visible
  let getProjectsPanel = document.getElementById("projectsPanelContents");
  if (getProjectsPanel.classList.contains("hidden")) {
    getProjectsPanel.style.display = "flex";
    getProjectsPanel.classList.remove("hidden");
  } else {
    getProjectsPanel.style.animation = "1s slideOut";
    setTimeout(() => {
      getProjectsPanel.classList.add("hidden");
      getProjectsPanel.style.display = "none";
      getProjectsPanel.style.animation = "1s slideIn";
    }, 990);
  }

  // document.getElementById("projectsPanelContents").style.display = "flex";

  //if .rpc has a class of flex then change to none
}
