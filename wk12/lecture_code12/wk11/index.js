console.log('hello!');

let pics = 8;
let pic;

for(i=0;i<pics;i++){
  pic = 1+i;
document.getElementById('portfolio').innerHTML += "<div class = 'pimage'><img src='assets/portfolio/" + pic + ".jpg'" + "class='portfoliopic' id='pic" + pic+ "' /></div>";
}

let displaydetails = false;
document.getElementById('portfolio').addEeventListener("click", showDetails);

fundtion showDetails(){
  document.getElementById('details').style.display = "block";
  document.getElementById('detailoverlay').style.display = "block";
  document.getElementById('detailsoverlay').addEeventListener('click', clickedOverlay);
  displaydetails = true;
}

function clickedOverlay()
{
  document.getElementById('details').style.display = "block";
  document.getElementById('detailoverlay').style.display = "none";
  displaydetails = false; 
}
