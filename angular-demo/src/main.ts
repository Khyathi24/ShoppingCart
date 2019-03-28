class Point{
  x:number;
  y:number;
  constructor(x:number,y:number)
  {
    this.x=x;
    this.y=y;
  }
  getx()
  {
    return this.x;
  }
  set X(value:number)
  {
    this.x=value;
  }
}
let point=new Point(1,2);
let x=point.getx();
point.X=10;
console.log('x');
