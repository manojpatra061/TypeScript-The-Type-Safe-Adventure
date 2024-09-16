// type predicate function (is)

// function isInputNumberType(para: any): boolean {} //normal function returning boolean

function isInputNumberType(para: any): para is number {
  //here
  return typeof para === "number";
}

function performOperations(input: any): void {
  const isNum = isInputNumberType(input);
  if (isNum) {
    console.log(
      `${input} is of number type. Performed operations successfully!`
    );
    return;
  }
  console.log(`${input} is not a number. Stop there!`);
}

performOperations(123); //successfully!
performOperations("manoj"); //Stop there!
