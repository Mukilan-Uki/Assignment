import { Shape } from "./Exam1/Shape";
import { Circle } from "./Exam1/Circle";
import { Rectangle } from "./Exam1/Rectangle";
import { Square } from "./Exam1/Square";

console.log("-----Shape-----");
console.log("\t");

const shape1 = new Shape("red",true);
console.log(shape1.toString());

console.log("\n");

console.log("-----Circle 1-----");
console.log("\t");

const circle1 = new Circle(7,"red",true);
circle1.printCircle();
console.log("Area: "+Math.floor(circle1.getArea()));
console.log("Perimeter: "+Math.floor(circle1.getPerimeter()));

console.log("\n");

console.log("-----Circle 2-----");
console.log("\t");

const circle2 = new Circle(2.1,"blue",false);
circle2.printCircle();
console.log("Area: "+Math.floor(circle2.getArea()));
console.log("Perimeter: "+Math.floor(circle2.getPerimeter()));

console.log("\n");

console.log("-----Rectangle 1-----");
console.log("\t");
const rectangle1 = new Rectangle(4, 6,"red",true);
rectangle1.printRectangle();
console.log("Area: "+rectangle1.getArea());
console.log("Perimeter: "+rectangle1.getPerimeter());

console.log("\n");


console.log("-----Rectangle 2-----");
console.log("\t");
const rectangle2 = new Rectangle(4, 6,"yellow",false);
rectangle2.printRectangle();
console.log("Area: "+rectangle2.getArea());
console.log("Perimeter: "+rectangle2.getPerimeter());

console.log("\n");

console.log("-----Square-----");
console.log("\t");
const square1 = new Square(4, 6,"green",true);
square1.printSquare();
console.log("Side: "+square1.getSide());