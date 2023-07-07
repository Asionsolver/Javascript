import {Shape} from './Shape.js'

class Circle extends Shape {
    calculate() {
      console.log("Circle...");
    }
  }

  let c1 = new Circle('Red');
console.log(c1);
c1.draw();
c1.colors();