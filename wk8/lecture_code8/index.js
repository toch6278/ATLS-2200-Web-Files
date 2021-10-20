console.log("hellow world");
// get random numbers between 0-3
console.log(Math.random()*10);
// get random integer between 0-3
console.log(Math.floor(Math.random()*10));

// be able to import images externally using javascript
console.log(document.getElementsByClassName("options"));
// print to the console whatever HTML is currently inside the first item
// that has the class name options
console.log(document.getElementsByClassName("options")[0].innterHTML);

const title = ["mapo tofu", "scallion pancakes", "baozi"];
const images = ["mapo-tofu.jpg", "scallion-pancakes.jpg", "baozi.jpg"];
// learning how to traverse through an array
for (i = 0;  i < document.getElementsByClassName('options').length; i++)
{
  document.getElementsByClassName('label')[i].innerHTML = title[i];
  console.log(document.getElementsByClassName("options")[i].innterHTML);
  //when adding an image, it's not a tag but a string, so must have quotation marks
  //add array by appending the string
  document.getElementsByClassName("options")[i].innerHTML += '<img src = "assets/' + images[i] + '">';

  //event listener
  // document.getElementsByClassName("options") [i].addEventListener("click", function(){alert("you clicked a div")});

  // set title to respective box, set id of each section
  document.getElementsByClassName("options")[i].setAttribute("id", title[i]);
  //call changeColor with the ID
  document.getElementsByClassName("options") [i].addEventListener("click", function(){changeColor(this.id)});

}

function changeColor(sectionID)
{
  console.log(sectionID);
  //toggle the name of the c
  document.getElementById(sectionID).classList.toggle("blue");
}
