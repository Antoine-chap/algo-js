class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width , length) {
      this.topLeftXPos = topLeftXPos;
      this.topLeftYPos = topLeftYPos;
      this.width = width;
      this.length = length;
      }
      collides(otherRectangle) {
        return (
            this.topLeftXPos < otherRectangle.topLeftXPos + otherRectangle.width &&
            this.topLeftXPos + this.width > otherRectangle.topLeftXPos &&
            this.topLeftYPos < otherRectangle.topLeftYPos + otherRectangle.length &&
            this.topLeftYPos + this.length > otherRectangle.topLeftYPos
        );
    }  

}      
const rect1 = new Rectangle(2, 3, 5, 3);//(2, 3, 5, 3)
const rect2 = new Rectangle(4, 3, 5, 3);//(8, 3, 5, 3) = no collides

if (rect1.collides(rect2)) {
    console.log(`Collision détecté.`);
} else {
    console.log(`Aucune collision.`);
}

