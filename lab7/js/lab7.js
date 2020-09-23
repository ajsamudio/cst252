/**
 * Author:    AJ Samudio
 * Created:   09.22.2020
 *
 * (c) Copyright by AJ S.
 **/

 function getName() {
   var userName = window.prompt("Please enter your name");
   var nameArray = userName.toLowerCase().split("");
   return nameArray.sort().reverse();
 }

document.writeln("hello");
document.writeln(getName());
