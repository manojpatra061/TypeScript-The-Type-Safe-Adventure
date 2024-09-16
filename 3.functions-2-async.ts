// async function 
// generic async function (returns a promise)

// async functions - returns promise
async function asyncFun(input: string): Promise<number> {
  // await operations
  return input.length;
}
async function start() {
  console.log(await asyncFun("manojpatra"));//10
}
start();

export default start;
// works on browser console - Vite