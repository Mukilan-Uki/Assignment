import { Shape } from "./Shape";
export declare class Rectangle extends Shape {
    private width;
    private height;
    constructor(width: number, height: number, color: string, filled: boolean);
    getWidth(): number;
    setWidth(width: number): void;
    getHeight(): number;
    setHeight(height: number): void;
    getArea(): number;
    getPerimeter(): number;
    printRectangle(): void;
}
//# sourceMappingURL=Rectangle.d.ts.map