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

let pics = ["accordionBookCover.jpg", "package.jpg", "posterMailerCover.jpg"];
let pic;

for (i = 0; i < pics.length; i++)
{
  console.log(i);
  document.getElementById('projects').innerHTML += "<div class = 'pimg'><img src = 'assets/text/" + pics[i]  + "' class = 'projectpic' id = 'pic" + i + "' /></div>";

}
