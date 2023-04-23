function Logger(logingString: string) {
  return function (_: Function) {
    console.log(logingString);
  };
}

function Rendertemplat(template: string, elementId: string) {
  return function (constructor: any) {
    const myApp = document.getElementById(elementId)!;
    myApp.innerHTML = template;
    const pers1 = new constructor("Men3m");
    myApp.innerHTML = pers1.name;
    console.log("Render template decorator");
  };
}

@Rendertemplat("<h1>This is a test<h1/>", "app")
@Logger("Logging something")
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
    console.log("Person created: " + this.name);
  }
  sayHello() {
    console.log(`Hello ${this.name}`);
  }
}

// const personOne = new Person("John");
// console.log(personOne);
