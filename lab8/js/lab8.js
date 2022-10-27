/*
Author: Cyrus Martinez-Weaver and Joann Marie Wong <jobwong@ucsc.edu> <cycmarti@ucsc.edu>
Created: 27 October 2022
License: Public Domain
*/

function hellYeah (x) {
  var results = (x%2 == 0);
  return results;
}

array = [1,2,3,4]
console.log("My array", array);

//test function
console.log("Is 1 even?", hellYeah(1));
console.log("Is 2 even?", hellYeah(2));


var results = array.map(hellYeah);
//should return [false, true, false, true]

var results = array.map(function(x) {
  var results = x % 3;
  return results;
})

console.log("Dividing array by three results in", results);
