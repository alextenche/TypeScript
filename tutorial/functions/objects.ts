
var person = {
  firstName: "John",
  lastName: "Doe",
  sayHi: function(){}
};

interface IPerson {
  firstName: string;
  lastName: string;
  sayHi?(): void;
}

function doSomethingWith(person: {firstName: string; lastName?: string; sayHi: () => void; }){
  person.sayHi();
}

function doSomethingElse(person: IPerson, fn: () => void ){

}

doSomethingWith(person);

doSomethingWith({
  firstName: "Blade",
  lastName: "Daywalker",
  sayHi: function(){}
});
