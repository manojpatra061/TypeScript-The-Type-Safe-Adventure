// intersection type (&)

let test: number & string; //never - not possible
let test2: number[] & string[]; //not possible

// combining objects 👈
type UserNA = { name: string; age: number };
type UserE = { email: string };
type CombinedObj = UserNA & UserE;

let userManoj: UserNA & UserE;
let userPrtk: CombinedObj;
userManoj = { name: "manoj", age: 24, email: "manoj@gmail.com" };
userPrtk = { name: "prtk", age: 24, email: "prtk@gmail.com" };