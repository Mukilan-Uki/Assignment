"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
const Rectangle_1 = require("./Rectangle");
class Square extends Rectangle_1.Rectangle {
    side;
    constructor(width, height, color, filled) {
        super(width, height, color, filled);
        this.side = this.getWidth();
    }
    getSide() {
        return this.side;
    }
    setSide(side) {
        this.side = side;
    }
    printSquare() {
        console.log("A square width = " + this.side + " and length " + this.side + ", which is a subclass of " + this.toString());
    }
}
exports.Square = Square;
//# sourceMappingURL=Square.js.map