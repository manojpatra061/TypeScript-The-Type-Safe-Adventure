// 1 - paste the ts code here
// 2 - npm run
// 3 - npm run start

// unknown vs any
function fnUnknown(para: unknown): void {
  let result = 0;
  // result = para.length //error
  if (typeof para === "string") {
    result = para.length; //correct
  }
  console.log(result);
}
function fnAny(para: any): void {
  let result = 0;
  result = para.length; //no error
  console.log(result);
}
fnUnknown("manoj"); //5
fnUnknown([1, 2, 3]); //0
fnAny("manoj"); //5
fnAny([1, 2, 3]); //3
