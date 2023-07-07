export class Shape {
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

