let meals = ["breakfast", "lunch", "dinner", "desserts"];
//Resources:
// https://www.google.com/search?q=breakfast+images&rlz=1C1CHBF_enUS917US917&tbm=isch&source=iu&ictx=1&fir=tA_p4_TkS5njkM%252CDYUXuIRSiYkW5M%252C_%253BAniFd66AbtNGXM%252CDYUXuIRSiYkW5M%252C_%253BSbVWovh9PXPbGM%252CYOUQYSbPx9iQkM%252C_%253Bwe9D5s2XNMN6XM%252CLPZ_8iBk5emXiM%252C_%253BtUueq6ajKrum-M%252CYLFvBvuHJxnSKM%252C_%253BWOa7A-NcKo8rNM%252CDYUXuIRSiYkW5M%252C_%253BexTfBN_dW8QhCM%252CYLFvBvuHJxnSKM%252C_%253BPx4zJDORwOz-RM%252CDYUXuIRSiYkW5M%252C_%253BHsox34WPBuKteM%252C5_jVuniK-KGzaM%252C_%253BX-jQ2Mo_fPA4_M%252CXa5JRJuxEmmcMM%252C_%253BJj0wsANlvqWqTM%252C5_jVuniK-KGzaM%252C_%253Bb9-mVX4y4spUcM%252CSpF-GV1uOsFSJM%252C_%253BiE-r9f3FX86AsM%252CYLFvBvuHJxnSKM%252C_%253Blcrkz_Jo8r1w0M%252CI_sFVqsg2wBXjM%252C_&vet=1&usg=AI4_-kTFW2zfBTg4JrWEPJ6YV5q1RvQu2Q&sa=X&ved=2ahUKEwiUpu646OjzAhWCkGoFHQTACTUQ9QF6BAgXEAE#imgrc=tA_p4_TkS5njkM&imgdii=S_r9sslaaocUlM
let images = ["breakfast.jpg", "lunch.jpg", "dinner.jpg", "desserts.jpg"];
let prevmeal = "breakfast";

for (i = 0; i < document.getElementsByClassName("meal").length; i++)
{
  console.log(meals[i]);
  document.getElementsByClassName("meal")[i].innerHTML = "<h2>" + meals[i] + "</h2>";
  document.getElementsByClassName("meal")[i].addEventListener('click', setActive, false);
  document.getElementsByClassName("meal")[i].id = meals[i];
}

document.getElementById('breakfast').classList.toggle('active');
document.getElementById("image").innerHTML = "<img src = 'Assets/" + images[0] + "' >";

function setActive(j)
{
  prevmeal = document.getElementsByClassName("active")[0].id;
  if (prevmeal != undefined)
  {
    document.getElementById(prevmeal).classList.toggle("active");
    document.getElementById(prevmeal + "foods").style.display = "none";
  }
  if(j.target.tagName == "H2")
  {
    j.target.parentNode.classList.toggle("active");
    // alert("You'll be taken to the following page...");
  }
  else
  {
      j.target.classList.toggle("active");
  }

  meal = document.getElementsByClassName("active")[0].id;
  document.getElementById(meal + "foods").style.display = "block";
  document.getElementById('image').innerHTML = "<img src = 'Assets/" + meal + ".jpg'>";
}
