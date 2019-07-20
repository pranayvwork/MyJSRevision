//variables and declarations
//declare  and initialize in one go
var answer_to_life_universe_and_everything = 42;
//declare first 
var fortune; // Here the value of fortune is undefined. Very Important.
//and then initialize the value
fortune = 500;

/************Primitives***************/
// Number, string, boolean, undefined, null
//Ecmascript 6 has a new datatype symbol.

//Number in JS are double precision 64 bit format IEEE 754 values
// What this means is that you don't have integers as such.
var a = 10;
var b = 20;
var c = a + b;
console.log(a);
console.log(b);
console.log(c);

//String
//Sequence of Unicode 16 bit characters
//There is no char type in JS. A character is a String of length 1.
var d = "hello";
console.log("Printing a String: " + d);

//	Boolean
var e = true;
console.log("variable e holds as boolean value: " + e);

/* JS is a loosely typed language... No Strong Type association, 
  means at no point in time can we say that 'a' is a number variable.
 a just happens to hold a Number. at a Later point in time 'a' can be assigned a String as well.
 Example */

var test = 10;
console.log("Printing test variable holding number:" + a);

test = "Cheers";
console.log("The same test variable now holds a string:" + test );

//Undefined
/*
First, understand the difference between Declaration and Definition.
Declaration: When you ask the compiler to create a new variable (a placeholder) and give it a name.
Example var age; or var salary;
Definition: it when you assign a value to the variable
That is age = 42;
Which means var age = 42; statement declares and defines the variable age in 1 line.
But what is the value assigned to age at this point -  var age;
At this point the value of age is undefined.
So which type category does this undefined belong to?? It belongs to Undefined.
Like a number 10 belongs to Number, true/false belong to Boolean..
in similar way undefined goes under Undeined.
Number can have any number possible under it
Boolean can have 2 values under it.. true or false.
String can have any string under it.
Similarly Undefined can have only 1 value under it.. that is .. undefined.  
*/
var age;
console.log("Printing age:" + age);

// Null
/*
Another type in JS is null. which can have 1 value ..that is .. null.
Difference between undefined and null.. both seems to be same
Both indicate absense of a real value.
For example In a real paper form FirstName, MiddleName, LastName 
FirstName = John
MiddleName = NA 
LastName = Doe
// The person does not have a middle name. 
//Now there are two things which can be done while filling the form
1- The middle name is kept empty and hand out the form to HR.
The HR may think if this person does not have a middle name Or 
HR may think did he not read the filed altogether. This is undefined situation.
2- We proivde a dash or  NA. This is the case of null value.
We are explicitly saying Middle Name is Not Applicable. It has no value.
For programming case.. MiddleName is null. 
*/
var middleName = null;
console.log("Middle Name is : " + middleName);

//Symbol
/*
ES6 or Ecmascript 6 introduces a new datatype.. symbol.
*/