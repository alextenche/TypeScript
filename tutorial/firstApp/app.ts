class Point {
  constructor(public x: number, public y: number){}

  doSomething(){
    return this.x.toString() + " " + this.y.toString();
  }
}

var p = new Point(1, 2);

alert(p.doSomething());
