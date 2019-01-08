/* 
Var vs. let

In JavaScript the main difference between var and let is that the var is function scoped, while 
let is block scoped. So while a variable made with let keyword is only available in between { } -s, 
variable made with var is available outside of it. 

Const 

Variables what made with const keyword are constants, so it cannot be overriden anywhere in the scope.
It is also block scoped, so it made and can be used inside of { } -s or the program.
*/

// Var vs. let

// Calling a let variable before its declaration causes error 
'a is not defined'
console.log(a)
let a = '7'

// Do the same thing with var: result a is undifined
console.log(b)
var b = '7'

// Calling a let variable out of scope causes the same error:
// 'myName is not defined'
function sayMyName() {
  let iHaveName = true;
  if (iHaveName) {
    let myName = 'Daniel'
  }
  console.log(myName);
}

sayMyName();

// Do the same with var: the result is no error and 'Daniel' on the console
function sayMyNameAgain() {
  let iHaveName = true;
  if (iHaveName) {
    var myName = 'Daniel'
  }
  console.log(myName);
}

sayMyNameAgain();

// Const 

const myFavouriteAnimal = 'Cat';

// If I make a const variable I can not redefine it later
// It causes 'Identifier 'myFavouriteAnimal' has already been declared'
const myFavouriteAnimal = 'Dog';

// A can't assign a new value for that 
// It causes a typeError: Assignment to constant variable
myFavouriteAnimal = 'Dog';