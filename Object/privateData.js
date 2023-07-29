const _radius = Symbol();
const _draw = Symbol();
const _name = Symbol();


class Circle{
    constructor(radius, name){
        this[_radius] = radius;
        this[_name] = name;
    }

    [_draw](){
        console.log(this.radius);
    }

}

let c1 = new Circle(1, 'CRED');
console.log(c1);
console.log(c1._radius); // undefined because _radius is private
console.log(c1._name); 
console.log(c1._draw); 

/** 
*! can not use this way

console.log(Object.getOwnPropertyNames(c1));[]
let key = Object.getOwnPropertySymbols(c1)[1]
console.log(c1[key]);
*/