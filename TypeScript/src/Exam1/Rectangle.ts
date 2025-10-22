import { Shape } from "./Shape";

export class Rectangle extends Shape{
    private width:number;
    private height:number;

    constructor(width:number,height:number,color:string,filled:boolean){
        super(color,filled);
        this.width=width;
        this.height=height;
    }

    public getWidth():number{
        return this.width;
    }

    public setWidth(width:number):void{
        this.width=width;
    }

    public getHeight():number{
        return this.height;
    }

    public setHeight(height:number):void{
        this.height=height;
    }

    public getArea():number{
        return this.width*this.height;
    }

    public getPerimeter():number{
        return 2*(this.width+this.height);
    }

    public printRectangle(): void {
        console.log("A rectangle width = "+this.width+" and length "+this.height+", which is a subclass of "+this.toString());
    }
}