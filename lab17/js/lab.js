/**
 * Author:    AJ Samudio
 * Created:   10.21.2020
 *
 * (c) Copyright by AJ S.
 **/
var buttonA = $("#Chabutton");
var buttonB = $("#Probutton");
var buttonC = $("#Resbutton");

var chal = $("#Challenge");
var prob = $("#Problem");
var res = $("#Results");

buttonA.click(function(){

	chal.addClass("green-button");
  alert("Hello! I am an alert box!!");

})

buttonB.click(function(){

	prob.addClass("green-button");
  alert("Hello! I am an alert box!!");

})

buttonC.click(function(){

	res.addClass("green-button");
  alert("Hello! I am an alert box!!");

})
