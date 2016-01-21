class Person {

  public get fullName(){
    return this.firstName + " " + this.lastName;
  }

  public set fullName(name: string){
    this.firstName = name;
  }

  constructor(public firstName: string, public lastName: string) {
  }

  //overloading
  sayHi(): string;
  sayHi(name: string): string;
  sayHy(person: Person): string;
  sayHi(obj: any){

    return "";
  }

  // sayHi() {
    // return "Hi! My name is " + this.fullName;
  // }
}

var johnDoe = new Person("John", "Doe");

alert(johnDoe["fullName"]);
