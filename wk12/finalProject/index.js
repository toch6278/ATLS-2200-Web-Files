console.log("helloworld");
let page = ["object.html", "text.html", "image.html", "resume.html", "about.html"];
for (i = 0; i < document.getElementsByClassName("tabs").length; i++)
{
  document.getElementsByClassName("tabs")[i].addEventListener ("click", newPage, false);
  document.getElementsByClassName("tabs")[i].id = i;
}
function newPage()
{
}
// ---------------------------------------------------------------------------------------
// CHANGE THIS ahhhhhhhhHSISDJHAKLSDJGKLJADFGKHLADJFGHKLSDFGKL
// ADOHAKDFJGHKJDFGHSKLDHJF
// ADKJFGHKAJDFGHKSLJDFGHKSLJDFGHKSJDFGHKSLJDFGKHJSDFGKHLSDFG CHANGE PICTURE NAMES
// ---------------------------------------------------------------------------------------
let pics = ["accordionBookCover.jpg", "posterMailerCover.jpg", "package.jpg", "giphy.gif"];
let pic;
for (i = 0; i < pics.length; i++)
{
//   console.log(i);
  document.getElementById('projects').innerHTML+= "<div class = 'pimg'><img src = 'assets/text/" + pics[i]  + "' class = 'projectpic' id = 'pic" + i + "' /></div>";
}
// let displaydetails = false;
// document.getElementById('projects').addEventListener("click", showDetails);
//
// function showDetails(){
//   document.getElementById('details').style.display = "block";
//   document.getElementById('detailsoverlay').style.display = "block";
//   document.getElementById('detailsoverlay').addEventListener('click', clickedOverlay);
//   displaydetails = true;
// }
//
// function clickedOverlay()
// {
//   document.getElementById('details').style.display = "none";
//   document.getElementById('detailoverlay').style.display = "none";
//   displaydetails = false;
// }
//going to reference pages
let sites = ["https://github.com/toch6278/ATLS-2200-Web-Files", "https://www.linkedin.com/in/tchew24/", "https://toch6278.myportfolio.com/work"];
for (i = 1; i < document.getElementsByClassName("icon").length; i++)
{
  document.getElementsByClassName("icon")[i].addEventListener ("click", iconClicked, false);
  //getting the id of the image
  document.getElementsByClassName("icon")[i].id = i;
  console.log(sites[i]);
}
function iconClicked(e)
{
  // alert("You'll be taken to the following page...");
  //Resource: used to change between different htmls and open in the same window or a separate window
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/open
  if(e.target.tagName == "IMG"){
    //click on the container whihc is the div
    ref = e.target.parentNode.id;
  }else{
    ref = e.target.id;
  }
  window.open(sites[ref] , '_blank');
  //get id that triggers the event
}
// --------------------------------------------------------------
// separate modals
let modal;
let modalActive = false;
//event listeners
// document.getElementById("projects").addEventListener("click", function(){
//     dispPg('projects');});
// document.getElementById("about").addEventListener("click", function() {dispPg('about');});
// ---------------------------------------------------------------------------------------
// WE WRORKED HERE
// ---------------------------------------------------------------------------------------
for (var i = 0; i < document.getElementsByClassName('projectpic').length; i++) {
  let proj = document.getElementsByClassName('projectpic')[i];
    // console.log("Working: " + proj);
    proj.addEventListener('click', function(){launchModal(this.getAttribute('id'))}, false);
    // console.log(i);
}
window.onClick = function(event) {
  if (event.target == modal) {
    modal.classList.add('disabled');
  }
}
// typeIt();
//functions
// ---------------------------------------------------------------------------------------
// WE WRORKED HERE
// ---------------------------------------------------------------------------------------
//manage project click to launch modal
function launchModal(attribute){
    // modal = document.getElementsByClassName('projectpic')[attribute];
    let modalNumber = attribute.slice(attribute.length - 1, attribute.length);
    // console.log(modalNumber);
    // modal.classList.remove('disabled');
    document.getElementsByClassName('modal')[modalNumber].style.display = "block";
    document.getElementsByClassName('projmodal')[0].style.display = "block";
    document.getElementsByClassName('projmodal')[0].addEventListener('click', function(){closeModal(modalNumber)});
    modalActive = true;
    //alert('clicked ' + attribute);
};
// ---------------------------------------------------------------------------------------
// WE WRORKED HERE
// ---------------------------------------------------------------------------------------
function closeModal(modalNumber){
//   modal.addEventListener('click', console.log('closing modal'));
    document.getElementsByClassName('modal')[modalNumber].style.display = "none";
    document.getElementsByClassName('projmodal')[0].style.display = "none";
  if(modalActive == true){
  console.log("closing modal");
//   modal.classList.add('disabled');
  modalActive = false;
}
}
//manage menu selections from navigation
function dispPg(pageName){
  console.log(pageName);
  if(pageName=='about' && document.getElementById('projects').className == 'active'){
    var element = document.getElementById("projects");
    element.classList.remove("active");
    document.getElementById('projects').classList.add('disabled');
    document.getElementsByTagName('body')[0].style.backgroundColor = 'black';
    document.getElementsByTagName('nav')[0].style.color = 'white';
    document.getElementById('about').classList.add('active');
  }else if(pageName=='projects' && document.getElementById('about').className == 'active'){
      var element = document.getElementById("about");
      element.classList.remove("active");
      document.getElementById('project').classList.add('active');
      document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
      document.getElementsByTagName('nav')[0].style.color = 'black';
      document.getElementById('projects').classList.remove('disabled');
    }
}
//  document.getElementById
// -------------------------------------------------------------------------
