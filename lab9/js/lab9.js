/**
 * Author:    AJ Samudio
 * Created:   09.27.2020
 *
 * (c) Copyright by AJ S.
 **/

var outputEl = document.getElementById("output");

var new1El = document.createElement("p");
new1El.innerHTML="Something new.";
var new2El = document.createElement("p");
new2El.innerHTML="Something else.";

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

new1El.style.color = "blue";
output.style.border = "dashed 1px red";
