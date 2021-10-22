console.log("javascript is working");

const verses = ["Wait for the Lord; be strong, and let your heart take courage; wait for the Lord!", "Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble.",
"It is in vain that you rise up early and go late to rest, eating the berad of anxious toil for he gives to his beloved sleep.", "I have said these things to you, that in me you have peace. In the world you will have tribulation. But take heart; I have overcome the world",
"If you are insulted for the name of Christ, you are blessed, because the Spirit of glory, and of God, rests upon you."];

console.log(verses.length);

let versecount = 0;
document.getElementById("anotherVerse").addEventListener("click", buttonClicked);

function buttonClicked()
{
  console.log(verses[versecount]);
  //change the header to each quote within the array
  document.getElementById("vtext").innerHTML = verses[versecount];
  if (versecount >= 4)
  {
    versecount = 0;
  }
  else {
    versecount++;
  }
  console.log(versecount);
}

//Student Flashcards
const terms = ["preferred vs. common stock", "board of directors", "fiduciary duties", "Trados Case", "investment accelerators"];
const answers = ["preferred stock has a liquidation preferences (participating/non-participating) and are the VCs investing in the startup company - common stock are the employees of the company, have no preferences and are the last to receive money (maybe even no money)", "board of directors the the people that have control over the company and the decisions made (typically 3 to 5 directors; 1 VC, CEO, independent)", "board of directors have fiduciary duties to the common shareholders, preferred share holders are the VCs and have fiduciary duties to their company", "where the Trados Company went hired a new CEO to help run the company since they were on the verge to shutting down; new CEO was devoted to helping the company and was able to get it back on its feet; the VCs part of the board were negotiating to only benefit themselves and had to go to court and be judged based on entire fairness", "similar to angel investors where they enter a seed round to help the startup get off the ground"]
console.log(terms.length);

let termCount = 0;

document.getElementById("nextConcept").addEventListener("click", newConcept);
document.getElementById("conceptAnswer").addEventListener("click", conceptAnswer);
function newConcept()
{
  console.log(terms[termCount]);
  //change the header to each quote within the array
  document.getElementById("terms").innerHTML = terms[termCount];
  if (termCount >= 3)
  {
    termCount = 0;
  }
  else {
    termCount++;
  }
  console.log(termCount);
}
function conceptAnswer()
{
  document.getElementById("answers").innterHTML = answers[termCount];
  if (termCount >= 3)
  {
    termCount = 0;
  }
  else {
    termCount++;
  }
  console.log(termCount);
}
