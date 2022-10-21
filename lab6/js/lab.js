/*
Author: Cyrus Martinez-Weaver and Joann Marie Wong <jobwong@ucsc.edu> <cycmarti@ucsc.edu>
Created: 20 September
License: Public Domain
*/

//Declare variables
myTransport = ["Plane", "Car", "Spaceship"];

myMainRide = {
  make : "Ford",
  model: "Pinto",
  color: "Blurple",
  year: 2001,
  age: function(){
    return 2022 - year;
  }
}

//Output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My main ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
