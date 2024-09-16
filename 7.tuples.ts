// tuples - (array)
type TuplesStrNum = [string, number];

let tupleVariable: TuplesStrNum = ["hi", 123];
// let tupleVariable: TuplesStrNum = [123, "hi"]; //error type mismatch
// let tupleVariable: TuplesStrNum = ["hi", 123, 'new element']; //error: target allows 2 elements not 3

tupleVariable.push("new element");
console.log(tupleVariable); //[ 'hi', 123, 'new element' ]

// readonly tuples 👈
type ReadonlyTuplesStrNum = readonly [string, number];
let tupleVariable2: ReadonlyTuplesStrNum = ["hello", 456];

// tupleVariable2.push("new element"); //error 👈
console.log(tupleVariable2); //[ 'hello', 456 ]

// labeled tuples 👈
type LabeledTuplesStrNum = [message: string, pin: number];

let tupleVariable3: LabeledTuplesStrNum = ["howdy", 789];