class Person{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    print(){
        console.log(`Name: ${this.name}, Email: ${this.email}`);
    }

    static create(str){

        let person = JSON.parse(str);
        return new Person(person.name, person.email);
    }

}

let str = '{"name": "John", "email": "asionsolver@gmail.com"}';

let p1 = Person.create(str);

console.log(p1);
console.log(p1 instanceof Person); // true
p1.print();

// parse() method parses a string and returns a JavaScript object. The string has to be written in JSON format. The JSON. parse() method can optionally transform the result with a function.