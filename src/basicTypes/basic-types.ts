export function basicTypesExample() {
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

    // Example of string: 
    // represents a sequence of characters
    let color: string = 'blue';
    color = 'red';
`
    }
    }

export function arrayTypesExample() {
  return {
      title: "Array Types in Typescript",
      explanation: "In this section, we will learn about array types in Typescript. Here you see examples of number and string arrays.",
      code: 
`
      //example of number array
`
  }
}

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

/* Basic types in Typescript:
- number
- string
- boolean
- object
- array
- tuple
- enum
- any
- void
- null and undefined
- never
- unknown
*/

// Example of number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let floating: number = 6.5;
let negative: number = -6;

// Example of string: represents a sequence of characters
let color: string = 'blue';
color = 'red';

// Example of boolean: represents a logical entity and can have two values: true and false
let isDone: boolean = false;
isDone = true;

// Example of object: represents the non-primitive type
let obj: object = {
  name: 'John',
  age: 25,
};

// Example of array: two ways to declare an array
let list: number[] = [1, 2, 3];
let names: string[] = ['Alice', 'Bob', 'Charlie'];

//adding elements (type-safe)
//numbers.push(4);             //OK
// numbers.push('5');        //Error, '5' is not a number

// Accessing elements
//let firstNumber: number = numbers[0];     //OK
// let firstString: string = numbers[0];  //Error, numbers[0] is not a string

// Array Methods
//let arrayLength: number = numbers.length; 

// Example of tuple: allows you to express an array where the type of a fixed number of elements is known
let person: [string, number] = ['Alice', 30];                   // Declare tuple with string and number types
let worker: [string, number, boolean] = ['Bob', 25, true];      // Declare tuple with 3 elements

// Accessing tuple elements
let name: string = person[0];         // Accessing first element
let age: number = person[1];          // Accessing second element
let isEmployed: boolean = worker[2];  // Accessing third element

// Example of enum: provides a way to define a set of named constants
enum Color {
  Red,
  Green,
  Blue,
}

// Example of any: represents the dynamic type
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;

// Example of void: used on function return types
function warnUser(): void {
  console.log('This is my warning message');
}

// Example of null and undefined: have their own types named null and undefined
let u: undefined = undefined;
let n: null = null;

// Example of never: represents the type of values that never occur
function error(message: string): never {
  throw new Error(message);
}


