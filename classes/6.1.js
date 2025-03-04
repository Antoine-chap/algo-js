class Circle {
    constructor(xPos, yPos,radius) {
      this.xPos = xPos;
      this.yPos = yPos;
      this.radius = radius;
    }
    move(xOffset, yOffset) {
        this.xPos += xOffset;
        this.yPos += yOffset;
    }
  

    get surface() {
        return Math.pow(this.radius , 2) * Math.PI;
      }
    displayCord() {
        console.log(`Cercle : Position (${this.xPos}, ${this.yPos}), Rayon = ${this.radius}`);
    }
}  
const myCircle = new Circle(4, 5, 7);
myCircle.displayCord();
console.log(`La surface du cercle est ${myCircle.surface}.`);

myCircle.move(3, 8);
myCircle.displayCord();


console.log(`La surface du cercle est ${myCircle.surface}.`);