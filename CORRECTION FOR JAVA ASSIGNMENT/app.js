//programme to reverse string
function reverseString(str){
    return str.split("").reverse().join("")
}
console.log(reverseString("hello"));//output: "olleh"



//programme to find the largest number
function findLargestNumber(num1, num2, num3){
    return Math.max(num1, num2, num3);
}
console.log(findLargestNumber(10, 5, 20)); //output: 20


//programme to calculate sum of array of numbers
function sumArray(numbers){
    return numbers.reduce((acc, curr)=>acc + curr, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); //output: 15


//programme to create Object called Person with properties name, age, and gender, assign values to properties and display using console.log()
const person = {
    name: "John Doe",
    age: 30,
    gender: "Male"
}
console.log(person.name, person.age, person.gender); //output: John Doe 30 Male


// Programme to Explain between var, let, and const with examples
var x = 10;
let y = 20;
const z = 30;

x = 15; // valid
y = 25; // valid
z = 35; // invalid, will throw an error

// Programme to calculate area of a circle using Pi()= 3.14159
function calculateArea(radius) {
    const pi = 3.14159;
    return   pi * Math.pow(radius, 2);
}

console.log(calculateArea(5)); // output 78.53975



