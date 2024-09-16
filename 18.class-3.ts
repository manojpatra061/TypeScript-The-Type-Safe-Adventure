// implementing an interface in a class
interface Person {
  name: string;
  age: number;
  greet(): void;
}

class Employee implements Person {
  constructor(public name: string, public age: number) {}

  greet(): void {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const employee = new Employee('Alice', 30);
employee.greet(); // Output: Hello, my name is Alice and I am 30 years old.