// Ek function likho jo ek string me har vowel (a, e, i, o, u) ko * se replace kare.
{
  function VowelReplace() {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let str = "hello world"
    let result = ''
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])) {
        result += '*'
      } else {
        result += str[i]
      }
    }
    return result;
  }
  console.log(VowelReplace());
}
// Ek function likho jo ek sentence ke andar jitne words hain, unki count return kare.
{
  function countWords(sentence) {
    let newSentence = sentence.trim();
    let count = 0;
    for (let i = 0; i < newSentence.length; i++) {
        if (newSentence[i] === ' ') {
            count++;
        }
    }
    return count + 1;
}
console.log(countWords('i love css'));

}
{
 let mySentence = 'qwe qwer w   wwerrr   rrrrrr' ;
 let newSentence = mySentence.trim().split(' ').filter(word => word !== '');
console.log(newSentence.length);
}
// Ek function likho jo ek array ke elements ko bina .sort() use kiye descending order me arrange kare.
{

}

// Declare a variable userName and assign it your name. Print it to the console.
{
  let userName = "aleyar"
  console.log(userName);
}
//Declare a variable age using let and assign it your age. Change its value and print both values.
{
  let age = 24;
  let newAge = age + 2;
  console.log(age, newAge);
}
// //Declare a const variable PI with the value 3.14159. Try changing its value. What happens?
// {
//    const PI =  3.14159;
//    PI = 2.3333
//    console.log(PI); //Assignment to constant variable.

// }

// Declare two variables, num1 and num2, assign them numbers, and print their sum.
{
  let num1 = 20;
  let num2 = 34;
  console.log('sum = ', num1 + num2);
}
// Create a variable isStudent and assign it a Boolean value. Print its type using typeof.
{
  let isStudent = true;
  console.log(typeof isStudent);
}
// Declare a variable without assigning any value. Print its value and type.
{
  var assigning;
  console.log(assigning);
}
//Declare a variable message with the value "Hello, World!". Convert it into a number using Number() and check the result.
{
  let message = "Hello, World!"
  let newMeessage = Number(message);
  console.log(newMeessage);
}
//Create three variables using let, const, and var inside a function. Try accessing them outside the function. What happens?
// {
// function myFunction() {
//     var position = 'developer'
//     let newName = 'Aleyar'
//     const aleyarAge = 24
// }
// console.log(position);
// console.log(newName);
// console.log(aleyarAge);

// myFunction()
// }

// Swap the values of two variables without using a third variable.
{
  let firstVar = 23;
  let secondVar = 26;
  firstVar = secondVar;
  console.log(firstVar);
}
// Create a const object named person with properties name and age. Try changing the name property. What happens?
{
  const userName = 'salar';
  const age = 24;
  const newUserName = Number(userName);
  console.log(newUserName, age);

}
// Create an array colors with three colors. Add a new color and print the updated array.
{
  const Colors = ['red', 'yellow', 'blue']
  Colors.push('green')
  console.log(Colors);
}
// Declare an object car with properties brand, model, and year. Print each property separately.
{
  const Car = { brand: 'tyota', modal: 2024, year: 2025 }
  console.log('brand:', Car.brand, "  modal:", Car.modal, '  year:', Car.year);
}
//Write a function that takes a variable and checks if it is null, undefined, or has a value.
{
  function newFunction() {
    let Var1 = null;
    console.log(Var1);
  }
  newFunction();
}
// Create a variable using var inside a block {}. Try accessing it outside the block. What happens?
{
  {
    var blockName = 'block one';
  }
  console.log(blockName);//block one
}
// Create a template literal using variables name and age to print: "My name is Sehar and I am 25 years old."
{
  let stName = 'Sehar';
  let stAge = '25';
  console.log(`My name is ${stName} and I am ${stAge} years old.`);
}
// 1 Declare a variable country and assign your country name. Print it.
{
  let country = 'Palastine';
  console.log(country);

}
// 2️ Create a variable price with value 100. Multiply it by 2 and print the result.
{
  let price = 100;
  let newPrice = price * 2;
  console.log(newPrice);
}
// 3️ Declare a variable fullName and store your first and last name using string concatenation.
{
  let firstName = 'Aleyar';
  let lastName = 'Salar';
  let fullName = firstName + " " + (lastName)
  console.log(fullName);
}
// 4 Declare a variable discountedPrice which is 20% less than price. Print both.
{
  let discountedPrice = 0.2;
  let Price = 450;
  let remainingPrice = discountedPrice * Price;
  remainingPrice = Price - remainingPrice;
  console.log(remainingPrice);
}
// 5 Declare two variables a = 10 and b = "10". Compare them using == and ===.
{
  let a = 10;
  let b = '10';
  console.log('a == b:', a == b);
  console.log('a === b:', a === b);
}
// 6️ Declare a const variable radius = 5. Calculate the area of a circle and print it.
{
  const radius = 5;
  const area = Math.PI * radius * radius
  console.log(area);
  
}
// 7️ Declare a variable isAvailable = true. Convert it to a string and print its type.
{
  const isAvailable = true
  const newIsAvailable = String(isAvailable)
  console.log(typeof newIsAvailable);
 console.log(newIsAvailable);
  
}
// 8️ Write a program that takes a number, converts it to a string, and checks its type.
{
  let myNumber = 23
  let myNewNumber = String(myNumber);
  console.log(typeof myNewNumber);
  
}
// 9️ Declare an array fruits = ["Apple", "Banana", "Mango"]. Change "Banana" to "Orange".
{
  const fruits = ["Apple", "Banana", "Mango"]
  fruits[1] = "Orange";
  console.log(fruits); 
}
// 10 Declare an object student with name, age, and grade. Change the grade property.
{
  const Student = {staName:'aleyar',staAge:24,staGrade:'B'}
  Student.staGrade = "A";
  console.log(Student);
}
// 1️ Declare x = "10" and convert it to a number. Check its type.
{
const x = "10"
const y = Number(x)
console.log(typeof y);
}
// 2 Swap two variables without using a third variable.
{
  let myName = "eman"
  let myFullName = 'Fatima'
  myName = myFullName
  console.log(myName); 
}
