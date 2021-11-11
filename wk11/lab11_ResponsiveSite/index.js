console.log("Javascript is working!");


document.getElementById("disney").addEventListener("click", buttonClicked);
document.getElementById("europe").addEventListener("click", buttonClicked);
document.getElementById("asia").addEventListener("click", asiaClicked);
// document.getElementById("africa").addEventListener("click", africaClicked);
document.getElementById("resources").addEventListener("click", linkClicked);
function buttonClicked()
{
  alert("You'll be taken to the following page...");
  document.getElementById("europe").innerHTML = "Coming soon!"
}
// function africaClicked()
// {
//   alert("You'll be taken to the following page...");
//   document.getElementById("africa").innerHTML = "No information yet...";
// }
function asiaClicked()
{
  alert("You'll be taken to the following page...");
}
function linkClicked()
{
  alert("Going to your site!");
}

//go to links for each image
let sites = ["https://github.com/toch6278/ATLS-2200-Web-Files", "https://www.linkedin.com/in/tchew24/", "https://toch6278.myportfolio.com/work"];

for (i = 0; i < document.getElementsByClassName("icon").length; i++)
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
