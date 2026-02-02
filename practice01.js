// Programming hero javaScript 1 (Module No-13)

// Task - 1
// You went to the supermarket to buy some oranges and apples.Calculate how much money the shopkeeper will return.

//     Input:
// The first line of the input is the taka you have.The second line is the cost of 1 kg of oranges and 1 kg of apples.

//     Output:
// Print the result.

// Sample Input:
// 1000
// 700

// Sample Output:
// 300

// ************************************************answer******************
const oranges = 400;
const apples = 300;
let total = (oranges + apples);
console.log("Total Money I buy:-" + total);

const MyMoney = 1000;
console.log("Total Money the shopkeeper return:-" + (MyMoney - total));
// // ************************************************answer******************

// Task - 2
// Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

//     Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

//     Output:
// Print the result in 2 decimal places.

// Sample Input:
// 75.25, 65, 80, 35.45, 99.50

// Sample Output:
// 71.04

// ************************************************answer******************
const Mathematics = 75.25;
const Biology = 65;
const Chemistry = 80;
const Physics = 35.45;
const Bangla = 99.50;

let calTotal = (Mathematics + Biology + Chemistry + Physics + Bangla);
console.log("The total Number Sum:- " + calTotal);
let avg = calTotal / 5;
console.log("Total average:- " + avg)
console.log("Total average dot last 2 digit:- " + avg.toFixed(2))
// // ************************************************answer******************

// Task - 3
// You task is to divide the given number by 5 and show the remainder as the output.

//     Input:
// The first line of the input contains the number.

//     Output:
// Print the remainder.

// Sample Input:
// 119

// Sample Output:
// 4

// // ************************************************answer******************

const number = 119;
const divideby = 5;
const remainder = 119 % 5;
console.log("The remainder is:- " + remainder)
// // ************************************************answer******************

// Task-4
// What will be the result of the following codes:

var a = isNaN('11');
console.log(a)

var a = isNaN(2 - 10);
console.log(a)

// Explain your answers:-

// If I try to convert any string to Number – like "1", "2", "3" etc – then if IsNaN is used, it will return false. Because before using IsNaN, if any string is tried to convert to Number like "Name", "Roll", then in isNaN("11") the result comes false. Another example is – if isNaN(2 - 10), because -8 is a valid number, so the result comes false.