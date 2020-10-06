/**
 * Author:    AJ Samudio
 * Created:   10.05.2020
 *
 * (c) Copyright by AJ S.
 **/
 var button = document.getElementById("myButton");
 var scan = document.getElementById("fname");
 var text = document.getElementById("output");



 function buttonPress() {
   var inputText = scan.value;

   text.innerText = "Hello, " + inputText.split('').sort().reverse() .join('');

   // var nameArray = scan.sort().reverse();
   // text.innerText = "Hello, " + nameArray;
   fname.value = "";


  fname.focus();
}
button.addEventListener("click", buttonPress);
