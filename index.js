"use strict";
//question1
console.log("Hello,World!");
//question2
let temprature = 14;
if (temprature <= 20) {
    console.log("Its Cold");
}
//question3
let apples = 10;
let z = apples - 3;
console.log(z);
//question4
let firstname = "muhammad";
let lastname = "hamza";
let fullname = (`${firstname}${lastname}`);
console.log(fullname);
//question5
let y = 10;
if (y === 5) {
    console.log("Yes");
}
else {
    console.log("No");
}
//question6    
function calculatearea(input) {
    let r = input;
    let area = 2 * 3.14 * r * r;
    console.log(area);
}
calculatearea(2);
//question7
for (let i = 50; i <= 50; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    }
    if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}
//question8
let tempratur = [12, 34, 24, 6, 43];
let highesttemprature = [];
for (let i = 1; i < tempratur.length; i++) {
    if (tempratur[i] > highesttemprature) {
        highesttemprature = tempratur[i];
    }
}
console.log("the highest temprature is", highesttemprature);
//question9
console.log("please enter the age");
let age = 16;
if (age >= 18) {
    console.log("Adult");
}
else {
    console.log("Minor");
}
