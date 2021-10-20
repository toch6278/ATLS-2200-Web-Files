let meals = ["lunch", "dinner", "brunch"];
let images = ["lunch.jpg", "dinner.jpg", "brunch.jpg"];
let prevmeal = "lunch";

for (i = 0; i < document.getElementsByClassName("meal").length; i++)
{
  console.log(meals[i]);
  document.getElementsByClassName("meal")[i].innerHTML = "<h2>" + meals[i] + "</h2>";
  //correlate with which image is displayed
  document.getElementsByClassName("meal")[i].addEventListener('click', setActive, false);
  //getting the same name as the same id
  document.getElementsByClassName("meal")[i].id = meals[i];
  document.getElementById("one").addEventListener('click', setActiveButton, false);
  document.getElementById("two").addEventListener('click', setActiveButton, false);
}

//must lose class class if we doe setAttribute
document.getElementById('lunch').classList.toggle('active');
//add a single image and then some styling to make it manageable
document.getElementById("image").innerHTML = "<img src = 'Assets/" + images[0] + "' >";

// have a parameter "event" to start actively and dynamically styling
function setActive(event)
{
  //get id of the active tag
  prevmeal = document.getElementsByClassName("active")[0].id;
  if(prevmeal != undefined)
  {
    document.getElementById(prevmeal).classList.toggle("active");
    document.getElementById(prevmeal +"menu").style.display = "none";
  }
  // consol.log("previous meal: " prevmeal);
  // prevmeal.classList.toggle('active');
  // change styling based on the data, if not already added, add to class list
  // event.target.classList.toggle('active');
  // console.log(event.target.innerHTML);

  // if you're the parent, you can change the whole thing, if you're the the child, then you'll just change yourself
  if(event.target.tagName == "H2")
  {
    // console.log("h2 clicked");
    //change entire div by changing the parent
    event.target.parentNode.classList.toggle("active");
  }
  else {
    // console.log("div cliced");
    event.target.classList.toggle("active");
  }

  meal = document.getElementsByClassName("active")[0].id;
  // console.log(meal);
  document.getElementById(meal +"menu").style.display = "block";
  document.getElementById('image').innerHTML = "<img src = 'Assets/" + meal + ".jpg' >";
}

function setActiveButton(event)
{
  event.target.classList.toggle("active");
}
