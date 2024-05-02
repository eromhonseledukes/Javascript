//data types in javascript
//1: stringe data type(text in quotes)
//2: int data type (whole numbers)
//3: float data types (decimal numbers)
//4: Bolean data types (true or false statements)
//5: Array data types (Collection of data)
//6: object data types (collection of key value pair data)

//javascript variable declaration are classified into 3
//1: var
//2: let
//3 const

//1: stringe data type(text in quotes)
//var is the variable declaration
//while the first name is the variable storing the value
//and john is the value that is been stored in the variable
var firstname="John";
var lastname="Doe";
console.log(firstname);
console.log(lastname);

//concatenation of string data
//what is the meaning of concatenatio?
//concatenation simply means adding multiple string data together to 
//output a statement
var fullName = firstname +" " + lastname;
var statement = "Welcome Mr " + fullName + " Glad to have you here"
console.log(fullName);
console.log(statement);

//2: int data type (whole numbers)
var num1 = 50;
var num2 = 30;
//read on operators in javascript. thev 3 types of operators are;
//1. Arithmetic operators
//2. Logical operators
//3. Comparison operators
let product = num1 * num2;
console.log(product);

//3: float data types (decimal numbers)
var num3 = 0.45;
var num4 = 0.99;
let sum = num3 + num4;
console.log(sum);

//4: Bolean data types (true or false statements)
var isMarried = true;
var isNotMarried = false;
console.log(isMarried);
console.log(isNotMarried);

//5: Array data types (Collection of data)
let mydates = ["fruits", true, 100, 0.005, "games"]
console.log(mydates);

//6: object data types (collection of key value pair data)
var mydetails = {
    fullName: "John Doe",
    age: 25,
    isMarried: false,
    myFavGames: ["football", "Basketball", "Volleyball"]
}
console.log(mydetails);

