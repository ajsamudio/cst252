/**
 * Author:    AJ Samudio
 * Created:   11.2.2020
 *
 * (c) Copyright by AJ S.
 **/
var myButton = $("#button");
myButton.click(function(){
	// Restyle the button with jQuery so it is a pleasant green.
	// myButton.css("background-color", "#a8d973");
	myButton.addClass("green-button");
  alert("Hello! I am an alert box!!");

	// alert("Don't touch me. #metoo");
})
