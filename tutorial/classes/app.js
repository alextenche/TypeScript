var Person = (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        set: function (name) {
            this.firstName = name;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.sayHi = function (obj) {
        return "";
    };
    return Person;
}());
var johnDoe = new Person("John", "Doe");
alert(johnDoe["fullName"]);
