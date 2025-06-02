// const { keys } = require("swig/lib/utils");

// //total three variable var , const , let
// {
//   //var is old way. function scoped ha. can be redeclared and updated. hoisted with undefined.
//   var InstituteName = 'Alnoor Welfare Foundation';
//   console.log(InstituteName);
//   var InstituteName = 'Alnoor Research Center';
//   console.log(InstituteName);
// }
// {
//   //let (modern and preffered). Block-scoped {}. Can be updated but not re-declared.
//   let age = 40;
//   console.log(age)
// }
// {
//   //const (For Constant).Block-scoped {}.Cannot be updated or re-declared
//   const name = 'Aleyar';
//   console.log(name);
// }
// {
//   //Primitive Data Types (Stored directly in memory). String,Number,Boolean,Undefined,Null,Symbol(ES6),BigInt(ES11)
//   //Reference Data Types (Stored as references in memory). Object,Array (Special Object),Function (Special Object),Date (Built-in Object)
//   // Primitive Data Types
//   let name = 'Salar'; //string
//   let age = 25; //number
//   let isInclude = true; //boolean
//   let x; // undefine
//   let nothing = null; //Null
//   let uniqueID = Symbol("id"); //Symbol
//   let bigNumber = 9007199254740991n; //bigInt

//   //Reference Data Types
//   let person = { name: "Sehar", age: 25 };
//   console.log(typeof person); // "object"
//   let fruits = ["Apple", "Banana", "Mango"];//array
//   console.log(typeof fruits); // "object"
//   function greet() {
//     return "Hello";
//   }
//   console.log(typeof greet); // "function"
//   // Date (Built-in Object)
//   let today = new Date();
//   console.log(typeof today); // "object"

// }
// {
//   //types of conversion: JavaScript is dynamically typed (variables can change types).
//   //String to Number
//   let str = "100";
//   let num = Number(str); // Convert string to number
//   console.log(num, typeof num); // 100 "number"
//   // Number to String
//   let age = 30;
//   let strAge = String(age);
//   console.log(strAge, typeof strAge); // "30" "string"
//   //Boolean to Number
//   let bool = true;
//   console.log(Number(bool)); // 1
//   console.log(Number(false)); // 0
//   // Checking Data Type
//   console.log(typeof 42); // "number"
//   console.log(typeof "Hello"); // "string"
//   console.log(typeof true); // "boolean"
//   console.log(typeof []); // "object"
//   console.log(typeof {}); // "object"
//   console.log(typeof function () { }); // "function"
// }
// {
//   // Declare a variable userName and assign it your name. Print it to the console.
//   let userName = "Sehar";
//   console.log(userName);
//   // Declare a variable age using let and assign it your age. Change its value and print both values.
//   let age = 25;
//   console.log(age);
//   // Declare a const variable PI with the value 3.14159. Try changing its value. What happens?
//   const PI = 3.14159;
//   console.log(PI);
//   // Declare two variables, num1 and num2, assign them numbers, and print their sum.
//   let num1 = 20;
//   let num2 = 30;
//   console.log("num3 =", num1 + num2);
//   // Create a variable isStudent and assign it a Boolean value. Print its type using typeof.
//   let isStudent = true;
//   console.log(typeof isStudent);

// }
// {
//   // Declare a variable without assigning any value. Print its value and type.
//   let userId;
//   console.log(userId); //undefine
//   // Declare a variable message with the value "Hello, World!". Convert it into a number using Number() and check the result.
//   let message = "Hello, World";
//   let newMeessage = Number(message);
//   console.log(newMeessage, typeof newMeessage);
//   //Create three variables using let, const, and var inside a function. Try accessing them outside the function. What happens?
//   function Sum() {
//     let x = 30;
//     var y = 20;
//     const z = 10;
//     console.log(x);
//     console.log(y);
//     console.log(z);

//   }
//   Sum();
//   // console.log(x); //not define
//   //  console.log(y); //not define
//   // console.log(z); //not define

//   // Swap the values of two variables without using a third variable.
//   let userName = 'Salar';
//   let newUser = 'Aleyar';
//   [userName, newUser] = [newUser, userName]
//   console.log(userName);
//   console.log(newUser);

//   //Create a const object named person with properties name and age. Try changing the name property. What happens?
//   const person = { name: 'maaz', age: 25 }
//   person.name = 'ali'
//   person.age = 27
//   console.log(person);
//   console.log(Object.keys(person));

//   // Create an array colors with three colors. Add a new color and print the updated array.
//   const ColorsData = ['red', 'green', 'blue']
//   ColorsData.push('sky')
//   console.log(ColorsData);

//   //Declare an object car with properties brand, model, and year. Print each property separately.
//   const car = { brand: 'cultus', modal: 2020, year: 2025 }
//   console.log(car.brand);
//   console.log(car.modal);
//   console.log(car.year);

