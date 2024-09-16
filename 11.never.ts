// never type - exhaustive type checking
function fnNever(para: number | string): void {
  if (typeof para === "number") {
    console.log(`${para} is number`);
    return;
  }
  if (typeof para === "string") {
    console.log(`${para} is string`);
    return;
  }
  console.log(`${para} is never`); //hovering says it is 'never'
}
fnNever(123);
fnNever("manoj");
// fnNever(true); //error
