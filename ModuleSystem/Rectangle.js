import {Shape} from './Shape.js'

export class Rectangle extends Shape {
    constructor(color,width, height) {
      super(color);
      this.width = width;
      this.height = height;
    }
    calculate() {
      return this.width * this.height;
    }
  }

let r1 = new Rectangle('red',10, 20);
console.log(r1);
r1.draw();
r1.colors();

