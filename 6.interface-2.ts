// interface merging (re-opening)
interface Person {
  name: string;
  gender: "male" | "female";
}

// re-opening here 👈
interface Person {
  email: string;
}

// const manoj: Person = { name: "manoj patra", gender: "male" }; //error: email is missing
const manoj: Person = {
  name: "manoj patra",
  gender: "male",
  email: "manojpatra@gmail.com",
};


