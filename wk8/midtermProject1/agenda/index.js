console.log("working");

document.getElementById("flash").addEventListener('click', setActiveButton, false);
document.getElementById("free").addEventListener("click", buttonClicked);

function setActiveButton()
{
  alert("Let's study!!");
}

function buttonClicked()
{
  alert("You'll be taken to the following page...");
}
