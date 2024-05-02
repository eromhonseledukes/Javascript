// alert("Hello World");

function run(){
    // alert("Welcome To Bizmarrow");
}
run();

//using document.getElementByID to output/write data on the browser

function statement(){
    document.write("Welcome ")
    document.getElementById("demo").innerHTML="How are you"

}
//a function will not run until it's been called
statement();
//function and events
function showdialog(){
    alert("Registration Successful");
}


//Add numbers
function addNumbers (num1,  num2){
    var sum = num1 + num2;
    document.getElementById("demo").innerHTML = sum;
}