//Some examples of Union types

let varStringNumber: string | number;
varStringNumber = "this is a string";
varStringNumber = 1234;
// varStringNumber = true //error: can't be anything but string or number

let varLiteral: "yes" | "no" | "not sure";
varLiteral = "yes";
varLiteral = "no";
varLiteral = "not sure";
// varLiteral = "not" //error

// array of string or number or both 👈
let arrayOfStringNumber: (string | number)[];
arrayOfStringNumber = [1, 2, 3];
arrayOfStringNumber = ["hi", "hello", "bye"];
arrayOfStringNumber = [1, "hi"]; //mixed is also correct
// arrayOfStringNumber = [1, "hi",true]; //error

// array of either string or number 👈
let arrayOfEither: string[] | number[];
arrayOfEither = ["hi", "hello", "bye"];
arrayOfEither = [1, 2, 3];
// arrayOfEither = [1, "hi"]; //error: mixed is not allowed

