/**
 * Author:    AJ Samudio
 * Created:   09.27.2020
 *
 * (c) Copyright by AJ S.
 **/

var test;

function firstThing(test) {
    console.log(test + ": This is the first thing.");
}

function secondThing(test) {
    console.log(test + ": This is the second thing.<br>");
}

function thirdThing(test){
  console.log(test + " This is the third thing<br>")
}

firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

setTimeout(function(){
  firstThing("Test 2")
}, 0);

setTimeout(function(){
  secondThing("Test 2")
}, 0);

setTimeout(function(){
  thirdThing("Test 2")
}, 0);


setTimeout(function(){
  firstThing("Test 3")
}, 3000);

setTimeout(function(){
  secondThing("Test 3")
}, 1000);

setTimeout(function(){
  thirdThing("Test 3")
}, 2000);
