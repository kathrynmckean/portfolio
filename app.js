// I want to finish what I've got before going back and changing it to be more dynamic

const projectData = [
  {
    projectId: 1,
    title: "Gif Fortune Teller",
    content:
      "Using the giphy API, your fortune is told. The user inputs their question and a tangentially related gif is shown. In essence this is a giphy search bar, but more interesting.",
    floating: ["GiphyAPI", "SVG Design", "HTML/CSS/JS"],
    link: "https://kathrynmckean.github.io/gifFortune/",
    thoughts:
      "I wanted to call an API to return some sort of data but I wanted to make it fun and unusual. If I were to update it I would change the styling and placements, but I'm happy to have made something unexpected.",
    img: "pics/gifFortune1.png",
    color: "#33158E",
    className: "gifFortune",
    type: "Coding",
  },
  {
    projectId: 2,
    title: "MAYS (Pet Care)",
    content:
      "A webpage for a local petcare company that offers dog walking and house sitting. Figma was used to design a one-page website that leads users from introduction to booking. My goal was to keep it simple and focus on their goal: earning a new client's trust.",
    floating: ["Figma", "UI/UX Design", "Visual Hierarchy"],
    link: "https://dribbble.com/shots/23650506-Michelle-At-Your-Service?utm_source=Clipboard_Shot&utm_campaign=KMcKean&utm_content=Michelle%20At%20Your%20Service&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=KMcKean&utm_content=Michelle%20At%20Your%20Service&utm_medium=Social_Share",
    thoughts:
      "I love the use of one-page websites for small businesses; the current MAYS site is overloaded with content and difficult to navigate.",
    img: "pics/MAYSfrontpage.png",
    color: "#4367aa",
    className: "petCare",
    type: "Coding",
  },
  {
    projectId: 3,
    title: "Note Taker",
    content:
      "Develops CRUD skills through a simple note making page. You can create, read, update, and delete notes.",
    floating: ["HTML", "CSS", "JS", "CRUD"],
    link: "https://kathrynmckean.github.io/NoteTaker/",
    thoughts:
      "As the next step, the project aims to integrate Firebase for convenient note storage and access. Currently, the app is simply a proof of CRUD skills, adding a database will make it functional.",
    img: "pics/notes.png",
    color: "#588157",
    className: "noteTaker",
    type: "Coding",
  },

  {
    projectId: 4,
    title: "Memory Game",
    content:
      "This is a simple project centered around JavaScript, focusing on state management and the utilization of for loops.",
    link: "https://kathrynmckean.github.io/memoryGame/",
    floating: ["HTML", "CSS", "JS", "Game States"],
    thoughts:
      "Most real-life projects won't resemble a game, but building this helped me understand arrays and for loops which are essential to web development.",
    img: "pics/finishedMG.png",
    color: "#c76d9d",
    className: "memoryGame",
    type: "Coding",
  },
  {
    projectId: 5,
    title: "Waluigi Jail",
    content:
      "A project intended to develop HTML, CSS, and JavaScript skills. Users interact with the central image, triggering dynamic transformations and text display with each click, demonstrating foundational coding proficiency and creativity.",
    floating: ["HTML", "CSS", "JS"],
    link: "https://kathrynmckean.github.io/waluigiJail/",
    thoughts:
      "I think this is a very silly project. It was actually the first project I had ever worked on, but I value it as a building block toward larger projects.",
    img: "pics/firstWaPic.png",
    color: "#7e0cd6",
    className: "waluigiJail",
    type: "Coding",
  },
];

