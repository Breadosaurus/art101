/*
Author: Cyrus Martinez-Weaver and Joann Marie Wong
Created: 27 October 2022
License: Public Domain
*/

function nameSorter(inputname) {
  var userName = inputname

  var nameArray = userName.split('');

  var sortedArray = nameArray.sort();

  var sortedName = sortedArray.join('');

  return(sortedName);
}

var buttonEl = document.getElementById("my-button");
var outputEl = document.getElementById("output");


buttonEl.addEventListener("click", (function() {
var enteredName = document.getElementById("user-name").value;
var sortedName = nameSorter(enteredName);
outputEl.innerHTML = sortedName;
}));
