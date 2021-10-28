let meals = ["breakfast", "lunch", "dinner", "desserts"];

//Resources: images used for each meal
// https://www.google.com/search?q=breakfast+images&rlz=1C1CHBF_enUS917US917&tbm=isch&source=iu&ictx=1&fir=tA_p4_TkS5njkM%252CDYUXuIRSiYkW5M%252C_%253BAniFd66AbtNGXM%252CDYUXuIRSiYkW5M%252C_%253BSbVWovh9PXPbGM%252CYOUQYSbPx9iQkM%252C_%253Bwe9D5s2XNMN6XM%252CLPZ_8iBk5emXiM%252C_%253BtUueq6ajKrum-M%252CYLFvBvuHJxnSKM%252C_%253BWOa7A-NcKo8rNM%252CDYUXuIRSiYkW5M%252C_%253BexTfBN_dW8QhCM%252CYLFvBvuHJxnSKM%252C_%253BPx4zJDORwOz-RM%252CDYUXuIRSiYkW5M%252C_%253BHsox34WPBuKteM%252C5_jVuniK-KGzaM%252C_%253BX-jQ2Mo_fPA4_M%252CXa5JRJuxEmmcMM%252C_%253BJj0wsANlvqWqTM%252C5_jVuniK-KGzaM%252C_%253Bb9-mVX4y4spUcM%252CSpF-GV1uOsFSJM%252C_%253BiE-r9f3FX86AsM%252CYLFvBvuHJxnSKM%252C_%253Blcrkz_Jo8r1w0M%252CI_sFVqsg2wBXjM%252C_&vet=1&usg=AI4_-kTFW2zfBTg4JrWEPJ6YV5q1RvQu2Q&sa=X&ved=2ahUKEwiUpu646OjzAhWCkGoFHQTACTUQ9QF6BAgXEAE#imgrc=tA_p4_TkS5njkM&imgdii=S_r9sslaaocUlM
// https://www.google.com/search?q=lunch+images&rlz=1C1CHBF_enUS917US917&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiN8IGAs-3zAhVjk2oFHe9zANYQ_AUoAXoECAEQAw&biw=1536&bih=792&dpr=1.25#imgrc=hBXR83JGfEla6M
// https://www.google.com/search?q=dinner+images&rlz=1C1CHBF_enUS917US917&tbm=isch&source=iu&ictx=1&fir=f_gKuaXGNOPlZM%252ClJ-QPp26QBfYDM%252C_%253BJTW_U5AC8xz4eM%252CptHvA3J-_mDEzM%252C_%253B783VoBsuJFkEGM%252CNLnXzqiaIYVraM%252C_%253BXesszmfqHMkLBM%252CIvBxP_OVUgHzWM%252C_%253BejlND4dgmY8o2M%252C4JgDEmPnJzCmXM%252C_%253BnbYMytw5C6lH7M%252CIvBxP_OVUgHzWM%252C_%253BvRxwxXRyd3jP0M%252CxA0qUoscgjvmeM%252C_%253BRy0cUcxIHdKL5M%252ClJ-QPp26QBfYDM%252C_%253Brky18crri7Vb4M%252CDGNYKUcmGlUIOM%252C_%253Bwkb97MW5rpBVgM%252CIvBxP_OVUgHzWM%252C_%253BEhctmXOdlJLZgM%252CZ0N4DMOFRH-ZtM%252C_%253B69MgYuWRC5IksM%252CBKKBIaztjtWmuM%252C_&vet=1&usg=AI4_-kRt0Mixl4BhcRP2ULDWRuJs82SU_g&sa=X&ved=2ahUKEwjI6r7lsu3zAhWukGoFHZcQDiAQ9QF6BAgCEAE#imgrc=69MgYuWRC5IksM&imgdii=Twpg-yWRKS8iTM
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
document.getElementById("breakfastfoods").style.color = "#D89790";

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
