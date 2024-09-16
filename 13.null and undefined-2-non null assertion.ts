// non null assertion operator(!)
function getLength(str?: string): number {
  // return str.length; // error: str is possibly undefined
  return str!.length; // Using the non-null assertion operator
}

const result = getLength("Hello, world!"); // 13
console.log(result);
