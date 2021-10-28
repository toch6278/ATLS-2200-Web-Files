console.log("hello world!");

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
  //Resource:
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

// -------------------------------------------------------------------------------

//testing button pop up
// let unplanned = ["24", "25", "26", "27", "28", "29", "30"];
// for (i = 0; i < document.getElementsByClassName("soon").length; i++)
// {
//   console.log(unplanned[i]);
//   document.getElementsByClassName("soon")[i].innerHTML = unplanned[i];
//   document.getElementsByClassName("soon")[i].addEventListener("click", setActive, false);
//   document. getElementsByClassName("soon")[i].id = unplanned[i];
// }
//
// function setActive(c)
// {
//   if (c.target.)
// }

var dt = new Date();
document.getElementById("date-time").innerHTML = dt;

// Resources:
// https://stackoverflow.com/questions/41137872/how-to-call-javascript-function-on-all-elements-with-the-same-classname
