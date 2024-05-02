// Function to reverse string using split, reverse and join method
//split divides string into array of characters, reverse reverse the array and join combines the reversed characters into a new string
function reverseString(str){
    return  str.split(").reverse().join(");
}
console.log(reverseString("hello")); output: "olleh"

// Function call
reverseString("Okhajaguan");
reverseString("Hello");
reverseString("Andrew");

//Funtion to reverse string using reduce and split method
// split divides the string into array of characters, while reduce combines the characters in reverse order using the accumulator
function reverseString(str){
    const reverseString = str.split("").reduce((acc, char) => char + acc, "");
    console.log(reverseString);
}
// Function call
reverseString("Andrew");
reverseString("John");
reverseString("Movement");

// function to reverse string using the Spread Operator
// Spread Operator is used to spread the characters of the string into individual elements, reverse method is the applied to reverse the order of the elements and join is used to combine the reversed elements back into a string
function reverseString(str){
    const strRev = [...str].reverse().join("");
    console. log(strRev);
}
// Function call
reverseSrtring("Lagos")
reverseString("Abuja");
reverseString("Benin")

// Function to reverse string using Array.form and reverse methods
//Array.form() converts the string into an array of individual characters, the reverse is applied reverse the order of elements in the array. Then the join() is used to combine the reverse elements back into a string
function reverseString(str){
    const strRev = Array.from(str).reverse().join("");
    console.log(strRev);
}
// Function call
reverseString("lagos");
reverseString("Abuja");
reverseString("Benin");

// Function to reverse astring using Spread Operator and Reduce methods
// Spread Operator is used to convert a string into an array of characters and Reduce() is used to make a reverse string fro an array by concatenating the string in forward direction.
function reverseString(str){
    const strRev = [...str].reduce((x, y) => y.concat(x));
    console.log(strRev);
}
// Function call
reverseString("lagos");
reverseString("Abuja");
reverseString("Benn");

// Funtion to reverse string using For Loop
// for loop is used to iterate through the characters of the string in reverse order. starting from the last character(str.length-1) and character pushed to the new reverse string one by one
function reversedString(str){
    let strRev = "";
    for (let i = str. length - 1; i >= 0; i--){
        strRev += str[i];
    }
    console.log(strRev);
}

// Function call
reverseString("Lagos");
reverseString("Abuja");
reverseString("Benin");

// Funtion to reverse String using Substring() and a Decrementing Index
// Substring is used to extract the character at index i and append it to the reversed string. The index i is the decremented
function reverseString(str){
    let reversedStr = "";
    let i = str. length - 1;
    while(i >= 0){
        reversedStr += str.length(i, i + 1);
        i--;
    }
    console.log(reversedStr);
}
// Function call
reverseString("Lagos");
reverseString("Abuja");
reverseString("Benin");

// Function to reverse a string using Recursion
// In a recursive approach, a function repeated calls itself, taking the substring from the second character and concatenating it with the first character until the base case is reached, reversing the string
function strReverse(str){
    if (str ===""){
        return "";
    } else {
        return strReverse(str.substr(1)) + str.charAt(0);
    }
}
console.log(strReverse("Lagos"));
console.log(strReverse("Abuja"));
console.log(strReverse("Benin"));



//Programme to find the largest among three numbers
const num1 = parsefloat(prompt("18: "));
const num2 = parsefloat(prompt("16: "));
const num3 = parsefloat(prompt("40: "));
let largest

// check condition
if (num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}
//display result
console.log("The largest number is " + largest);

//2nd Example
const num4 = parseFloat(prompt("300: "));
const num5 = parseFloat(prompt("376: "));
const num6 = parseFloat(prompt("65: "));

const biggest = Math.max(num4, num5, num6);

//display result
console.log("The biggest number " + biggest);




//find the sum of array of numbers using for loop
//sum is calculated by looping throung the array of of numbers and adding the values of each array element to a variable called sum
const arr = [18, 35, 98, 45, 74, 99];
let sum = 0;
for(let i = 0; i < arr.length; i++){
     sum += arr[i];
}
console.log(sum);

//using reduce()
//The reduce () calculates the sum of array of numbers by executing the"reducer" callback function on each element of the array
const arr = [18, 35, 98, 45, 74, 99];
const sum = arr.reduce((accumulator, currentValue) => accumulator = + currentValue, 0);
console.log(sum);

//Using forEach()
// forEach() executes the callback function argument for each element of the array
const arr = [18, 35, 98, 45, 74, 99];
let sum  = 0;
arr.forEach((el) => += el);
console.log(sum);

// Using a for...of loop
// A for...of loop used to iterate through the array of of items and calculate the sum of the array of numbers.
const arr = [18, 35, 98, 45, 74, 99];
let sum = 0;
for (const el of arr) {
    sum += el;
}
console.log(sum);


// object data types: Person
var person = {
    Name: "John Doe",
    age: 25,
    gender: Male;
}
console.log(person);


//Difference between Var, Let and Const
// var and let creates  variables that can be assigned another value while const creates a "constant" variables that cannot be assigned another value
// the scope of var variable is functional or global scope, while let and const variable is block scope
//var can be updated and redeclared in the same scope, let can be updated but cannot be redeclared in same scope while const cannot be updated or redeclared in any scope
// var and let can be declared without initialization while const cannot be declared without initialization
//var can be accessed without initialization as its default value is "undefined"
      //let cannot be accessed without initialization, otherwise it will give "referenceError"
      //const cannot be accessed without initialization, as it cannot be declared without initialization
//var variables are hoisted
     //let variables are hoisted but stay in a temporary dead zone until the initailization.
     //const variables are hoisted but stay in the temporal dead zone until the initialization



// Programme To Calculate Area Of A Circle
const radius = 12;
const pi = 3.14159
const areaOfCircle = (radius, pi) => {
    return pi * radius * radius;
}
console.log("The area of the circle is: " + areaOfCircle(radius, pi))
