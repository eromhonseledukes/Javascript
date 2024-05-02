//if statement
//if condition only works if a particular statement is true
var age = 18;
if(age > 10){
    alert("Age is greater than 10")
}

//else statement
function myFunction(){
    var age = 30;
    if(age > 35){
        alert("You are qualified to migrate")
    }else{
        alert("You are not qualified to migrate");
    }
}
//else if conditional statement
var x = 15;

if(x > 15){
    document.getElementById("demo").innerHTML = "x is greater than 15";
}else if(x == 15){
    document.getElementById("demo").innerHTML = "x is equal to 15";
}else{
    ducument.getElementById("demo").innerHTML = "x is less than 15";
}

//adding event lister
 to conditional statement
document.getElementById("submit").addEventListener("click", function(){
    var age = document.getElementById("age").value;
    if(age < 18){
        alert("Can't vote in 2024 Election")
    }else{
        alert("Eligible to vote in 2024 Election")
    }
})