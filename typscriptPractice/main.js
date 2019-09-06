"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var messages = 'Hello world';
//console.log(messages);
var x = 10; // allowed to instantiate 'let' variable, but 'const' must be initialized w/value
var y = 20;
var isBiginner = true;
var total = 0;
var name = 'Jason';
var sentence = "my name is " + name + "     \nI am a beginner in typescript"; //can put a string on 2 lines and will print w/ on new line
//console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined; //any other type can be either null or undefined
//arrays  both syntax act same
var list1 = [1, 2, 3];
var list2 = [1, 3, 3];
//mixed arrays (tuples)
var person1 = ['Jason', 35]; //only allowed 1 string and 1 number. order matters also
// enums value starts at 0 (indexes), can assign value also
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 5] = "Green";
    Color[Color["Blue"] = 6] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
//console.log(c)  // will return 5
// assign datatype 'any' and 
var randomValue = 10;
randomValue = true;
randomValue = 'something else';
// very flexible and stops type errors.  can call methods on or call as function ect.
var myVariable = 'sarah';
// typeAssertion  overides type checking
var myVariable2 = 10;
// (myVariable2 as string).toUpperCase();
//union of types can be assigned either (maybe for user input)
var multiType;
multiType = 20;
multiType = true;
// function will require correct data type can use ? to denote optional argument (must always come after required args)
//also can have default values.  if not given a new value the default will be assigned
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
;
// console.log(add(5));
function fullName(person) {
    //console.log(`${person.firstName} ${person.lastName}`);
}
// basically make a reusable 'type' using interface. cleaner code  
function fullNameWithInterface(person) {
    // console.log(`${person.firstName} ${person.lastName}`);
}
var p = {
    firstName: 'Bruce',
    lastName: 'wayne'
};
fullName(p);
fullNameWithInterface(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        //console.log(`Good morning ${this.employeeName}`)
    };
    return Employee;
}());
var empl1 = new Employee('Jason');
empl1.greet();
// basic inheritance.  super + arg runs the employee constructor and make new employee with a name
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        //console.log(`manager delegateing task`)
    };
    return Manager;
}(Employee));
var m1 = new Manager('Henry');
m1.greet();
m1.delegateWork();
// WONT work because it is 'protected' can only be used in class or child of base class---console.log(m1.employeeName)
// m1.managerName is NOT a thing
//public vs private.  public is default, private CANNOT be used outside of class
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.dogName = name;
    }
    Dog.prototype.callName = function () {
        //console.log(this.dogName)
    };
    return Dog;
}());
var d = new Dog('Fido');
// this WONT work outside of class if private ---- console.log(d.dogName)
d.callName(); //this WILL work because function is inside class
// Alternate way of initializing fields in the constructor and also using 'get' and 'set' properties to get protected info outside of class
var Cat = /** @class */ (function () {
    //optional name field. Also convention to add underscore to differintiate from property names
    function Cat(_name) {
        this._name = _name;
    }
    Object.defineProperty(Cat.prototype, "name", {
        get: function () {
            console.log("Current Name: " + this._name);
            return this._name;
        },
        // useful for performing some kind of validation if user is allowed to change values
        set: function (value) {
            if (value.length < 2)
                throw new Error('Must be a longer than one character');
            this._name = value;
            console.log("Name changed to: " + this._name);
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return Cat;
}());
var eric = new Cat();
//can now access private name outside of class using Name property
eric.name;
eric.name = 'Jason';
eric.name;
eric.name = 'a';
eric.name;
