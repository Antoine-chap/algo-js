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
let rand = () => {
    return Math.floor(Math.random() * 500) +1;
}
for (let i = 0; i < 1000; i++) {
    const rect1 = new Rectangle(rand(), rand(), rand(), rand());
    const rect2 = new Rectangle(rand(), rand(), rand(), rand());

    if (rect1.collides(rect2)) {
        console.log(`Collision détecté, essai ${i + 1}.`);
    } else {
        console.log(`Aucune collision, essai ${i + 1}.`);
    }
}
