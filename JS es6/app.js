// Object oriented programming language OOPin javascript
class Car{
    constructor(name){
        //variable declaration in a constructor
        this.brand = name;
    }
}

//instance of the class
var newCar = new Car("Lambogini");
console.log(newCar.brand);

//classes and constructor, object oriented programming (OOP) in javascipt
//student class
class student{
    constructor(property){
        //property of the student
        this.attitude = property
    }
}
//instance of the class student
var newStudent = new student("The student is highly intelligent");
console.log(newStudent.attitude);

//Methods in Class
class Country{
    constructor(location){
        //property in a class
        this.africa = location;
    }
    //method also know as a function
    show(){
        return "The country is located in Africa, and it's" + this.africa;
    }
}

//instance of the class
var newCountry = new Country("Nigeria");
console.log(newCountry.show());