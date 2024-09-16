let stringVariable: string = "This is a string";
stringVariable = "Updated string";
// stringVariable = 123 //error : can't store number in a string type variable

let numberVariable: number = 111;
numberVariable = 222;
// numberVariable = 'This is a string' //error : can't store string in a number type variable

let booleanVariable: boolean = true;
booleanVariable = false;
// booleanVariable = 123 //error

// Objects
let objectVariable: { key1: string; key2: number } = {
  key1: "this is a string",
  key2: 123,
};
// objectVariable = {key1:'updated String', key2:123, key3: 'key3 value'} //error: key3 not in object type

let objectVariableWithOptionalProp: { firstName: string; lastName?: string } = {
  firstName: "manoj",
  lastName: "patra",
};
objectVariableWithOptionalProp = { firstName: "nitesh" }; //also correct lastName is optional (?)

let objectVariableWithReadonlyProp: { readonly name: string; age: number } = {
  name: "manoj patra",
  age: 24,
};
// objectVariableWithReadonlyProp.name = "nitesh gupta"; //error : name prop is 'readonly'
objectVariableWithReadonlyProp.age = 23; //correct

//Array

let arrayOfString: string[] = ["manoj", "prtk", "chinu", "dara"];
// arrayOfString = [123,'manoj'] //error : only store array of strings

let arrayOfNumber: number[] = [1, 2, 3, 4];
// arrayOfNumber = ["manoj", "prtk"] //error

let arrayOfObject: { name: string; age: number }[] = [
  { name: "manoj", age: 24 },
  { name: "prtk", age: 24 },
];
// arrayOfObject = [...arrayOfObject, {name:'chinu'}] //error: age is missing

// Literal type
let literalVariable: "yes" = "yes";
// literalVariable = 'no' //error: can only hold 'yes'
let literalVariable2: "yes" | "no"; //can hold either 'yes' or 'no'
literalVariable2 = "yes";
literalVariable2 = "no";

//any - anything can be stored just like normal JS
let anyVariable: any;
anyVariable = 111;
anyVariable = "this is a string";
anyVariable = true;
