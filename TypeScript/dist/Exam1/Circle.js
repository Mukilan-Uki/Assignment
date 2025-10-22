"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    radius;
    constructor(radius, color, filled) {
        super(color, filled);
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    getPerimeter() {
        return 2 * Math.PI * Math.pow(this.radius, 2);
    }
    printCircle() {
        console.log("A circle with radius = " + this.radius + ", which is a subclass of " + this.toString());
    }
}
exports.Circle = Circle;
//# sourceMappingURL=Circle.js.map