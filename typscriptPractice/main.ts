export {};

let messages = 'Hello world';
console.log(messages);

let x = 10;                     // allowed to instantiate 'let' variable, but 'const' must be initialized w/value
const y = 20;

let isBiginner: boolean = true;
let total: number = 0;
let name: string = 'Jason';

let sentence: string = `my name is ${name}     
I am a beginner in typescript` ;             //can put a string on 2 lines and will print w/ on new line
console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;         //any other type can be either null or undefined

//arrays  both syntax act same
let list1: number[] = [1,2,3];
let list2: Array<number> = [1,3,3 ];
//mixed arrays (tuples)
let person1: [string, number] = ['Jason', 35] ;  //only allowed 1 string and 1 number. order matters also
// enums value starts at 0 (indexes), can assign value also
enum Color {Red, Green = 5, Blue};
let c: Color = Color.Green;
console.log(c)  // will return 5
// assign datatype 'any' and 
let randomValue: any = 10;
randomValue = true;
randomValue = 'something else';
// very flexible and stops type errors.  can call methods on or call as function ect.
let myVariable: any = 10;

// typeAssertion  overides type checking
function hasName(obj: any): obj is { name: string}{
    return !!obj && typeof obj === "object" && "name" in obj
}
 if (hasName(myVariable)){
     console.log(myVariable.name)
 }
let myVariable2: unknown = 10;
// (myVariable2 as string).toUpperCase();