const personalProjectData = [
  // so the personal project folders are mostly just holding photos with some text at the start. I'll have an array of photos and one or two text blocks.
  {
    projectId: "p1",
    title: "ET: The Lamp",
    content:
      "Made with additive and reductive methods. Lightweight two-part epoxy clay created the basic form which was then sculpted by hand (and dremel). This was made for someone who loves ET and ambient lighting. Astute observers will notice that ET's eyes are the brown instead of his signature blue.",
    floating: ["Design", "Handbuilding"],
    // thoughts: "",
    img: "pics/et1.png",
    images: ["pics/et1.png", "pics/et2.png", "pics/et3.png", 'pics/et4.png'],
    color: "#36468F",
    className: "ET",
    type: "Personal",
    visibility: "hidden",
  },
  {
    projectId: "p2",
    title: "Metalwork",
    content:
      "My time in metalwork has developed skills in welding, lost wax casting, and sand casting. Small-scale metalwork is a new development, but I love being able to make my friends and family handmade jewelry.",
    link: "kathryn.mckean.github.io/memorygame/",
    floating: ["Welding", "Lost Wax Casting", "Sand Casting"],
    img: "pics/floral.png",
    color: "#A0A4B8",
    className: "Metalwork",
    type: "Personal",
    visibility: "hidden",
    images: ["pics/floral.png", "pics/hollow.png", "pics/fishy.png"],
  },
  {
    projectId: "p3",
    title: "Prosthetics",
    content:
      "I've worked in this field since 2020, fabricating both facial and limb prosthetics. My work, although uncredited, was featured on the TLC show Body Parts. I also grew a decently sized following online, amassing 7 million likes and 60,000 followers for my prosthetic content.",
    floating: [
      "Chair-side Manner",
      "Lost Wax Casting",
      "3D Printing",
      "CAD",
      "Resin Lamination",
    ],
    link: "kathryn.mckean.github.io/noteTaker/",
    img: "pics/pinkLeg.png",
    color: "#8F7268",
    className: "Prosthetics",
    type: "Personal",
    visibility: "hidden",
    images: ["pics/pinkLeg.png", "pics/largeOffset.png", "pics/horses.png"],
  },
  {
    projectId: "p4",
    title: "2D",
    content:
      "Although textiles could be classified as 3D, I typically use fabric and other materials to bring drawings to life and thus have grouped them together. Drawing is a building block that anybody can hone and use toward other projects.",
    floating: ["HTML", "CSS", "JS", "Design"],
    link: "kathryn.mckean.github.io/MAYS/",
    img: "pics/us.png",
    color: "#4367aa",
    className: "2D",
    type: "Personal",
    visibility: "hidden",
    images: ["pics/snooop.png", "pics/zeppo.png", "pics/us.png"],
  },
  {
    projectId: "p5",
    title: "3D",
    content:
      "When you have access to a wood cutting laser, you've gotta put it to good use! But there's a ton of materials to make art with, such as clay, monster clay (an oil-based clay), wax. Snoopy and my mini-me were both sculpted in oil-based clay and then cast in other materials like liquid plastic or resin.",
    floating: ["HTML", "CSS", "JS", "Design"],
    link: "kathryn.mckean.github.io/gifFortune/",
    img: "pics/woodsculpture.png",
    color: "#33158E",
    className: "3D",
    type: "Personal",
    visibility: "hidden",
    images: ["pics/woodsculpture.png", "pics/snoop.png", "pics/bust.png"],
  },
];

//defining all the variables
let getHeader = document.querySelector(".header");
let getProjectWrapper = document.getElementById("projectWrapper");
let getProjectContents = document.getElementById("projectContents");
let getAboutContents = document.getElementById("aboutContents");
let getTitle = document.getElementById("mainTitle");
let getSubtitle = document.getElementById("mainSubtitle");
let getBulletPoints = document.getElementById("mainBulletPoints");
let getLink = document.getElementById("mainLink");
let getMainBody = document.getElementById("mainBody");
let getPersonalTabTitle = document.querySelector(".tab.personal");
let getCodingTabTitle = document.querySelector(".tab.coding");
let getTabOverview = document.getElementById("tabOverview");
let getTabThoughts = document.getElementById("tabThoughts");
let getTabPictures = document.getElementById("tabPictures");
let getLeftClick = document.querySelector(".clickLeft");
let getRightClick = document.querySelector(".clickRight");
let getThoughtsParagraph = document.getElementById("thoughtsParagraph");
let getThoughtsPicture = document.getElementById("thoughtsPicture");

// ~~~~~~~ FUNCTIONS THAT CONTROL PANEL OPENING/CLOSING

function openProjectContents() {
  // determines if the panels are open and opens/closes the panels accordingly
  if (getAboutContents.classList.contains("open")) {
    closeAbout();
  } else if (!getProjectContents.classList.contains("open")) {
    openProjects();
  } else closeProjects();
}

function openProjects() {
  // does the actual opening
  console.log("open projects");
  getProjectContents.style.maxHeight = "calc(100vh - 190px)";
  getProjectContents.classList.add("open");
  changeHeaderSize();
}