//   // Write a function that takes a variable and checks if it is null, undefined, or has a value.
//   function CheckValue(Value) {
//     if (Value === null) {
//       console.log('this variable is null');
//     } else if (Value === undefined) {
//       console.log('this variable is undefined');
//     } else {
//       console.log('this variable has value');
//     }

//   }
//   CheckValue();

//   // Create a variable using var inside a block {}. Try accessing it outside the block. What happens?
//   {
//     var z = 25;
//   }
//   console.log(z);

//   // Create a template literal using variables name and age to print: "My name is Sehar and I am 24 years old."
//   let name = 'sehar'
//   let age = 24
//   console.log(`My name is ${name} and I am ${age} years old.`);

//   // Declare a variable country and assign your country name. Print it.
//   const Country = 'Palastine'
//   console.log(Country);

//   // Create a variable price with value 100. Multiply it by 2 and print the result.
//   let price = 100;
//   console.log(price * 2);

//   //Declare a variable fullName and store your first and last name using string concatenation.
//   let firstName = 'Salar'
//   let lastName = 'maz'
//   let fullName = firstName + " " + lastName
//   console.log(fullName);

//   // Declare a variable discountedPrice which is 20% less than price. Print both.
//   let productPrice = 2400
//   let discountedPrice = 2400 * 0.2
//   console.log(productPrice, discountedPrice);

//   // Declare two variables a = 10 and b = "10". Compare them using == and ===.
//   let a = 10
//   let b = "10"
//   console.log(a == b);
//   console.log(a === b);

//   // Declare a const variable radius = 5. Calculate the area of a circle and print it. 
//   const radius = 5
//   const circle = Math.PI * (radius * radius)
//   console.log(circle);

//   // Declare a variable isAvailable = true. Convert it to a string and print its type.
//   let isAvailable = true
//   let stringValue = String(isAvailable)
//   console.log(stringValue);
//   console.log(typeof stringValue);

//   // Write a program that takes a number, converts it to a string, and checks its type.
//   let shoesPrice = 24
//   let newShoesPrice = String(shoesPrice)
//   console.log(typeof newShoesPrice);

//   // Declare an array fruits = ["Apple", "Banana", "Mango"]. Change "Banana" to "Orange".
//   const fruits = ["Apple", "Banana", "Mango"]
//   fruits[1] = "Orange"
//   console.log(fruits);

//   // Declare an object student with name, age, and grade. Change the grade property.
//   const student = { name: 'salar', age: 24, grade: 'A+' }
//   student.grade = 'B+'
//   console.log(student);

//   // Declare x = "10" and convert it to a number. Check its type.
//   let x = '10'
//   let y = Number(x)
//   console.log(typeof x);
//   console.log(typeof y);

//   {
//     // Swap two variables without using a third variable.
//     let a = 10;
//     let b = 20;
//     [a, b] = [b, a]
//     console.log(a);
//     console.log(b);

//   }
//   {
//     // Declare a variable inside a function using var. Try to access it outside the function.
//     {
//       var hayeName = 'aleyar'
//     }
//     console.log(hayeName);
//   }
//   {
//     // Create a const object and try to change the object’s property and reassign the object itself.
//     const newCar = { Name: 'salar', grade: 'B' }
//     newCar.Name = 'Aleyar'
//     console.log(newCar);
//   }
//   {
//     // Write a program that checks if a variable is null, undefined, or has a value.
//     function CheckValue(Value) {
//       if (Value === null) {
//         console.log('this variable is null');
//       } else if (Value === undefined) {
//         console.log('this variable is undefined');
//       } else {
//         console.log('this variable is value');
//       }
//     }
//     CheckValue()
//   }
//   {
//     // Declare a variable temperature with the value 30. Subtract 5 from it and print the result.
//     let temperature = 30
//     console.log(temperature - 5);
//   }
//   {
//     // Declare a const variable GRAVITY = 9.8. Try changing its value and observe the error.
//     const GRAVITY = 9.8
//     // GRAVITY = 5
//     console.log(GRAVITY);

//   }
//   {
//     // Create a variable isRaining and assign it a boolean value. Convert it to a number.
//     let isRaining = false;
//     let nowRaining = Number(isRaining)
//     console.log(nowRaining);

//   }
//   {
//     // Declare two string variables firstName and lastName, then print "Hello, <firstName> <lastName>" using template literals.
//     let firstName = 'salar'
//     let lastName = 'maz'
//     console.log(`Hello, ${firstName} ${lastName} `);
//   }
//   {
//     // Declare a variable counter = 5. Increment it by 1 using ++ and print it.
//     let counter = 5;
//     counter++;
//     console.log(counter);

//   }
//   {
//     // Declare a variable num1 = "15" (string) and num2 = 5 (number). Add them.
//     let num1 = "15"
//     let num2 = 5
//     console.log(num1 + num2); //string + number → string
//   }
//   {
//     // Declare a variable totalCost = "100".Convert it to a number and subtract 10.
//     let totalCost = "100"
//     totalCost = Number(totalCost)
//     console.log(totalCost - 10);
//   }
//   {
//     // Declare let x; and let y = null;. Print both values and their types.
//     let x;
//     let y = null;
//     console.log(x);
//     console.log(typeof x);
//     console.log(y);
//     console.log(typeof y);

