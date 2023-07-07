const _radius = new WeakMap();
const _name = new WeakMap();
const _resize = new WeakMap();


class Circle{
    constructor(radius, name){
       this.size = 100;
         _radius.set(this, radius);
         _name.set(this, name);
            // normal function can not access this size property.So we use arrow function
            _resize.set(this, () => {
                console.log(this.size);
            });
    }

    draw(){
        console.log('Drawing');
        console.log(_radius.get(this), _name.get(this));
        _resize.get(this)();
    }

}

let c1 = new Circle(1, 'CRED');
console.log(c1);
c1.draw();