function closeProjects() {
  // does the actual closing
  console.log("close projects");
  getProjectContents.style.maxHeight = "0px";
  getProjectContents.classList.remove("open");
  changeHeaderSize();
}

function openAboutContents() {
  // determines if the panels are open and opens/closes the panels accordingly
  if (getProjectContents.classList.contains("open")) {
    if (getAboutContents.classList.contains("open")) {
      closeAbout();
      closeProjects();
      return;
    } else {
      openAbout();
      return;
    }
  } else {
    openAbout();
    openProjects();
  }
}

function openAbout() {
  // does the actual opening
  getAboutContents.style.maxHeight = "calc(100vh - 190px)";
  getAboutContents.classList.add("open");
  changeHeaderSize();
}

function closeAbout() {
  // does the actual closing
  getAboutContents.style.maxHeight = "0px";
  getAboutContents.classList.remove("open");
  changeHeaderSize();
}

// when header is clicked close both panels
function closeAllPanels() {
  closeAbout();
  closeProjects();
  changeHeaderSize();
}

function changeHeaderSize() {
  //when you open a panel the header shrinks to fit snugly alongside the panel title

  if (getAboutContents.classList.contains("open")) {
    getHeader.classList.add("smallFont");
    getHeader.classList.remove("bigFont");
    console.log("make small??");
  } else if (getProjectContents.classList.contains("open")) {
    getHeader.classList.add("smallFont");
    getHeader.classList.remove("bigFont");
    console.log("make small??");
  } else {
    getHeader.classList.remove("smallFont");
    getHeader.classList.add("bigFont");
    console.log("make big??");
  }
}

// ~~~~~~~~ FUNCTIONS WITHIN THE 'PROJECT' PANEL

function projectFrameOpening() {
  // when you click open a folder, the project contents are shown
  document.getElementById("projectFrame").classList.remove("hidden");
  document.getElementById("folderFrame").classList.add("hidden");
}

