/*
Author: Cyrus Martinez-Weaver and Joann Marie Wong
Created: 7 November 2022
License: Public Domain
*/

//Creating our buttons and giving them each a different text label
$('#challenge').append("<button id = 'myButton'> Press Me");
$('#problems').append("<button id = 'alsoButton'> Press Me");
$('#results').append("<button id = 'yesButton'> Press Me");


//Adding a click event to each function
$("#myButton").click(function(){
  $("#challenge").append("<button> No, press me!").addClass('special');
});

$("#alsoButton").click(function(){
  $("#problems").append("<button> No, press me!").addClass('special');
});

$("#yesButton").click(function(){
  $("#results").append("<button> No, press me!").addClass('special');
});
