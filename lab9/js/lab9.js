/*
Author: Antonio Alegria <ajalegri@ucsc.edu> and Joann Marie Wong <jobwong@ucsc.edu>
Created: 27 October 2022
License: Public Domain
*/

//Creating new variables to find our output <div> and creating new elements
var outputEl = document.getElementById("output");
var new1El = document.createElement("h3");
var new2El = document.createElement("p");
var new3El = document.createElement("p");

//Changing the html attribute of new1El to say something new
new1El.innerHTML = "SoMeThInG NeW";
new2El.innerHTML = "SOMETHING ALSO NEW";
new3El.innerHTML = "something most new";

//Appending both new elements one at a time using appendChild() to our output <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);
outputEl.prepend(new3El);

outputEl.style.fontFamily = "Comic Sans MS";
new1El.style.color = "#DFFF00";
new2El.style.color = "#DFFF00";
new3El.style.color = "#DEFACE";
