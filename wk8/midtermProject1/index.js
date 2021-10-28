console.log("hello world!");

// Resources: Lecture Code Week 9 
// referenced week 9 code to write javascript and utilized Casey's office hours

// document.getElementById("day").addEventListener("click", buttonClicked);
document.getElementById("nothing").addEventListener("click", activeProgress);
// document.getElementsByClassName("day").addEventListener("click", buttonClicked);
// document.getElementsByClassName("soon").addEventListener("click", activeProgress);
let page = ["agenda/sunday.html", "agenda/monday.html", "agenda/tuesday.html", "agenda/wednesday.html", "agenda/thursday.html", "agenda/friday.html", "https://www.youtube.com"];

for (i = 0; i < document.getElementsByClassName("dot").length; i++)
{
  document.getElementsByClassName("dot")[i].addEventListener ("click", buttonClicked, false);
  document.getElementsByClassName("dot")[i].id = i;
}
function buttonClicked(e)
{
  // alert("You'll be taken to the following page...");
  dow = e.target.id;
  //Resource: used to change between different htmls and open in the same window or a separate window
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/open
  // window.open(page[dow]);
  window.open(page[dow] , '_self');
  //get id that triggers the event

}

function activeProgress()
{
  alert("NOTHING PLANNED FOR TODAY!");
  document.getElementById("nothing").innerHTML = "FREE DAY!";
  document.getElementById("nothing").style.color = "gray";
  document.getElementById("nothing").style.fontSize = '10px';
  document.getElementById("nothing").style.fontFamily = "Open Sans";
}


var dt = new Date();
document.getElementById("date-time").innerHTML = dt;

// Resources:
// https://stackoverflow.com/questions/41137872/how-to-call-javascript-function-on-all-elements-with-the-same-classname
