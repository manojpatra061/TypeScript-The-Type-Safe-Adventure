// class with access modifiers 
class Person {
  public name: string;    // Public: accessible from anywhere
  private age: number;    // Private: accessible only within this class
  protected gender: string;  // Protected: accessible within this class and subclasses

  constructor(name: string, age: number, gender: string) {
      this.name = name;
      this.age = age;
      this.gender = gender;
  }

  public getDetails(): string {
      return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
  }
}

// Creating an instance of the class
const person1 = new Person('Alice', 30,'male');
console.log(person1.getDetails())
console.log(person1.name)
// console.log(person1.age) //error
// console.log(person1.gender) //error