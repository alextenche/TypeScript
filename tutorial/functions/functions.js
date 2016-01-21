var first = function (x) {
    return x + 10;
};
function second(x) {
    return x + 10;
}
var third = function (x) { return x + 10; };
function fourth(fn) {
    fn(10);
}
;
fourth(first);
function sum(a, b) {
    if (typeof a === "string") {
        a = parseInt(a, 10);
    }
    if (typeof b === "string") {
        b = parseInt(b, 10);
    }
    return a + b;
}
;
sum(1, 2);
sum("1", 2);
sum("1", "2");
var messenger = {
    message: "Hello, World",
    start: function () {
        var _this = this;
        setTimeout(function () { alert(_this.message); }, 1000);
    }
};
