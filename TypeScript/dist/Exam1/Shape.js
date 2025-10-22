"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    color;
    filled;
    constructor(color = "green", filled = false) {
        this.color = color;
        this.filled = filled;
    }
    getColor() {
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    isFilled() {
        return this.filled;
    }
    setFilled(filled) {
        this.filled = filled;
    }
    toString() {
        return "A shape with colour " + this.color + " and filled " + this.filled;
    }
}
exports.Shape = Shape;
//# sourceMappingURL=Shape.js.map