//   }
//   {
//     // Declare an array colors = ["red", "blue", "green"]. Add "yellow" to the array.
//     let colors = ["red", "blue", "green"]
//     colors.push('yellow')
//     console.log(colors);

//   }
//   {
//     //Declare an object car with properties brand and year. Add a new property color.
//     const car = { brand: 'tyota', year: '2021' }
//     car.color = 'black'
//     console.log(car);

//   }
//   {
//     // Declare a variable count = 10. Use += operator to increase it by 5.
//     let count = 10
//     count += 5
//     console.log(count);
//   }
//   {
//     //  Create a const array numbers = [1, 2, 3]. Try modifying an element inside the array.
//     const numbers = [1, 2, 3]
//     numbers.push(4)
//     console.log(numbers);
//   }
//   {
//     // Write a program that checks whether a variable is NaN (Not a Number).
//     let age = 'twenty'
//     newAge = Number(age)
//     console.log(newAge);

//   }
//   {
//     //  Declare a variable using let inside a function. Try accessing it outside the function.
//     // function newVariable() {
//     //   let num = 22;
//     // }
//     // console.log(num);
//     // newVariable();// output num is not define. but let is block scope variable.
//   }
//   {
//     // What happens when you declare a variable with var inside a function and access it before declaration?
//     var dressPrice;
//     function sum() {
//       dressPrice = 500;
//     }
//     sum()
//     console.log(dressPrice);
//   }
//   {
//     // Declare a function and define a variable inside it. Try accessing the variable outside the function.
//     function insidefuntion() {
//       var itsValue = 607;
//       return itsValue;
//     }
//     console.log(insidefuntion());
//   }
//   {
//     //  Write a program that declares var x = 5; inside a function. Declare let w = 10; in a block {}. Try printing both outside.
//     function decalre() {
//       var x = 5;
//       return x;
//     }
//     console.log(decalre());
//     {
//       let w = 160;
//     }
//     // console.log(w); // refference error
//   }
//   {
//     //  Declare a global variable and a local variable with the same name inside a function. Print both inside the function.
//     var newmessage = 'i am a global variable';
//     function showMessage() {
//       var newmessage = 'i am a local variable';
//       console.log("inside function:",newmessage); 
//     }
//     showMessage();
//     console.log("outside function:",newmessage); 
//   }
//   {
//     //Use typeof on an undeclared variable. What happens?
//     console.log(typeof abc);
//   }

// }
// console.log(hayee());
// function hayee(){
//   console.log('123');
// }

// var x = 10;

// function test() {
//     console.log(x); 
//     var x = 20;  
//     console.log(x);
// }

// test();

// let name = "Sehar";

//  {
//     let name = "Ali";
//     console.log(name);
// }

// console.log(name);

// function outer() {
//   let message = "Hello World";
//   let Sname;
//   console.log(Sname);
//   function inner() {
//       console.log(message);
//      Sname = 'something';
//   }

//   inner();
// }

// outer();
// console.log(a);
// let a = 5;
// console.log(a);

// hello();

// function hello() {
//     console.log("Hi there!");
// }

// function counter() {
//   let count = 0;

//   return function () {
//       count++;
//       console.log(count);
//   };
// }

// const myCounter = counter();
// myCounter();
// myCounter();

// function createBankAccount() {
//   let balance = 100;

//   return {
//     deposit: function (amount) {
//       balance += amount;
//       console.log(`Balance: ${balance}`);
//     }
//   };
// }

// const myAccount = createBankAccount();
// myAccount.deposit(50);
// console.log(myAccount.balance);


// function outer() {
//   let count = 0;

//  function inner() {
//       count++;
//       console.log(count); 
//   };
// return inner;
// }
// const a = outer();
// a();
// a();

// function delayedMessage() {
//   let message = "Hello, this is delayed!";
//   setTimeout(function () {
//       console.log(message);
//   }, 3000);
//   console.log('hayee there');
// }

// delayedMessage();


// function example() {
//   if (true) {
//       var x = 10;
//       let y = 20;
//       const z = 30;
//   }
//   console.log(x); // Accessible?
//   // console.log(y); // Accessible?
//   // console.log(z); // Accessible?
// }
// example();

// function test() {
//   var a = 5;
//   {
//     console.log(a);
//     var a = 10;
//   }
//   console.log(a);
// }
// test();

// let a = "Hello";
// function greet() {
//   console.log(a);
//   let a = "Hi";
// }
// greet();

// var hoistedVar;
// console.log(hoistedVar);
// hoistedVar = "I am hoisted!";

// function outer() {
//     let x = 5;

//     return function inner() {
//         console.log(x);
//     };
// }

// const closure1 = outer();
// const closure2 = outer();

// closure1();
// closure2();

function createMultiplier(x) {
   function inner(y) {
        return x * y;
    };
    return inner;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); 
console.log(triple(5)); 


