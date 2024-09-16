// functions in TS

function totalStringLength(strPara: string): number {
  // return "this is a string"; //error: only returns number
  return strPara.length;
}
console.log(totalStringLength("manoj")); //output: 5
// console.log(totalStringLength(123)); //error

// function returns noting (void) 👈
function doSomething(): void {
  console.log("something is done");
}
doSomething();

// rest parameter (...) 👈
function takeRest(msg: string, ...restPara: number[]): void {
  console.log(`1st parameter = ${msg}`);
  console.log(`2nd parameter = ${restPara}`);
}
takeRest("Hello", 1, 2, 3, 4);

// optional parameter (?) 👈
function calculateDiscount(price: number, discountAmt?: number): number {
  // return price - discountAmt; //error: coz discountAmt is optional
  return price - (discountAmt || 0); // fallback to 0
}
console.log(calculateDiscount(100, 20)); //Output: 80
console.log(calculateDiscount(100)); //Output: 100

// default parameter (=) 👈
function finalMsg(loveTotal: number = 1) {
  console.log(`love you ${loveTotal}!`);
}
finalMsg(3000);
finalMsg(); //Output: love you 1!

// object as parameter 👈
function objectTakingFunction(obj: { name: string; age: number }) {
  console.log(obj);
}
objectTakingFunction({ name: "manoj", age: 24 });

// object as parameter (destructuring) 👈
function objectTakingFunctionDestructur({
  name,
}: {
  name: string;
  age: number;
}) {
  console.log(name);
}
objectTakingFunctionDestructur({ name: "manoj", age: 24 });

// Interesting behaviour of functions in TS 👈

// objectTakingFunction({name: "manoj", age: 24, something: "something not mentioned"}); //error: something isn't in type
const obj = { name: "manoj", age: 24, something: "something not mentioned" };
objectTakingFunction(obj); //works!
