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
    if (mod==4) {
         text.innerText = "You're in Gryffindor";
    }
    else if (mod==3){
         text.innerText = "You're in Ravenclaw";
    }
    else if (mod==2){
         text.innerText = "You're in Slytherin";
    }
    else{
         text.innerText = "You're in Hufflepuff";
    }

}

button.addEventListener("click", function(){
  sortingHat();
});
