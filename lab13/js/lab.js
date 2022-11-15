/*
Author: Cyrus Martinez-Weaver and Joann Marie Wong
Created: 14 November 2022
License: Public Domain
*/

//initializing the variable "result" to print later
var result = "";

function string(i) {
  str = "-";
//loop function properties
  if (i%105 == 0) {
    str += ("FizzBuzzBoom!");
  } else if (i%35 == 0) {
    str += ("BuzzBoom!");
  } else if (i%21 == 0) {
    str += ("FizzBoom!");
  } else if (i%15 == 0){
    str +=("FizzBuzz!")
  } else if (i%3 == 0) {
    str += ("Fizz!");
  } else if (i%5 == 0) {
    str += ("Buzz!");
  } else if (i%7 == 0) {
    str += ("Boom!");
  } else {
      str = "";
    }

  console.log(str);
  return str;
}

//Adding in a for loop that takes the i value from the function string(i) and runs it through the if statement 200 times, printing the result to the console and output "numbers"
for (i=1; i <= 200; i++) {
  result = string(i);
  console.log(result);
  document.getElementById("numbers").innerHTML += i + result + "<br>";
}
