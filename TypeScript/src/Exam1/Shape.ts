export class Shape {
  private color: string;
  private filled: boolean;

  constructor(color: string="green", filled: boolean=false) {
    this.color = color;
    this.filled = filled;
  }

  public getColor(): string{
    return this.color;
  }

  public setColor(color:string):void{
    this.color=color;
  }

  public isFilled(): boolean{
    return this.filled;
  }

  public setFilled(filled:boolean):void{
    this.filled=filled;
  }

  public toString(): string{
    return "A shape with colour "+this.color+" and filled "+this.filled;
  }
}