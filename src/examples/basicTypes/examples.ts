export function basicTypesNumber() {
    return {
        title: "Basic Types in Typescript",
        explanation: "In this section, we will learn about the basic types in Typescript. Here you see examples of number and string types.",
        code: 
`
    // Example of number
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    let floating: number = 6.5;
    let negative: number = -6;
`
}
    }
  
export function basicTypesString() {
    return {
        title: "String Types in Typescript",
        explanation: "In this section, we will learn about the string type in Typescript. Here you see examples of string types.",
        code:
`
    // Example of string: 
    // represents a sequence of characters
    let color: string = 'blue';
    color = 'red';
`
    }
}

export function basicTypesBoolean() {
    return {
    title: "Boolean Types in Typescript",
    explanation: "In this section, we will learn about the boolean type in Typescript. Here you see examples of boolean types.",
    code:
`
    let isDone: boolean = false;
    isDone = true;
`
}}

export function basicTypesObject() {
  return {
      title: "Object Types in Typescript",
      explanation: "In this section, we will learn about the object type in Typescript. Here you see examples of object types.",
      code: 
`
    let obj: object = {
    name: 'John',
    age: 25,
    };  
`
  }}


export function arrayTypes() {
  return {
      title: "Array Types in Typescript",
      explanation: "In this section, we will learn about array types in Typescript. Here you see examples of number and string arrays.",
      code: 
`
    // Example of array: two ways to declare an array
    let list: number[] = [1, 2, 3];
    let names: string[] = ['Alice', 'Bob', 'Charlie'];

    //adding elements (type-safe)
    numbers.push(4);             //OK
    // numbers.push('5');        //Error, '5' is not a number

    // Accessing elements
    let firstNumber: number = numbers[0];     //OK
    // let firstString: string = numbers[0];  //Error

    // Array Methods
    let arrayLength: number = numbers.length; 
`
  }
}

export function arrayTypesTuple() {
    return {
        title: "Tuple Types in Typescript",
        explanation: "In this section, we will learn about tuple types in Typescript. Here you see examples of tuple types.",
        code:
`
    let person: [string, number] = ['Alice', 30];                   
    // Declare tuple with string and number types
    let worker: [string, number, boolean] = ['Bob', 25, true];      
    // Declare tuple with 3 elements

    // Accessing tuple elements
    let name: string = person[0];         // First element
    let age: number = person[1];          // Second element
    let isEmployed: boolean = worker[2];  // Third element
`
}}

export function specialTypesExample() {
  return {
      title: "Special Types in Typescript",
      explanation: "In this section, we will learn about special types in Typescript. Here you see examples of object, tuple, enum, any, void, null, undefined, and never types.",
      code: 
`
      //example of number array
`
  }
}