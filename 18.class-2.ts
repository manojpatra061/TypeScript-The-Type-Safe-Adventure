// class with access modifiers (shorthand)
class Person {
  constructor(
    public name: string,
    private age: number,
    protected gender: string
  ) {}

  public getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
  }
}

// Creating an instance of the class
const person1 = new Person("Alice", 30, "male");
console.log(person1.getDetails());
console.log(person1.name);
// console.log(person1.age) //error
// console.log(person1.gender) //error
