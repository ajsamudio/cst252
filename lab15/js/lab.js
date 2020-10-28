/**
 * Author:    AJ Samudio
 * Created:   10.21.2020
 *
 * (c) Copyright by AJ S.
 **/
 class Car {
  constructor(brand, model, year, color) {
    this.carname = brand;
    this.carmodel = model;
    this.caryear = year;
    this.carcolor = color;
  }
  info() {
    return "My car is a " + this.carname + " " + this.carmodel + " " + this.caryear + " and it's " + this.carcolor + ".";
  }
}

 var onlyCar = new Car("Kia", "Forte", 2013, "black",);
document.getElementById("output").innerHTML += onlyCar.info();
console.log(onlyCar)


//connect 4 psuedo psuedo code

//declare bool game
//declare players1 and 2
// declare 2d array


//while loop if(game)
//player 1 picks a collum (x value)
//piece gets placed in lowest y-value
//check if game is finished (if 4 connecting pieces of player 1) if so game = false and game ends
//player 2 pick a collum
//piece get place in that collum lowest y-value
//check if game is finished (if 4 connecting pieces of player 2) if so game = false and game ends
//loop until game = false