function projectFrameClosing() {
  // runs when the back button is pressed, shows the list of folders again
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

function showPersonalFolders() {
  // This hides the coding folders and instead shows the personal folders
  getMainBody.classList.add("personal");
  getMainBody.classList.remove("coding");

  // highlights the personal tab, unhighlights the coding tab
  getPersonalTabTitle.classList.add("focus");
  getCodingTabTitle.classList.remove("focus");

  // query selector all for class of folder and coding, add hidden
  let getCodingFolders = document.querySelectorAll(".folder.Coding");
  getCodingFolders.forEach(function (elem) {
    elem.classList.add("hidden");
  });
  // show personal projects
  // same thing, but remove hidden
  let getPersonalFolders = document.querySelectorAll(".folder.Personal");
  getPersonalFolders.forEach(function (elem) {
    elem.classList.remove("hidden");
  });
}

function showCodingFolders() {
  getMainBody.classList.remove("personal");
  getMainBody.classList.add("coding");

  getPersonalTabTitle.classList.remove("focus");
  getCodingTabTitle.classList.add("focus");
  // show coding projects
  // query selector all for class of folder and coding, remove hidden
  let getCodingFolders = document.querySelectorAll(".folder.Coding");
  getCodingFolders.forEach(function (elem) {
    elem.classList.remove("hidden");
  });
  // hide personal projects
  // same thing, but add hidden
  let getPersonalFolders = document.querySelectorAll(".folder.Personal");
  getPersonalFolders.forEach(function (elem) {
    elem.classList.add("hidden");
  });
}

function assignLeftRight(num) {
  // function that parses the number within the id of the opened folder, adds one, subtracts one, and assigns those to the buttons
  if (num > 10) {
    num = Number(num) - 20;
    let leftButtonNumber = Number(num) - 1;
    leftButtonNumber = `folderp${leftButtonNumber}`;
    getLeftClick.id = `${leftButtonNumber}`;

    let rightButtonNumber = Number(num) + 1;
    rightButtonNumber = `folderp${rightButtonNumber}`;
    getRightClick.id = `${rightButtonNumber}`;
  } else {
    // the left button will be one less than the current folder
    let leftButtonNumber = Number(num) - 1;
    // add back in the word folder
    leftButtonNumber = `folder${leftButtonNumber}`;
    // get the button's id and set it to the above
    getLeftClick.id = `${leftButtonNumber}`;

    let rightButtonNumber = Number(num) + 1;
    // add back in the word folder
    rightButtonNumber = `folder${rightButtonNumber}`;
    // get the button's id and set it to the above
    getRightClick.id = `${rightButtonNumber}`;
  }
}




function openCodingFolder(xyz) {

  if (getTabOverview.classList.contains("hidden")) {
    getTabOverview.classList.remove("hidden");
  }
  if (getTabThoughts.classList.contains("hidden")) {
    getTabThoughts.classList.remove("hidden");
  }
  if (!getTabPictures.classList.contains("hidden")) {
    getTabPictures.classList.add("hidden");
  }

  

  // remove 'folder' and youre left with the number uyou want to open
  let currentNumber = parseInt(xyz.replace("folder", ""));
  let indexNumber = Number(currentNumber) - 1;

  assignLeftRight(currentNumber);
  projectFrameOpening();

  const projectsData = projectData[indexNumber];

  let title = projectsData.title ?? "N/A";
  getTitle.innerHTML = `${title}`;

  let subtitleContent = projectsData.content ?? "N/A";
  getSubtitle.innerHTML = `${subtitleContent}`;

  getBulletPoints.innerHTML = "";
  let floating = projectsData.floating ?? [];
  const floatingItems = floating.map((item) => {
    let makeListItem = document.createElement("li", `${item}`);
    makeListItem.innerHTML = item;
    getBulletPoints.appendChild(makeListItem);
  });

  let link = projectsData.link ?? "N/A";
  getLink.setAttribute("href", `${link}`);
  getLink.setAttribute("target", "_blank");
  if (getLink.classList.contains("hidden")) {
    getLink.classList.remove("hidden");
    console.log("removing hidden from link");
  }

  let thoughtsContent = projectsData.thoughts ?? "N/A";
  getThoughtsParagraph.innerHTML = `${thoughtsContent}`;

  let imgContents = projectsData.img ?? "N/A";
  getThoughtsPicture.src = `${imgContents}`;

  tabOverviewLoadContents();
}


let currentImageArray = [];
let currentImageArrayIndex = 0;
let currentImageArrayMax = 0;
// let currentImageArrayMin = 0;

function openPersonalFolder(folderId) {
    currentImageArray = [];
    currentImageArrayIndex = 0;
    currentImageArrayMax = 0;
    getPicNavLeft.classList.add("gray")
    getPicNavRight.classList.remove("gray")
  // tabOverviewLoadContents()

  if (!getTabOverview.classList.contains("hidden")) {
    getTabOverview.classList.add("hidden");
  }
  if (!getTabThoughts.classList.contains("hidden")) {
    getTabThoughts.classList.add("hidden");
  }
  if (getTabPictures.classList.contains("hidden")) {
    getTabPictures.classList.remove("hidden");
  }

  tabPicturesLoadContents();

    // sort out the index of the clicked folder, then open the corresponding folder contents
    let currentNumber = parseInt(folderId.replace("folderp", ""));
    let indexNumber = Number(currentNumber) - 1;

    // project folders are separated from coding folders simply by adding a base 20 to the index
    // this way I can use the same function but can differentiate between coding and personal projects

    let makeDifferentNumber = Number(currentNumber) + 20;
    assignLeftRight(makeDifferentNumber);
    projectFrameOpening();

    const personalProjectsData = personalProjectData[indexNumber];

    let title = personalProjectsData.title ?? "N/A";
    let getPicTitle = document.getElementById('picTitle')
    getPicTitle.innerHTML = `${title}`;

    let subtitleContent = personalProjectsData.content ?? "N/A";
    let getPicSubtitle = document.getElementById('picSubtitle')
    getPicSubtitle.innerHTML = `${subtitleContent}`;

    let length = personalProjectsData.images.length
  console.log(length)
  // load the first img by changing the source of .picPicture
  // let getPicPicture = document.getElementById('picPicture')
  // getPicPicture.src = personalProjectsData.images[index];



    loadPicture(personalProjectsData.images);
    currentImageArray = personalProjectsData.images;
    currentImageArrayIndex = 0;
    console.log(personalProjectsData.images.length);
    currentImageArrayMax = personalProjectsData.images.length - 1;

}

function loadPicture(imageArr) {
  console.log(imageArr)
  console.log('hi')
  // let getPicPicture = document.getElementById('picPicture')


  let length = imageArr.length;
  console.log(length)
  // load the first img by changing the source of .picPicture
  let getPicPicture = document.getElementById('picPicture');
  getPicPicture.src = imageArr[0];
  
}

const getPicNavLeft = document.getElementById('picNavLeft')
const getPicNavRight = document.getElementById('picNavRight')

function navigatePicture(direction) {
 console.log('direction', direction);

 if(getPicNavLeft.classList.contains('gray')) {
  getPicNavLeft.classList.remove('gray')
 }
 if(getPicNavRight.classList.contains('gray')) {
  getPicNavRight.classList.remove('gray')
 }
 if (direction === 'increase') {

  const currentPicture = document.getElementById('picPicture');
  console.log('pre incremented index', currentImageArrayIndex);
  if (currentImageArrayIndex === currentImageArrayMax) {
    getPicNavRight.classList.add('gray');
    return;
    // gray out the forward button
  }
  const incrementedIndex = currentImageArrayIndex + 1;

  console.log('im increasing')
  currentImageArrayIndex = incrementedIndex;
  currentPicture.src = currentImageArray[incrementedIndex];
  if (currentImageArrayIndex === currentImageArrayMax) {
    getPicNavRight.classList.add("gray")
    // gray out the forward button
  }
 }
 if (direction === 'decrease') {
  if (currentImageArrayIndex === 0) {
    getPicNavLeft.classList.add('gray');
    return
  }
  console.log('im decreasing')
  const currentPicture = document.getElementById('picPicture')
  const decrementedIndex = currentImageArrayIndex - 1;
  currentImageArrayIndex = decrementedIndex;
  currentPicture.src = currentImageArray[decrementedIndex]
  if (currentImageArrayIndex === 0) {
    getPicNavLeft.classList.add("gray")
    // gray out the back button

        return}
 }
}

// switches the highlighted tab itself
function openTab(id) {
  console.log(id);
  // on click add className focus to the tab with id id
  let allTabs = document.querySelectorAll(".innerTab");
  allTabs.forEach(function (elem) {
    elem.classList.remove("focus");
  });
  let selectedTab = document.querySelector(`#${id}`);
  selectedTab.classList.add("focus");
}

//runs when you click back
function resetInnerTabs() {
  //resets which tab is highlighted back to the overview tab
  let allTabs = document.querySelectorAll(".innerTab");
  allTabs.forEach(function (elem) {
    elem.classList.remove("focus");
  });
  let selectedTab = document.querySelector(`#tabOverview`);
  selectedTab.classList.add("focus");
}

let getMainBodyProjects = document.getElementById("mainBodyProjects");

function tabThoughtsLoadContents(id) {
  // switch the highlighted tab to 'thoughts'
  openTab(id);
  // switch from overview page to thoughts page
  let getThoughtsElements = document.querySelectorAll(".thoughts");
  getThoughtsElements.forEach(function (elem) {
    elem.classList.remove("hidden");
  });
  let getOverviewElements = document.querySelectorAll(".overview");
  getOverviewElements.forEach(function (elem) {
    elem.classList.add("hidden");
  });
  
  // getMainBodyProjects.classList.remove('projectPage');
  getMainBodyProjects.classList.replace("projectPage", "thoughtsPage");
}

let getThoughtsElements = document.querySelectorAll(".thoughts");
let getPicturesElements = document.querySelectorAll('.pictures')


function tabOverviewLoadContents() {
 
  // switch the highlighted tab back to overview
  openTab("tabOverview");
  // switch from the thoughts page back to the overview
  // if (!getMainBodyProjects.classList.contains("projectPage")) {

    // show the overview page's contents
    let getOverviewElements = document.querySelectorAll(".overview");
    getOverviewElements.forEach(function (elem) {
      elem.classList.remove("hidden");
    });
    
    // if the thoughts elements are showing (as evident by thoughtsPage being present) then hide it
    if (getMainBodyProjects.classList.contains('thoughtsPage')) {
      getThoughtsElements.forEach(function (elem) {
        elem.classList.add("hidden");
      });
      getMainBodyProjects.classList.replace("thoughtsPage", "projectPage");
    }

     // make sure personal exclusive content isnt showing
     if (getMainBodyProjects.classList.contains('picturesPage')) {
      getMainBodyProjects.classList.replace('picturesPage', 'projectPage')
      getPicturesElements.forEach(function (elem) {
        elem.classList.add("hidden");
      });
     }
   
  
 
  // }
}

function tabPicturesLoadContents() {
  openTab("tabPictures");
  let getPicturesElements = document.querySelectorAll(".pictures");
    getPicturesElements.forEach(function (elem) {
      elem.classList.remove("hidden");
    });
  if (getMainBodyProjects.classList.contains("thoughtsPage")) {
    let getThoughtsElements = document.querySelectorAll(".thoughts");
    getThoughtsElements.forEach(function (elem) {
      elem.classList.add("hidden");
      getMainBodyProjects.classList.replace("thoughtsPage", "picturesPage");
    });
  } else if (getMainBodyProjects.classList.contains("projectPage")) {
    let getOverviewElements = document.querySelectorAll(".overview");
    getOverviewElements.forEach(function (elem) {
      elem.classList.add("hidden");
    });
    getMainBodyProjects.classList.replace("projectPage", "picturesPage");
  }
}

// i know this is really ugly, and I will come back and make it better
// the solution was right in front of my face... i finally thought about it for 30 seconds and figured it out.
function scrollFolder(folderId) {
  
  // openCodingFolder(`${x}`)
  if (folderId.includes("p")) {
    openPersonalFolder(folderId)
  } else {
    openCodingFolder(folderId)
  }
}

function createFolderIcon(passedInItem) {
  // console.log(projectData.indexOf(passedInItem))
  // create case div ( id folder(x) ) (class of (folder, coding/personal, className(fromarray))
  let createContainerDiv = document.createElement("div");
  createContainerDiv.setAttribute(
    "class",
    `${passedInItem.className} folder ${passedInItem.type} ${passedInItem.visibility}`
  );
  createContainerDiv.setAttribute("id", `folder${passedInItem.projectId}`);
  createContainerDiv.setAttribute(
    "onclick",
    `open${passedInItem.type}Folder(this.id)`
  );

  // child div class folderBack
  let createFolderBack = document.createElement("div");
  createFolderBack.setAttribute("class", "folderBack");

  // child div class folderTab and append to folderBack
  let createFolderTab = document.createElement("div");
  createFolderTab.setAttribute("class", "folderTab");
  createFolderBack.appendChild(createFolderTab);

  // child div class folderFront with style="background color = color(fromarray)" and append to folderBack
  let createFolderFront = document.createElement("div");
  createFolderFront.setAttribute("class", "folderFront");
  createFolderFront.style.backgroundColor = `${passedInItem.color}`;
  createFolderBack.appendChild(createFolderFront);

  // append the icon to the container
  createContainerDiv.appendChild(createFolderBack);

  // find the folder container and append folder to it
  getMainBody.appendChild(createContainerDiv);

  // child h5 class folderTitle with innerHTML = className(fromArray)
  let createFolderTitle = document.createElement("h5");
  createFolderTitle.setAttribute("class", "folderTitle");
  createFolderTitle.innerHTML = `${passedInItem.className}`;
  createContainerDiv.appendChild(createFolderTitle);
}


// the about page holds a copy email button, here's that function

let text = document.getElementById("myEmail").textContent;
// copies email to clipboard (not my code)
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Email address copied to clipboard");
    // show .confirm
    document.querySelector(".confirm").style.opacity = "100%";
    // after 4 seconds set opacity back to 0%
    setTimeout(() => {
      document.querySelector(".confirm").style.opacity = "0%";
    }, "1000");
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

function preload() {
  projectData.forEach((item) => {
    createFolderIcon(item);
  });
  personalProjectData.forEach((item) => {
    createFolderIcon(item);
  });

  personalProjectData.forEach((item) => {
    let pics = item.images;
    pics.forEach((pic) => {
      let image = new Image();
      image.src = pic;
    }) 
  });

  // theres a known problem with google icons where it takes a split second to initially load the icons. So that's why I'm preloading them to prevent that being visible to the user.
  getLeftClick.id = `show`;
  getRightClick.id = "show";
  setTimeout(() => {
    getLeftClick.id = `hideButtonLeft`;
    getRightClick.id = "hideButtonRight";
  }, "300");

  let getFirstPage = document.getElementById("firstPage");
  getFirstPage.style.height = "calc(100vh - 190px)";
}
preload();
