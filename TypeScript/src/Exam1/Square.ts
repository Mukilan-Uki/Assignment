import { Rectangle } from "./Rectangle";

export class Square extends Rectangle{
    private side:number;
    constructor(width:number, height:number, color:string, filled:boolean){
        super(width,height,color,filled);
        this.side=this.getWidth();
    }

    public getSide():number{
        return this.side;
    }

    public setSide(side:number):void{
        this.side=side;
    }

    public printSquare():void{
        console.log("A square width = "+this.side+" and length "+this.side+", which is a subclass of "+this.toString());
    }
}