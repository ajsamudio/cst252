/**
 * Author:    AJ Samudio
 * Created:   10.21.2020
 *
 * (c) Copyright by AJ S.
 **/
 function Vehicle(make, model, year, color, extras){
   this.make = make;
   this.model = model;
   this.year = year;
   this.color = color;
   this.extras = extras;

   this.info = function()  {
     return "My car is a " + this.make +" "+ this.model + " year " + this.year + " in " + this.color + " with a " + this.extras;
   }
 }
 var onlyCar = new Vehicle("Kia", "Forte", 2013, "black", "hatchback");
document.getElementById("output").innerHTML += onlyCar.info();
console.log(onlyCar)
