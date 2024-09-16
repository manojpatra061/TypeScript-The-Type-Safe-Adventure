// type constraints for generic type 👈
// adding some restrictions/requirements on generic type

// interface should have age property
interface Requirement {
  age: number;
}

// function to generate object with my requirement
function generateInterfaceWithAgeProp<T extends Requirement>(properties: T): T {
  const interfaceInstance: T = {
    ...properties,
  };
  return interfaceInstance;
}

const objectWithAge = generateInterfaceWithAgeProp({
  name: "manoj",
  age: 24,
  job: "web dev",
});
console.log(objectWithAge);
