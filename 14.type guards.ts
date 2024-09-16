// type guards
// typeof, in operator, instanceof, type-predicate, discriminating literal

// typeof 👈
type Type1 = number | string;
function fun1(input: Type1): Type1 {
  if (typeof input === "number") {
    return input.toFixed(2);
  } else {
    return input.toUpperCase();
  }
}
console.log(fun1(123)); //123.00
console.log(fun1("manoj")); //MANOJ

// in operator 👈
type Type2 =
  | { name: string; read: () => void }
  | { name: string; write: () => void };
function fun2(input: Type2) {
  if ("read" in input) {
    input.read();
  } else {
    input.write();
  }
}
fun2({ name: "manoj", read: () => console.log("manoj is reading...") });
fun2({ name: "dara", write: () => console.log("dara is writing...") });

// instanceof 👈

function fun3(input: any) {
  if (input instanceof Error) {
    console.log(`this is ${input.message}`);
  } else {
    console.log(`unknown error`);
  }
}
fun3(new Error("wow error"));
fun3("trouble!");

// type-predicate 👈
function fun4(input: any): input is number {
  return (input as number) > 0;
}
console.log(fun4(0)); //false
console.log(fun4(1)); //true
console.log(fun4("abc")); //false

// discriminating literal - useful when no distinguished factor present 👈
type IncrementAction = {
  type: "increment";
  currentAmt: number;
  amount: number;
};
type DecrementAction = {
  type: "decrement";
  currentAmt: number;
  amount: number;
};

function fun5(input: IncrementAction | DecrementAction): number {
  switch (input.type) {
    case "increment":
      return input.currentAmt + input.amount;
    case "decrement":
      return input.currentAmt - input.amount;
    // default:
    //   return input.currentAmt;
  }
}
console.log(fun5({ type: "increment", currentAmt: 20, amount: 5 })); //25
console.log(fun5({ type: "decrement", currentAmt: 20, amount: 5 })); //15
