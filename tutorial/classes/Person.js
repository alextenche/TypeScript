function Person(firstName, lastName){
  this.firstName =  firstName;
  this.lastName = lastName;
}

Person.prototype.sayHi = function(){
  return "Hi! My name is " + this.firstName + " " + this.lastName;
}

var johnDoe = new Person("John", "Doe");
