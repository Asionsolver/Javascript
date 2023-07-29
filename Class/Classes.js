// Description: Classes in Javascript

// ! In a JavaScript Class you cannot use variable without declaring it.

// A JavaScript class is not an object.

// It is a template for JavaScript objects.

/*
? The Constructor Method
* The constructor method is a special method:

* It has to have the exact name "constructor"
* It is executed automatically when a new object is created
* It is used to initialize object properties
* If you do not define a constructor method, JavaScript will add an empty constructor method.

? Class Methods
* Class methods are created with the same syntax as object methods.

* Use the keyword class to create a class.

* Always add a constructor() method.

* Then add any number of methods.
*/

class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    run (speed){
        console.log(`${this.name} is running at ${speed} km/h`);
    }

    stop(){
        console.log(`${this.name} car is stopped`);
    }
}

const bmw = new Car("BMW", 2019);
bmw.run(100);

const mercedes = new Car("Mercedes", 2018);
mercedes.stop(200);
