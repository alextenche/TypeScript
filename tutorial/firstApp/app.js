var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.doSomething = function () {
        return this.x.toString() + " " + this.y.toString();
    };
    return Point;
}());
var p = new Point(1, 2);
alert(p.doSomething());
