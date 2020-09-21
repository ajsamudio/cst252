/**
 * Author:    AJ Samudio
 * Created:   09.20.2020
 *
 * (c) Copyright by AJ S.
 **/

myMainRide = {
    make:  "kia",
    model:  "forte",
    color:  "black",
    year:  "2015",
    age: function(){
      return 2020 - year;
    }
}

myTransport = ['car', ' bus', ' skateboard', ' legs', ' bike'];

document.writeln("Transportation I use: ", myTransport, "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
