// extending interface (inheritance)
interface Person {
  name: string;
  age: number;
}
// here 👇
interface Employee extends Person {
  employeeId: number;
  position: string;
}

const empOne: Employee = {
  name: "manoj",
  age: 24,
  employeeId: 1234,
  position: "software engineer",
};
console.log(empOne);

export default "this module exports nothing"; // making it a module to avoid name conflicts