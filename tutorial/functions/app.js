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
