var first = function (x: number) {
  return x + 10;
};

function second(x: number) {
  return x + 10;
}

var third = (x: number) => x + 10;

function fourth(fn: (x: number) => void) {
  fn(10);
};

fourth(first);
