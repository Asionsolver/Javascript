class Shape {
    constructor(color) {
      this.color = color;
    }
    colors() {
      console.log(this.color);
    }
  
    draw() {
      console.log("Drawing...");
    }
  }
  
  class Rectangle extends Shape {
    constructor(color,width, height) {
      super(color);
      this.width = width;
      this.height = height;
    }

    draw() {
        console.log("Drawing Rectangle...");
        }

    calculate() {
      return this.width * this.height;
    }
  }
  
  
  let r1 = new Rectangle('red',10, 20);
  console.log(r1);
  r1.draw();
  r1.colors();