// class :

class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }

  get Name(): string {
    return this.name;
  }
  set Name(name: string){
    this.name = name;
  }

  bonjour(): string {
    return `Hello, my name is ${this.name} and I am ${this.age} years olds.`;
  }
}

const john = new Person("Alain", 67);
console.log(john.bonjour());