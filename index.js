//Comments in JS use ("//"" for single line and /*  */multi line)

/* cannot use reserved keyword to name a variable, case sensitive, use camelNotation to create names
declare variables on separate lines.  */

console.log('Hello World!');
console.log(2 + 5);

let nameMe = 'Lyxi'; //String Literal
console.log(nameMe);
let age = 30; //Number Literal
let isApproved = false; //Bolean Literal
let firstName = undefined;
let selectColor = null; //Object
console.log(isApproved);

/* JavaScript is a dynamic language therefore the type of a variable can change at runtime (depending on the values we assign to them).  Instead of a variable, which can change, declarations using a constant (const) stay the same */

//"typeof" defines the variable or constant
//there are Primitive Types and Reference Types of variables

console.log(typeof nameMe);
console.log((nameMe = 1));
console.log(typeof nameMe);

//Reference types are Objects, Arrays and Functions
//Object Literal with key / value pairs

let person = {
  name: 'Lexi',
  age: 30,
};

console.log(person);

//Dot NOtation allows us to change the value of the property
person.name = 'John';
console.log(person.name);

//Bracket Notation
person['name'] = 'Mary';
console.log(person.name);

/*Arrays - empty brackets = Literal Array.  Each element in an array has an index: from 0 upwards.  Use the index to get the Element*/
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]);

//Objects in arrays are dynamic and arrays can be expanded
selectedColors[2] = 1;
console.log(selectedColors);
//Objects automatically inherit properties (.) lists them
console.log(selectedColors.find['red']);
console.log('hello there world');
//my first javscr code
console.log('hello worldy ppl');

//Functions - parameter in brackets, when function called argument is used in parameters.  a function is a set of statements that performa tast or generate a value - this one performs a task
function greet(name) {
  console.log('hello' + '  ' + name);
}
//calling function greet with arguments
greet('John');
greet('Mary');

//function with two parameters
function greetings(name, lastName) {
  console.log('Hiya', name + ' ' + lastName);
}
//calling function greetings with arguments
greetings('John', 'Smith');

//Types of functions - this one calcualtes a value
function square(number) {
  return number * number;
}
console.log(square(3));

//checking ligatures
let x => <= >= && ---  ;
