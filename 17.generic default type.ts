// generic default type

// interface - whose key1 and key3 would be the same type 👈
// type set to boolean by default, if no argument is passed <>
interface GenericInterface<T = boolean> {
  key1: T;
  key2: boolean;
  key3: T;
}

// no generic argument passed <>
const interfaceVar3: GenericInterface = {
  key1: true,
  key2: true,
  key3: false,
};

console.log(interfaceVar3);

export default "this module exports nothing";
