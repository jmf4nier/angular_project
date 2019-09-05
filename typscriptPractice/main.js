"use strict";
exports.__esModule = true;
var messages = 'Hello world';
console.log(messages);
var x = 10; // allowed to instantiate 'let' variable, but 'const' must be initialized w/value
var y = 20;
var isBiginner = true;
var total = 0;
var name = 'Jason';
var sentence = "my name is " + name + "     \nI am a beginner in typescript"; //can put a string on 2 lines and will print w/ on new line
console.log(sentence);
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
console.log(c); // will return 5
// assign datatype 'any' and 
var randomValue = 10;
randomValue = true;
randomValue = 'something else';
// very flexible and stops type errors.  can call methods on or call as function ect.
var myVariable = 10;
// typeAssertion  overides type checking
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
var myVariable2 = 10;
// (myVariable2 as string).toUpperCase();
