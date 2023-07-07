class Shape {
  constructor(color) {
    this.color = color;
  }
  colors() {
    console.log(this.color);
  }

  draw() {
    console.log("Drawing");
  }
}

class Rectangle extends Shape {
  constructor(color,width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }
  calculate() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  calculate() {
    console.log("Circle...");
  }
}

// let r1 = new Rectangle('red',10, 20);
// console.log(r1);
// r1.draw();
// r1.color();

 
let c1 = new Circle('Red');
console.log(c1);
c1.draw();
c1.colors();
