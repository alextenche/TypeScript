// declarations
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

// overloading
function sum(a: number, b:number): number;
function sum(a: string, b:number): number;
function sum(a: number, b:number): number;
function sum(a: string, b:string): number;
function sum(a, b) {
  if(typeof a === "string"){
    a = parseInt(a, 10);
  }

  if(typeof b === "string"){
    b = parseInt(b, 10);
  }

  return a + b;
};

sum (1, 2);
sum ("1", 2);
sum("1", "2");


var messenger = {
  message: "Hello, World",
  start: function(){
    setTimeout(() => {alert(this.message);}, 1000);
  }
};
