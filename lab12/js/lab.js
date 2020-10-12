/**
 * Author:    AJ Samudio
 * Created:   10.12.2020
 *
 * (c) Copyright by AJ S.
 **/
 var button = document.getElementById("myButton");
 var text = document.getElementById("output");
 var scan = document.getElementById("numInput");


function divisibleLoop(){
  var inputText = scan.value;

  for(i = 0;i<inputText;i++){

    if(i%3 == 0){
      var newEl1 = document.createElement("p");
      newEl1.innerHTML =i + " is Divisible by 3";
      text.appendChild(newEl1);
    }

    if(i%5 == 0){
      var newEl1 = document.createElement("p");
      newEl1.innerHTML =i + " is Divisible by 5";
      text.appendChild(newEl1);
}
    if(i%7 == 0){
        var newEl1 = document.createElement("p");
        newEl1.innerHTML =i + " is Divisible by 7";
        text.appendChild(newEl1);
  }

}
}

 button.addEventListener("click", function(){
   divisibleLoop();
 });
