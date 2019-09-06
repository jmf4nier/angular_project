export {};

let messages = 'Hello world';
//console.log(messages);

let x = 10;                     // allowed to instantiate 'let' variable, but 'const' must be initialized w/value
const y = 20;

let isBiginner: boolean = true;
let total: number = 0;
let name: string = 'Jason';

let sentence: string = `my name is ${name}     
I am a beginner in typescript` ;             //can put a string on 2 lines and will print w/ on new line
//console.log(sentence);

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
//console.log(c)  // will return 5

// assign datatype 'any' and 
let randomValue: any = 10;
randomValue = true;
randomValue = 'something else';

// very flexible and stops type errors.  can call methods on or call as function ect.
let myVariable: any = 'sarah';

// typeAssertion  overides type checking
 
 
let myVariable2: unknown = 10;
// (myVariable2 as string).toUpperCase();


//union of types can be assigned either (maybe for user input)
let multiType: number | boolean;
multiType = 20;
multiType = true;

// function will require correct data type can use ? to denote optional argument (must always come after required args)
//also can have default values.  if not given a new value the default will be assigned
function add(num1?: number, num2: number = 10): number {
    if (num2)
        return num1 + num2;
    else
        return num1
};
// console.log(add(5));

function fullName(person: {firstName: string, lastName: string}){
    //console.log(`${person.firstName} ${person.lastName}`);
}
// basically make a reusable 'type' using interface. cleaner code  
function fullNameWithInterface(person: Person){
    // console.log(`${person.firstName} ${person.lastName}`);

}

let p = {
    firstName: 'Bruce',
    lastName: 'wayne'
}
//interfaces can use '?' to note optional property.  useful for forms
interface Person {
    firstName: string,
    lastName?: string;
}
fullName(p)
fullNameWithInterface(p)

class Employee {
    protected employeeName: string;

    constructor(name: string){
        this.employeeName = name;
    }

    greet(){
        //console.log(`Good morning ${this.employeeName}`)
    }
}

let empl1 = new Employee('Jason');
empl1.greet()


// basic inheritance.  super + arg runs the employee constructor and make new employee with a name
class Manager extends Employee {
    constructor(managerName: string){
        super(managerName)
    }
    delegateWork(){
        //console.log(`manager delegateing task`)
    }
}
let m1 = new Manager('Henry')
m1.greet()
m1.delegateWork()
// WONT work because it is 'protected' can only be used in class or child of base class---console.log(m1.employeeName)
// m1.managerName is NOT a thing

//public vs private.  public is default, private CANNOT be used outside of class
class Dog{
    //public 
    private dogName: string;
    constructor(name: string){
        this.dogName = name
    }
    callName(){
        //console.log(this.dogName)
    }
}
let d = new Dog('Fido')
// this WONT work outside of class if private ---- console.log(d.dogName)
d.callName()  //this WILL work because function is inside class

// Alternate way of initializing fields in the constructor and also using 'get' and 'set' properties to get protected info outside of class
class Cat{
    //optional name field. Also convention to add underscore to differintiate from property names
    constructor(private _name?: string){
    }
    get name(){
        console.log(`Current Name: ` + this._name);
        return this._name;
    };

    // useful for performing some kind of validation if user is allowed to change values
    set name(value){
        if (value.length < 2)
            throw new Error('Must be a longer than one character');
        this._name = value;
        console.log(`Name changed to: ` + this._name)
    };
}
let eric = new Cat()
//can now access private name outside of class using Name property
eric.name
eric.name = 'Jason'
eric.name
eric.name =  'a'
eric.name