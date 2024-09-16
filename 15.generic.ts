// generic

// function - that takes and returns the same type of data 👈
function genericFun<T>(input: T): T {
  return input;
}
console.log(genericFun<string>("manoj")); //manoj
console.log(genericFun<number>(123)); //123

// interface - whose key1 and key3 would be the same type 👈
interface GenericInterface<T> {
  key1: T;
  key2: boolean;
  key3: T;
}

const interfaceVar1: GenericInterface<string> = {
  key1: "manoj",
  key2: true,
  key3: "patra",
};
const interfaceVar2: GenericInterface<number> = {
  key1: 123,
  key2: true,
  key3: 456,
};

console.log(interfaceVar1);
console.log(interfaceVar2);
