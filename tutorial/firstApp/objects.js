var person = {
    firstName: "John",
    lastName: "Doe",
    sayHi: function () { }
};
function doSomethingWith(person) {
    person.sayHi();
}
function doSomethingElse(person, fn) {
}
doSomethingWith(person);
doSomethingWith({
    firstName: "Blade",
    lastName: "Daywalker",
    sayHi: function () { }
});
