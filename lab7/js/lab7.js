/*
Author: Cyrus Martinez-Weaver and Joann Marie Wong <jobwong@ucsc.edu> <cycmarti@ucsc.edu>
Created: 24 October 2022
License: Public Domain
*/



// sortUserName - a function that takes user input and sorts the letters of their userName

function happyFunTime() {
      var userName = prompt("Please enter your name so I can fix it.");
      console.log("username =", userName);
      //split string into array
      var usingArray = userName.split('');
      console.log("usingArray =", usingArray);
      //sort the array
      var usingArraySort = usingArray.sort();
      console.log("nameArraySort =", usingArraySort);
      //join array back into a string
      var usingSorted = usingArraySort.join('');
      console.log("nameSorted =", usingSorted);

      return usingSorted;
}
//output
document.writeln("Your name is: ", happyFunTime(), "</br>");
