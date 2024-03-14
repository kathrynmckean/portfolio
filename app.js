function openRightPanelContents() {
    console.log("open projects");
  //   if .RPC has a diisplay of none, change .rightPanelContents display to visible
    let getRightPanel = document.getElementById("rightPanelContents");
   if (getRightPanel.classList.contains("hidden")){
     getRightPanel.style.display = "flex";
     getRightPanel.classList.remove("hidden");
   } else {
     getRightPanel.style.animation = "1s slideout";
     setTimeout(() => {getRightPanel.classList.add("hidden");
     getRightPanel.style.display = 'none'; getRightPanel.style.animation = "1s slidein";}, 990)
     
   }
    
     // document.getElementById("rightPanelContents").style.display = "flex";
    
    //if .rpc has a class of flex then change to none
    
  }