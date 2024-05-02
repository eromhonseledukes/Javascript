//Objects are key value pairs
var person = {
    fullName: "John Doe",
    age: 25,
    favGames: ["football", "volleyball", "Basketball"],
    isMarried: false
}

//Note that: you can't print out an object on the browser, but you can access the data, becuase the browser only understands text data and not object data
document.getElementById("demo").innerHTML = person;
document.getElementById("demo1").innerHTML = person.fullName + " " + person.favGame;

// To output our object on the browser, i will need to convert it to a text data
var txt = JSON.stringify(person);
ducument.getElementById("demo2").innerHTML = txt;

// Objects with Functions
var myDetails = {
    sex: "Male",
    location: "Germany",
    show: function(){ 
        document.getElementById("demo3").innerHTML = "I am located in " + myDetails.location;
    }
}