/**
 * Author:    AJ Samudio
 * Created:   10.07.2020
 *
 * (c) Copyright by AJ S.
 **/
var button = document.getElementById("myButton");
var text = document.getElementById("output");
var scan = document.getElementById("name");

function sortingHat() {
  var inputText = scan.value;
  len = inputText.length;
  mod = len % 4;
  console.log(mod);
    if (mod==3) {
         text.innerText = "Tacos";
    }
    else if (mod==2){
         text.innerText = "Rice plate";
    }
    else if (mod==1){
         text.innerText = "Diner";
    }
    else{
         text.innerText = "Fast Food";
    }

}

button.addEventListener("click", function(){
  sortingHat();
});
