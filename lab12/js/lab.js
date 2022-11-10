/*
Author: Cyrus Martinez-Weaver and Joann Marie Wong
Created: 9 November 2022
License: Public Domain
*/

//Taking in a string as an argument, counting the letters in that string and assigning it to a variable length
function sortingHat(str) {
  len = str.length;
  mod = len % 4;

//Creating a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0,1,2, or 3
  if (mod == 0) {
    return "Gryffindor"
  }
  else if (mod == 1) {
    return "Ravenclaw"
  }
  else if (mod == 2 ) {
    return "Slytherin"
  }
  else if (mod == 3) {
    return "Hufflepuff"
  }
}

//Creating a click listener attached to #button that gets the value of #input and assigns it to a variable name
var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;

//Taking the stored user variable and running it through the sorting hat function to find the house
  var house = sortingHat(name);
  newText = "<p> The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})
