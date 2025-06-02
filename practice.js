// Ek function likho jo kisi number ke digits ka sum return kare.
// Input: 1234
// Output: 10 (1+2+3+4)
{
  function Digit(number) {
    let sum = 0;
    let str = number.toString();
    for (let i = 0; i < str.length; i++) {
      sum += parseInt(str[i]);
    }
    return sum;
  }
  console.log(Digit(12345));
}
// sum of all elements- const numbers = [2, 4, 6, 8];
{
  const numbers = [2, 4, 6, 8];
  const sum = numbers.reduce((total, num) => total + num, 0)
  console.log(sum);

}
//double each number
{
  const numbers = [1, 3, 5];
  const doubleNumber = numbers.map((x) => x + x);
  console.log(doubleNumber);
}
// Filter Even Numbers
{
  const nums = [1, 2, 3, 4, 5, 6];
  const EvenNums = nums.filter(x => x % 2 === 0);
  console.log(EvenNums);
}
// Find First Number Greater Than 10
{
  const values = [4, 9, 15, 2, 20];
  const FirstNumberGreater10 = values.find(x => x >= 10);
  console.log(FirstNumberGreater10);
}
//Check if All Numbers Are Positive
{
  const nums = [1, 5, 9, -3];
  const CheckNumberPositive = nums.every(x => x >= 0);
  console.log(CheckNumberPositive);

}
//Make Strings Uppercase
{
  const fruits = ["apple", "banana", "cherry"];
  const StringUpperCase = fruits.map(x => x.toUpperCase());
  console.log(StringUpperCase);
}
// Count Even Numbers. Count how many even numbers are in the array.
{
  const nums = [2, 5, 8, 11, 14];
  const EvenNumbers = nums.filter(x => x % 2 == 0).length;
  console.log(EvenNumbers);
}
//Create a Sentence from Words.Combine all words into a single sentence: "I love JavaScript".
{
  const words = ["I", "love", "JavaScript"];
  const SingleSentence = words.join(' ');
  console.log(SingleSentence);
}
// Get Last Element of an Array.Return the last element.
{
  const items = ["pen", "pencil", "eraser"];
  const LastItems = items[items.length - 1];
  console.log(LastItems);

}

{
  const myString = "aleyar";
  const myNewString = myString.split('').sort().join('');
  console.log(myNewString);
  const myString2 = "yarale";
  const myNewString2 = myString2.split('').sort().join('');
  console.log(myNewString2);
  if (myNewString === myNewString2) {
    console.log(true);
  } else {
    console.log(false);

  }
}
//split() => sort() => join() => compare(===)
{
  function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    let string1 = str1.split('').sort().join('');
    let string2 = str2.split('').sort().join('');
    return string1 === string2;
  }
  console.log(isAnagram('asad', 'saad'));
}
//maximum value in array
{
  const array = [1, 7, 4, 9, 20];
  let max = -Infinity;
  let secMax = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  console.log(max);
}
// check kryn k array sorted ha ya nae.
{
  function isSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        return false;
      }
    }
    return true;
  }
  console.log(isSorted([1, 2, 3, 4, 5]));
}
// Ek function likho jo ek sentence ke andar jitne words hain, unki count return kare.
{
  // let sentence = "  js    is programming     language"
  // let newSentence = sentence.trim().split(' ').filter(x=>x!='').length;
  // console.log(newSentence);
  function CountWords(sentence) {
    let newSentence = sentence.trim().split(' ').filter(x => x != '').length;
    return newSentence
  }
  console.log(CountWords('js is a programming language'));
}
//Reverse an Array.Return a new array with elements in reverse order.
{
  const nums = [1, 3, 2, 4];
  const newNumbs = nums.reverse()
  console.log(newNumbs);
}
// Remove Falsy Values.Create a new array with only truthy values.
{
  const mixed = [0, "hello", false, 42, "", null];
  const removeFalsy = mixed.filter(Boolean);
  console.log(removeFalsy);
}
// Find the Maximum Number.
{
  const nums = [3, 17, 6, 29, 12];
  const LargestNumber = nums.reduce((max, current) => current > max ? current : max);
  console.log(LargestNumber);
}
// Add Index to Each Item.Return array like ["0: cat", "1: dog", "2: bird"].
{
  const animals = ["cat", "dog", "bird"];
  const animalsIndex = animals.map((items, index) => `${index}:${items}`);
  console.log(animalsIndex);
}
// Flatten an Array One Level.
{
  const nested = [1, [2, 3], 4, [5]];
  const FlattenArray = nested.flat();
  console.log(FlattenArray);
}
//Count Occurrences of Each Element. 
{
  const letters = ["a", "b", "a", "c", "b", "a"];
  const CountElements = letters.reduce((count, current) => {
    count[current] = (count[current] || 0) + 1;
    return count;
  }, {});
  console.log(CountElements);
}
//Double Only the Odd Numbers. const nums = [1, 2, 3, 4, 5];
{
  const nums = [1, 2, 3, 4, 5];
  const OddNumbs = nums.map(x => (x % 2 !== 0 ? x * 2 : x));
  console.log(OddNumbs);
}
//Check if Some Numbers Are Greater Than 10
{
  const nums = [3, 8, 11, 2];
  const newNums = nums.some(x => x >= 10);
  console.log(newNums);
}
//Get Only Unique Values.
{
  const arr = [1, 2, 2, 3, 1, 4];
  let Unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Unique.includes(arr[i])) {
      Unique.push(arr[i]);
    }

  }
  console.log(Unique);

}
//Sort Numbers Ascending
{
  const nums = [9, 4, 1, 7];
  const AscendingNumbs = nums.sort((a, b) => a - b);
  console.log(AscendingNumbs);
}
//Create Array of Squares
{
  const nums = [2, 3, 4];
  const squareNumbs = nums.map(x => x * x);
  console.log(squareNumbs);
}
//Filter Numbers Greater Than 10
{
  const numbers = [4, 11, 8, 20, 3];
  const newNumbs = numbers.filter(x => x >= 10);
  console.log(newNumbs);
}
//Keep Only Strings
{
  const items = [1, "apple", true, "banana", 42];
  const StringOnly = items.filter(x => typeof (x) == 'string');
  console.log(StringOnly);
}
//Remove Empty Strings
{
  const words = ["hello", "", "world", "", "JS"];
  const pureWords = words.filter(word => word !== '');
  console.log(pureWords);
}
// Find First Even Number
{
  const nums = [1, 3, 7, 10, 13];
  const FirstEven = nums.find(x => x % 2 === 0);
  console.log(FirstEven);
}
//Find Product by Name
{
  const products = [
    { id: 1, name: "pen" },
    { id: 2, name: "notebook" },
  ];
  const productFind = products.find((product) => product.name === 'notebook');
  console.log(productFind);
}
//Find First Name Starting with "A"
{
  const names = ["Zara", "Ali", "Sara",];
  const StartAName = names.find(x => x.startsWith('A'));
  console.log(StartAName);
}
//Check If Any Number is Negative
{
  const nums = [4, -2, 5, 0];
  const CheckNumber = nums.some(x => x < 0);
  console.log(CheckNumber);

}
// Is There Any Admin?
{
  const users = [
    { name: "Sehar", role: "user" },
    { name: "Ali", role: "admin" },
  ];
  const AnyAdmin = users.some(x => x.role === 'admin');
  console.log(AnyAdmin);
}
//Any Long String?
{
  const words = ["hi", "hello", "supercalifragilistic"];
  const NewWords = words.some((x) => x.length > 10);
  console.log(NewWords);
}
// All Numbers Are Positive?
{
  const nums = [2, 4, 6, 8];
  const PositiveNumbs = nums.every(x => x > 0);
  console.log(PositiveNumbs);
}
//All Names Are Strings?
{
  const names = ["Ali", "Sehar", 123];
  const NameString = names.every(x => typeof (x) === "string")
  console.log(NameString);
}
//Are All Products In Stock?
{
  const items = [
    { name: "pen", inStock: true },
    { name: "pencil", inStock: true },
    { name: "eraser", inStock: true },
  ];
  const itemsInStock = items.every(x => x.inStock === true);
  console.log(itemsInStock);

}
//Flatten One Level
{
  const arr = [1, [2, 3], [4, 5]];
  const NweArr = arr.flat();
  console.log(NweArr);

}
// Flatten Deeply Nested Array
{
  const arr = [1, [2, [3, [4]]]];
  const nweAarry = arr.flat(Infinity)
}
// Flatten Mixed Array
{
  const arr = ["a", ["b", ["c"]], "d"];
  const newArray = arr.flat();
  console.log(newArray);

}
//Sum of Numbers
{
  const nums = [1, 2, 3, 4];
  const SumNumbs = nums.reduce((acc, current) => acc + current, 0);
  console.log(SumNumbs);
}
//Multiply All Numbers
{
  const nums = [2, 3, 4];
  const MultiplyNumbs = nums.reduce((acc, current) => acc * current, 1);
  console.log(MultiplyNumbs);
}
// Find Maximum Value
{
  const nums = [10, 5, 20, 8];
  const MaximumNumbs = nums.reduce((max, num) => max > num ? max : num, 0);
  console.log(MaximumNumbs);
}
//Count Occurrences
//acc[fruit] = is object ke andar "fruit" naam ka key/value access karo.

{
  const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
  const countFruits = fruits.reduce((acc, fruit) => {
    //"Accumulator mein current fruit ki value check karo.
    // Agar koi value pehle se hai to use karo, warna 0 se shuru karo,
    // phir us mein 1 add karke acc[fruit] mein store karo."
    //"Pehli dafa mila to 0 + 1,next time mila to previous count + 1."
    acc[fruit] = (acc[fruit] || 0) + 1
    return acc;
  }, {})
  console.log(countFruits);
}
//Convert Array to Object
{
  const users = [
    { id: 1, name: "Sehar" },
    { id: 2, name: "Eman" },
    { id: 3, name: "Aleyar" },
    { id: 4, name: "Ali" },
  ];
  const ArrayToObject = users.reduce((acc, user) => {
    //acc object mein key = user.id aur uski value = user.name daal do.
    acc[user.id] = user.name;
    return acc;
  }, {})
  console.log(ArrayToObject);
}
//Flatten an Array using Reduce."Reduce ke saath har sub-array ko merge karo, aur flat array bana do."
{
  const nested = [[1, 2], [3, 4], [5]];
  //"Har sub-array ko le kar accumulator ke saath mila do, aur result mein ek single flat array banao."
  const FlattenArray = nested.reduce((acc, arr) => acc.concat(arr), []);
  console.log(FlattenArray);
}
//Create Sentence from Words
{
  const words = ["I", "love", "JS"];
  const Sentence = words.reduce((acc, word) => acc + " " + word);
  console.log(Sentence);
}
//Total Price from Cart
{
  const cart = [
    { item: "pen", price: 30 },
    { item: "notebook", price: 50 },
    { item: "eraser", price: 10 },
  ];
  const totalPrice = cart.reduce((acc, product) => acc + product.price, 0);
  console.log(totalPrice);
}
//Group by Category
{
  const items = [
    { name: "pen", category: "stationery" },
    { name: "apple", category: "fruit" },
    { name: "notebook", category: "stationery" },
  ];
  const groupCategory = items.reduce((acc, item) => {
    // "Check karo ke acc mein is category ka koi array pehle se exist karta hai ya nahi.
    // Agar nahi hai, to naya khali array [] banao."
    acc[item.category] = acc[item.category] || [];
    //Reduce har step ke baad acc return karta hai taake agli iteration mein use ho.
    acc[item.category].push(item.name);
    return acc;
  }, {})
  console.log(groupCategory);
}
//Create Frequency Array
{
  const numbers = [1, 2, 1, 3, 2, 1];
  const FrequencyArray = numbers.reduce((acc, current) => {
    acc[current] = (acc[current] || 0) + 1;
    return acc;
  }, {});
  console.log(FrequencyArray);

}
//Count Words in a Sentence
// Ek function likho jo ek sentence ke andar jitne words hain, unki count return kare.
{
  const sentence = "JavaScript is awesome";
  // const words = sentence.split(' ').length;
  // console.log(words);
  const words = sentence.split(' ')
  console.log(words);
  let count = 0
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== " ") {
      count++;
    }
  }
  console.log(count);
}
//Sum of Array Elements.For loop se inka total sum nikaalo.
{
  const numbers = [2, 4, 6, 8];
  let SumArray = 0;
  for (let i = 0; i < numbers.length; i++) {
    SumArray += numbers[i];
  }
  console.log(SumArray);
}
//Print Numbers 1 to 10
{
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
//Print Even Numbers
{
  const nums = [1, 2, 3, 4, 5, 6];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      console.log(nums[i]);
    }
  }
}
//Reverse Array Print
{
  const items = ["a", "b", "c", "d"];
  for (let i = items.length - 1; i >= 0; i--) {
    console.log(items[i]);
  }
}
//Count How Many Times "apple" Appears. Count how many times "apple" appears using for loop.
{
  const fruits = ["apple", "banana", "apple", "orange", "apple"];
  let count = 0
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "apple") {
      count++;
    }
  }
  console.log(count);
}
// Print Indexes with Values
{
  const arr = ["pen", "pencil", "eraser"];
  for (let i = 0; i < arr.length; i++) {
    console.log(`${i}:${arr[i]}`);
  }
}
//Find the Largest Number
{
  const nums = [12, 5, 23, 7];
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i]
    }
  }
  console.log(max);
}
//Remove Duplicates Without Using Set
{
  const nums = [1, 2, 2, 3, 4, 1];
  let UniqueNum = [];
  for (let i = 0; i < nums.length; i++) {
    if (!UniqueNum.includes(nums[i])) {
      UniqueNum.push(nums[i]);
    }
  }
  console.log(UniqueNum);

}
//Word Count in a Sentence
{
  const sentence = "this is a test sentence this is";
  // let words = sentence.trim().split(' ').filter(word=>word !== " ").length
  let words = sentence.trim().split(/\s+/)
  let countWords = {}
  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (countWords[word]) {
      countWords[word] += 1
    } else {
      countWords[word] = 1
    }
  }
  console.log(countWords);

  //Find Common Elements in Two Arrays
  {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [3, 4, 5, 6];
    let commonword = [];
    for (let i = 0; i < arr1.length; i++) {
      //"Agar arr1[i] element arr2 mein bhi ho, aur commonword mein abhi tak na ho, toh usse add karo."
      if (arr2.includes(arr1[i]) && !commonword.includes(arr1[i])) {
        commonword.push(arr1[i]);
      }
    }
    console.log(commonword);
  }
  //Reverse a String
  {
    const word = "Sehar";
    // const Reverse = word.split('')
    // for (let i =Reverse.length-1; i >= 0; i--) {
    //   console.log(Reverse[i]);
    // }
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reversed += word[i]
    }
    console.log(reversed);

  }
  // let count = 0;
  // for (let i = 0; i < word.length; i++) {
  // if(word[i] !== ''){
  // count++;
  // }  
  // }
  // console.log(count);

}
//Convert Array of Words to camelCase Sentence
{
  const words = ["hello", "my", "name", "is", "sehar"];
  let sentence = ""
  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      sentence += words[i];
    } else {
      //sentence mein current word ka pehla letter capital kar ke aur baqi as it is jor do
      sentence += words[i][0].toUpperCase() + words[i].slice(1)
    }
  }
  console.log(sentence);
  // "helloMyNameIsSehar" //output
}
//Flatten a Nested Array (One Level) Without .flat()
{
  // const arr = [1, [2, 3], 4, [5]];
  // const arr1 = []
  // for (let i = 0; i < arr.length; i++) {

  // }
  // console.log(arr1);
  const arr = [1, [2, 3], 4, [5]];
  const arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        arr1.push(arr[i][j]);
      }
    } else {
      arr1.push(arr[i])
    }
  }
  console.log(arr1);
}
//Group Students by Grade
{
  const students = [
    { name: "Ali", grade: "A" },
    { name: "Sara", grade: "B" },
    { name: "Ahmed", grade: "A" },
  ];
  let gradeA = []
  let gradeB = []
  for (let i = 0; i < students.length; i++) {
    if (students[i].grade === "A") {
      gradeA.push(students[i].name)
    } else {
      gradeB.push(students[i].name)
    }
  }
  console.log(gradeA);
  console.log(gradeB);
}
//Sum of Only Positive Numbers
{
  const nums = [-3, 2, 5, -1, 7];
  let sumOfPositive = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      sumOfPositive += nums[i]
    }
  }
  console.log(sumOfPositive);
}
//Reverse the Array Without .reverse()
{
  const arr = [1, 2, 3, 4, 5];
  let arr1 = []
  for (let i = arr.length - 1; i >= 0; i--) {
    arr1.push(arr[i])
  }
  console.log(arr1);

}
// Count Specific Word in a Sentence
{
  const sentence = "apple banana apple grape apple orange apple";
  let words = sentence.split(" ")
  let countApple = 0
  for (let i = 0; i < words.length; i++) {
    if (words[i] === "apple") {
      countApple += 1;
    }
  }
  console.log(countApple);
}
//Create a Multiplication Table
{
  const num = 3;
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
}

//Find Smallest Number in Array
{
  const nums = [12, 5, 9, 3, 20];
  let smallestNums = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallestNums) {
      smallestNums = nums[i];
    }
  }
  console.log(smallestNums);
}
//Remove All Odd Numbers from an Array
{
  const nums = [2, 5, 8, 11, 14, 9];
  let even = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      even.push(nums[i]);
    }
  }
  console.log(even);
}
//Find the First Non-Repeated Character
{
  const str = "aabccde";
  let FirstNonRepeatedCh = ""
  let arr = str.split("")
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
      FirstNonRepeatedCh = arr[i];
      break;
    }
  }
  console.log(FirstNonRepeatedCh);
}
//Create an Array with Squares of Numbers
{
  const nums = [1, 2, 3, 4];
  let squareNumbs = []
  for (let i = 0; i < nums.length; i++) {
    squareNumbs.push(nums[i] * nums[i]);
  }
  console.log(squareNumbs);
}
// Count Vowels in a String
{
  const str = "Hello World!";
  let newArr = str.split("")
  console.log(newArr);
  let countVowels = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === 'a' || newArr[i] === 'e' || newArr[i] === 'i' || newArr[i] === 'o' || newArr[i] === 'u' ||
      newArr[i] === 'A' || newArr[i] === 'E' || newArr[i] === 'I' || newArr[i] === 'O' || newArr[i] === 'U') {
      countVowels += 1
    }
  }
  console.log(countVowels);
}
// Find the Average of Numbers
{
  const nums = [10, 20, 30, 40];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  let averageNums = sum / nums.length
  console.log(averageNums);
}
// Find Duplicate Numbers in an Array
{
  const nums = [4, 5, 2, 3, 4, 6, 7, 2];
  let seen = [];
  let DuplicateNums = []
  for (let i = 0; i < nums.length; i++) {
    if (seen.includes(nums[i]) && !DuplicateNums.includes(nums[i])) {
      DuplicateNums.push(nums[i]);
    } else {
      seen.push(nums[i])
    }
  }
  console.log(DuplicateNums);
  console.log(seen);
}
//Create an Object from Two Arrays
{
  const keys = ['id', 'name', 'age'];
  const values = [1, 'Sehar', 25];
  let obj = {}
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
  }
  console.log(obj);

}
// Generate Fibonacci Sequence.first 10 numbers in Fibonacci sequence
{
  const n = 10;
  let FibonacciNumbs = [0, 1]
  for (let i = 2; i < n; i++) {
    FibonacciNumbs.push(FibonacciNumbs[i - 1] + FibonacciNumbs[i - 2])
  }
  console.log(FibonacciNumbs);
}
//Merge Two Arrays Alternately
{
  const arr1 = [1, 3, 5];
  const arr2 = [2, 4, 6];
  // const arr3 = arr1.concat(arr2)  
  const arr3 = []
  for (let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i]);
    arr3.push(arr2[i])
  }
  console.log(arr3);
}
// Find First Non-Repeating Character in a String
{
  const str = "swiss";
  let charCount = {};
  let nonRepeate = ""
  for (let i = 0; i < str.length; i++) {
    charCount[str[i]] = (charCount[str[i]] || 0) + 1
  }
  console.log(charCount);
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) {
      nonRepeate = str[i];
      break;
    }
  }
  console.log(nonRepeate);
}
//Calculate Factorial of a Number
{
  const num = 5;
  let Factorial = 1
  for (let i = 1; i <= num; i++) {
    Factorial *= i
  }
  console.log(Factorial);
}
//Check if Two Arrays are Equal
{
  const arr1 = [1, 2, 3];
  const arr2 = [1, 2, 3];
  let isEqual = true;
  if (arr1.length !== arr2.length) {
    isEqual = false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        isEqual = false;
        break;
      }
    }
  }
  console.log(isEqual);
}
// Find Missing Number in Sequence
{
  const nums = [1, 2, 4, 5, 6];
  let n = 6
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i]
  }
  const missingNum = expectedSum - actualSum
  console.log(missingNum);
}
//Remove All Falsy Values from an Array
{
  const arr = [0, "hello", false, undefined, 42, "", null];
  let truthy = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      truthy.push(arr[i])
    }
  }
  console.log(truthy);
}
//Rotate Array by n Positions
{
  const arr = [1, 2, 3, 4, 5];
  const n = 2;
  let newArr = arr.slice(-n).concat(arr.slice(0, arr.length - n))
  console.log(newArr);
}
// Find the Most Frequent Item in an Array
{
  const nums = [3, 5, 3, 3, 2, 5, 5];
  let count = {};
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (count[num]) {
      count[num] += 1
    } else {
      count[num] = 1
    }
    if (count[num] > maxCount) {
      maxCount = count[num]
    }
  }
  console.log(maxCount);
}
//Print Pyramid of Stars
{
  const rows = 5;
  for (let i = 1; i < rows; i++) {
    let spaces = " ".repeat(rows - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
  }
}
//Ek for loop likho jo 1 se 10 tak numbers print kare.
{
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
//Print All Even Numbers from 1 to 20
{
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
// Sum of Numbers from 1 to 5
{
  let sum = 0
  for (let i = 1; i <= 5; i++) {
    sum += i;
  }
  console.log(sum);

}
//Print Each Character of a String
{
  const word = "Sehar";
  const arr = word.split("")
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
//Double the Elements in an Array
{
  const nums = [1, 2, 3];
  let newArr = []
  for (let i = 0; i < nums.length; i++) {
    newArr.push(nums[i] * 2)
  }
  console.log(newArr);
}
//Count Number of Vowels
{
  const str = "hello";
  let newArr = str.split("")
  let countVowel = 0
  for (let i = 0; i < newArr.length; i++) {
    if ("aeiou".includes(newArr[i])) {
      countVowel += 1
    } else {
      countVowel = 1
    }
  }
  console.log(countVowel);
}
//Add All Elements of Array
{
  const arr = [2, 4, 6];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
//Convert Array of Strings to Uppercase
{
  const names = ["sehar", "ali", "fatima"];
  let arr = []
  for (let i = 0; i < names.length; i++) {
    arr.push(names[i].toUpperCase())
  }
  console.log(arr);
}
// Count Words in a Sentence
{
  const sentence = "I am learning JavaScript";
  let newArr = sentence.split(" ")
  let countWord = 0
  for (let i = 0; i < newArr.length; i++) {
    countWord += 1
  }
  console.log(countWord);
}
//Find Largest Number in an Array
{
  const nums = [3, 8, 1, 5, 9, 2];
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i]
    }
  }
  console.log(max);
}
//Print Every Third Number
{
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const newArr = []
  for (let i = 2; i < nums.length; i += 3) {
    newArr.push(nums[i]);
  }
  console.log(newArr);
}
//Find Sum of Odd Numbers in Array
{
  const nums = [10, 15, 20, 25, 30];
  const sum = -Infinity;
  for (let i = 0; i > nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      sum = nums[i]
    }
  }
  console.log(sum);
}
//Create a New Array with Even Numbers Only
{
  const nums = [10, 15, 20, 25, 30];
  const newArr = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      newArr.push(nums[i])
    }
  }
  console.log(newArr);
}
//Print Squares of Numbers
{
  const nums = [1, 2, 3, 4];
  const newArray = []
  for (let i = 0; i < nums.length; i++) {
    newArray.push(nums[i] * nums[i]);
  }
  console.log(newArray);
}
//Print All Odd Numbers between 1 and 10
{
  let num = 10;
  let newNum = []
  for (let i = 1; i < num; i++) {
    if (i % 2 === 0) {
      newNum.push(i)
    }
  }
  console.log(newNum);
}
//Convert Temperatures from Celsius to Fahrenheit
{
  const celsiusTemps = [0, 10, 20, 30];
  const Temperatures = []
  for (let i = 0; i < celsiusTemps.length; i++) {
    Temperatures.push((celsiusTemps[i] * 9 / 5) + 32)
  }
  console.log(Temperatures);
}
//Reverse a String
{
  const str = "Hello";
  const newArr = str.split("")
  let newWord = ""
  for (let i = str.length - 1; i >= 0; i--) {
    newWord += str[i]
  }
  console.log(newWord);
}
// Count the Occurrences of a Number
{
  const nums = [1, 3, 3, 3, 2, 5, 3];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 3) {
      count++;
    }
  }
  console.log(count);
}
// Count the Occurrences of a Number
{
  const nums = [1, 3, 3, 3, 2, 5, 3];
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    count[num] = (count[num] || 0) + 1
  }
  console.log(count);
}
{
  const nums = [1, 3, 3, 3, 2, 5, 3];
  let count = {};
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = (count[nums[i]] || 0) + 1
  }
  console.log(count);
}
// Find the Index of First Negative Number
{
  const nums = [2, 3, 5, 7, -9];
  let firstIndex = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      firstIndex = i;
      break;
    }
  }
  console.log(firstIndex);
}
//Multiply All Numbers in an Array
{
  const nums = [1, 2, 3, 4];
  let MultipleNum = 1;
  for (let i = 0; i < nums.length; i++) {
    MultipleNum *= nums[i]
  }
  console.log(MultipleNum);
}
//Find How Many Strings Have Length > 3
{
  const words = ["cat", "apple", "hi", "dog", "banana"];
  let newArr = []
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 3) {
      newArr.push(words[i])
    }
  }
  console.log(newArr);
}
//Create Array of Squares
{
  const nums = [2, 4, 6];
  let squareArr = []
  for (let i = 0; i < nums.length; i++) {
    squareArr.push(nums[i] * nums[i]);
  }
  console.log(squareArr);
}
//Count How Many Times "a" Appears
{
  const str = "javascript is a amazing";
  let newArr = str.split("")
  let countTime = 0
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === 'a') {
      countTime += 1
    }
  }
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] === 'a'){
  //     countTime += 1
  //   }
  // }
  console.log(countTime);
}
//Check if Any Number is Greater than 100
{
  const nums = [10, 55, 99, 130, 50];
  //   let newNum = 0;
  // for (let i = 0; i < nums.length; i++) {
  //   if(nums[i]>100){
  //     newNum =  nums[i]
  //   }
  // }
  let isGreaterThan100 = false
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 100) {
      isGreaterThan100 = true;
      break;
    }
  }
  console.log(isGreaterThan100);
}
// Print Numbers Between Two Limits
{
  let start = 5;
  let end = 10;
  let newArr = [];
  for (let i = start; i < end; i++) {
    newArr.push(i)
  }
  console.log(newArr);
}
// Find the Smallest Number in Array
{
  const nums = [5, 2, 9, 1, 7];
  let minNum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minNum) {
      minNum = nums[i]
    }
  }
  console.log(minNum);
}
// Make New Array of Uppercase First Letters
{
  const names = ["sehar", "ali", "fatima"];
  let newArr = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i]
    // const capitalized = names[i][0].toUpperCase() + names[i].slice(1)
    const capitalized = name[0].toUpperCase() + name.slice(1)
    newArr.push(capitalized)
  }
  console.log(newArr);
}
// Remove Duplicates from Array (basic method)
{
  const nums = [1, 2, 2, 3, 4, 4, 5];
  let newArr = []
  for (let i = 0; i < nums.length; i++) {
    if (!newArr.includes(nums[i])) {
      newArr.push(nums[i])
    }
  }
  console.log(newArr);
}
//Sum of All Numbers in an Array
{
  const nums = [3, 6, 1, 8, 4];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  console.log(sum);
}
//Count Positive, Negative and Zero
{
  const arr = [3, -2, 0, 5, -1, -4, -8, 0, 0];
  positiveCount = 0;
  negativeCount = 0
  zeroCount = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCount += 1
    } else if (arr[i] == 0) {
      zeroCount += 1
    } else {
      negativeCount += 1
    }
  }
  console.log(positiveCount);
  console.log(zeroCount);
  console.log(negativeCount);

}
//Calculate Factorial of a Number
{
  const num = 5;
  let result = 1;
  for (let i = 1; i < num; i++) {
    result *= i
  }
  console.log(result);
}
// Reverse an Array (without using .reverse())
{
  const nums = [1, 2, 3, 4];
  let newArr = []
  for (let i = nums.length - 1; i >= 0; i--) {
    newArr.push(nums[i]);
  }
  console.log(newArr);
}
//Count Vowels in a String
{
  const str = "Hello World";
  let countVowels = 0;
  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i])) {
      countVowels += 1
    }
  }
  console.log(countVowels);
}
// Count Vowels in a String
{
  const str = "Hello World";
  let countVowels = 0;
  const vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      countVowels += 1;
    }
  }
  console.log(countVowels);
}
//Check if Array is Sorted (Ascending)
{
  const nums = [1, 2, 3, 5, 4];
  let isSorted = true;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[i + 1]) {
      isSorted = false;
      break;
    }
  }
  console.log(isSorted);
  console.log(nums);

  if (!isSorted) {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = 0; j < nums.length - 1 - i; j++) {
        if (nums[j] > nums[j + 1]) {
          let temp = nums[j]
          nums[j] = nums[j + 1]
          nums[j + 1] = temp
        }
      }
    }
  } else {
    console.log('array is already sorted');
  }
  console.log(nums);
}
//Print Table of a Number (e.g. 5)
{
  const num = 5;
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`);
  }
}
// Print All Divisors of a Number
{
  const num = 12;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      console.log(i);
    }
  }
}
// Sum of Digits in a Number
{
  const num = 1234;
  let newStr = num.toString();
  let sum = 0;
  for (let i = 0; i < newStr.length; i++) {
    sum += Number(newStr[i])
  }
  console.log(sum);
}
//Find First Duplicate in Array
{
  const nums = [2, 3, 5, 3, 4, 6];
  let seen = [];
  let firstDuplicateNum = -1;
  for (let i = 0; i < nums.length; i++) {
    if (seen.includes(nums[i])) {
      firstDuplicateNum = nums[i];
      break;
    }
    else {
      seen.push(nums[i]);
    }
  }
  console.log(firstDuplicateNum);
}
//Print Numbers from 10 to 1 (reverse)
{
  let num = 10;
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}
//Create Array of String Lengths
{
  const arr = ["apple", "banana", "kiwi"];
  let lengths = [];
  for (let i = 0; i < arr.length; i++) {
    lengths.push(arr[i].length);
  }
  console.log(lengths);
}
//Convert All Numbers to Negative
{
  const nums = [2, -4, 6, -8, 10];
  let newNegativeArr = []
  for (let i = 0; i < nums.length; i++) {
    // if (nums[i] > 0) {
    newNegativeArr.push(-Math.abs(nums[i]))
    // }
  }
  console.log(newNegativeArr);
}
// Convert All Numbers to Negative (using hint)
{
  const nums = [2, -4, 6, -8, 10];
  let newNegativeArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      newNegativeArr.push(nums[i] * -1);
    } else {
      newNegativeArr.push(nums[i]);
    }
  }
  console.log(newNegativeArr);
}
//Count How Many Elements Are Even
{
  const nums = [1, 2, 4, 5, 6];
  let countEven = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      countEven += 1
    }
  }
  console.log(countEven);

}
// Find Index of a Specific Number
{
  const nums = [5, 9, 3, 7, 2];
  const target = 7;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      console.log(i);
    }
  }
}
// Create Array of Odd Numbers Only
{
  const nums = [10, 13, 15, 22, 23];
  let OddNumbs = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      OddNumbs.push(nums[i])
    }
  }
  console.log(OddNumbs);
}
//Join Array Elements as a String
{
  const arr = ["I", "love", "JS"];
  let newStr = ""
  for (let i = 0; i < arr.length; i++) {
    newStr += arr[i] + " "
  }
  console.log(newStr);
}
//Check If All Numbers Are Positive
{
  const nums = [1, 2, -3, 0, 5];
  let setPositive = true;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0) {
      setPositive = false;
      break
    }
  }
  console.log(setPositive);
}
//Count Total Characters in Array of Strings
{
  const arr = ["cat", "dog", "rabbit"];
  let sumAllStr = 0;
  for (let i = 0; i < arr.length; i++) {
    sumAllStr += arr[i].length
  }
  console.log(sumAllStr);
}
//Capitalize All Words
{
  const arr = ["hello", "world"];
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    const Capitalize = arr[i][0].toUpperCase() + arr[i].slice(1)
    newArr.push(Capitalize);
  }
  console.log(newArr);
}
// Find Largest Even Number
{
  const nums = [1, 7, 4, 10, 3];
  let max = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && nums[i] > max) {
      max = nums[i]
    }
  }
  console.log(max);
}
//Remove All Falsy Values
{
  const arr = [0, "hello", false, "", 42, null];
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i])
    }
  }
  console.log(newArr);
}
//Check if a String is a Palindrome
{
  const str = "madam";
  let check = true
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      check = false;
      break;
    }
  }
  console.log(check);
}
//Remove Duplicates Without Using Set
{
  const arr = [1, 2, 2, 3, 4, 4, 5];
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }
  console.log(newArr);
}
//Find Second Largest Number
{
  const nums = [5, 8, 2, 10, 7];
  let maxNum = -1;
  let SecNum = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxNum) {
      SecNum = maxNum  // max pehle sec mein chala jaye
      maxNum = nums[i] // naya max set karo
    } else if (nums[i] > SecNum && nums[i] !== SecNum) {
      SecNum = nums[i]
    }
  }
  console.log(maxNum);
  console.log(SecNum);
}
// Count Frequency of Each Element
{
  const nums = [1, 2, 2, 3, 3, 3];
  let freq = {}
  for (let i = 0; i < nums.length; i++) {
    if (freq[nums[i]]) {
      freq[nums[i]] += 1
    } else {
      freq[nums[i]] = 1
    }
  }
  console.log(freq);
}
// Find Pairs with Sum = Target
{
  const nums = [1, 2, 3, 4, 5];
  const target = 6;
  let newPair = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        newPair.push([nums[i], nums[j]])
      }
    }
  }
  console.log(newPair);
}
//Find All Prime Numbers Up to N
{
  const n = 20;
  let primes = [];
  for (let i = 2; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {       //Agar i kisi bhi chhoti number se divide ho gaya, to woh prime nahi
      if (i % j === 0) {
        isPrime = false; // Agar i kisi bhi number se divide nahi hua, toh prime hai
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  console.log(primes);
}
// Find All Prime Numbers Up to N
{
  const n = 20; // Hum 1 se lekar 20 tak ke prime numbers dhoondhna chah rahe hain
  let primes = []; // Ye array prime numbers ko store karega
  for (let i = 2; i <= n; i++) {
    // Loop 2 se shuru hoga kyunki 1 prime nahi hota
    let isPrime = true; // Assume karte hain ke number prime hai
    for (let j = 2; j <= Math.sqrt(i); j++) {
      // Check karte hain ke i kisi bhi chhoti number se divide hota hai ya nahi
      // √i tak hi check karna kafi hota hai optimization ke liye
      if (i % j === 0) {
        // Agar i kisi bhi number se divide ho gaya to ye prime nahi hai
        isPrime = false;
        break; // Prime nahi mila, loop yahin roko
      }
    }
    if (isPrime) {
      // Agar i kisi bhi number se divide nahi hua, toh ye prime number hai
      primes.push(i); // Usko prime list mein daal do
    }
  }
  console.log(primes); // Saare prime numbers print karo
}
// Group Words by First Letter
{
  const arr = ["apple", "banana", "apricot", "berry", 'baloon'];
  let newObj = {}
  for (let i = 0; i < arr.length; i++) {
    if (!newObj[arr[i][0]]) {
      newObj[arr[i][0]] = [arr[i]]
    } else {
      newObj[arr[i][0]].push(arr[i])
    }
  }
  console.log(newObj);
}
//output: {a:["apple",'apicot']
//b:[ "banana","berry"]
//}

// Find Longest Word in an Array
{
  const words = ["hi", "hello", "javascript", "code"];
  let maxLength = ""
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength.length) {
      maxLength = words[i]
    }
  }
  console.log(maxLength);
}
// Rotate Array by 2 Steps
{
  const arr = [1, 2, 3, 4, 5];
  let newArr = []
  const k = 2;
  for (let i = k; i < arr.length; i++) {
    newArr.push(arr[i])
  }
  for (let i = 0; i < k; i++) {
    newArr.push(arr[i])
  }
  console.log(newArr);
}
// Remove All Numbers > 100
{
  const nums = [99, 200, 45, 120, 77];
  let newArr = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 100) {
      newArr.push(nums[i])
    }
  }
  console.log(newArr);
}
// Flatten a 2D Array
{
  const arr = [[1, 2], [3, 34], [75]];
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      newArr.push(arr[i][j])
    }
  }
  console.log(newArr);
}
//Replace All Even Numbers with 0
{
  const nums = [3, 6, 7, 8, 10];
  let newArr = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      newArr.push(0)
    } else {
      newArr.push(nums[i])
    }
  }
  console.log(newArr);
}
// Find Numbers Greater Than Average
{
  const nums = [10, 20, 30, 40, 50];
  let averageNums = []
  let avg = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  avg = sum / nums.length;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] > avg) {
      averageNums.push(nums[j])
    }
  }
  console.log(avg);
  console.log(averageNums);
}
//Count How Many Times Each Character Appears
{
  const str = "apple";
  let newObj = {}
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // newObj[char] => newObj mein char key ke under jo value hai.
    if (newObj[char]) {
      newObj[char] += 1     // Agar character pehle se hai, to count badhao
    } else {
      newObj[char] = 1     // Agar pehli baar mila to 1 set karo
    }
  }
  console.log(newObj);
}
// Create an Array of Squares
{
  const nums = [2, 4, 6];
  let squareArr = []
  for (let i = 0; i < nums.length; i++) {
    squareArr.push(nums[i] * nums[i]);
  }
  console.log(squareArr);
}
//Find Index of All Occurrences of a Value
{
  const nums = [1, 2, 3, 2, 4, 2];
  const target = 2;
  let newArr = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      newArr.push(i)
    }
  }
  console.log(newArr);
}
//Count Words with More Than 5 Letters
{
  const words = ["hello", "javascript", "is", "awesome"];
  let wordMore5Char = []
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
      wordMore5Char.push(words[i])
    }
  }
  console.log(wordMore5Char);
}
// Print Only Unique Characters in a String
{
  const str = "banana";
  let unique = "";
  let obj = {}
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char]++;
    }
  }
  console.log(obj);
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] === 1) {
      unique += str[i]
    }
  }
  console.log(unique);
}
// Find the Difference Between Max and Min in Array
{
  const nums = [5, 1, 9, 3];
  let max = nums[0]
  let min = nums[0]
  let between = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    } else if (nums[i] < min) {
      min = nums[i];
    }
  }
  between = max - min;
  console.log(between);
  console.log(max);
  console.log(min);
}
//Merge Two Arrays into One
{
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  let newArr = []
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i])
  }
  for (let j = 0; j < arr2.length; j++) {
    newArr.push(arr2[j])
  }
  console.log(newArr);
}
//Find All Triplets That Sum to a Target
{
  const nums = [1, 2, 3, 4, 5];
  const target = 9;
  let newPair = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === target) {
          newPair.push([nums[i], nums[j], nums[k]])
        }
      }
    }
  }
  console.log(newPair);
}
//Count Vowels in a String
{
  const str = "javascript is awesome";
  let countVowels = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
      countVowels += 1
    }
    if ("aeiou".includes(str[i])) {
      countVowels += 1
    }
  }
  console.log(countVowels);
}
//  Reverse a String (Without .reverse)
{
  const str = "hello";
  let newStr = ""
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }
  console.log(newStr);
}
//Count Numbers Divisible by Both 3 and 5
{
  const nums = [15, 30, 22, 45, 60, 73];
  let newArr = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 3 === 0 && nums[i] % 3 === 0) {
      newArr.push(nums[i])
    }
  }
  console.log(newArr);
}
// Convert All Strings to Uppercase (Using Loop)
{
  const arr = ["hi", "there", "friend"];
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toUpperCase())
  }
  console.log(newArr);
}
//Multiply All Numbers in an Array
{
  const arr = [1, 2, 3, 4];
  let MultipleNum = 1
  for (let i = 0; i < arr.length; i++) {
    MultipleNum *= arr[i]
  }
  console.log(MultipleNum);
}
//Find Palindrome Words in Array
{
  const words = ["madam", "apple", "racecar", "hello", "level"];
  let PalindromeArr = []
  for (let i = 0; i < words.length; i++) {
    const reversed = words[i].split("").reverse().join("")
    if (words[i] === reversed) {
      PalindromeArr.push(reversed)
    }
  }
  console.log(PalindromeArr);
}
// Capitalize First Letter of Every Word
{
  const arr = ["hello", "world", "sehar"];
  let resultArr = []
  for (let i = 0; i < arr.length; i++) {
    let firstIndex = arr[i][0].toUpperCase() + arr[i].slice(1, -1) + arr[i].slice(-1).toUpperCase()

    resultArr.push(firstIndex)
  }
  console.log(resultArr);
}
//// Ek function likho jo ek sentence me har word ka pehla aur akhri letter swap kare.
{
  const sentence = "saad is developer"
  let resultArr = []
  let newArr = sentence.split(" ")
  for (let i = 0; i < newArr.length; i++) {
    let firstIndex = newArr[i][0]
    let middle = newArr[i].slice(1, -1)
    let lastIndex = newArr[i].slice(-1)
    let result = lastIndex + middle + firstIndex
    resultArr.push(result)
  }
  console.log(resultArr);
}
//// Ek number ke andar kitne digits even hain, woh count karo.
// {
//   const number = 1234
// for (let i = 0; i <= number; i++) {
// console.log(i);
// }
// }
//ek function likho check kro k sentence ma kon sa word zyada time aya ha.
{

}
// Calculate Factorial of a Number
{
  const num = 5;
  Factorial = 1;
  for (let i = 1; i <= num; i++) {
    Factorial *= i
  }
  console.log(Factorial);
}
// Count Even and Odd Numbers in an Array
{
  const nums = [1, 2, 3, 4, 5, 6, 7];
  let Even = 0;
  let Odd = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      Even++;
    } else {
      Odd++;
    }
  }
  console.log("Even :", Even);
  console.log("Odd :", Odd);
}
//Replace Numbers Divisible by 3 with "Fizz"
{
  const arr = [1, 3, 4, 6, 7, 9];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
      arr[i] = "Fizz";
    }
  }
  console.log(arr);
}
//Add Only Positive Numbers
{
  const nums = [3, -2, 7, -5, 9];
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      sum += nums[i]
    }
  }
  console.log(sum);
}
// Count Characters (Except Spaces)
{
  const sentence = "I love JavaScript";
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if (char !== ' ') {
      count++;
    }
  }
  console.log(count);
}
// Create Array of Lengths
{
  const words = ["apple", "banana", "kiwi"];
  let newArr = [];
  for (let i = 0; i < words.length; i++) {
    newArr.push(words[i].length)
  }
  console.log(newArr);
}
// Find the Largest Number
{
  const nums = [1, 9, 4, 27, 3];
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  console.log(max);
}
//Filter Words Starting with Specific Letter
{
  const words = ["apple", "banana", "avocado", "grape"];
  const letter = "a";
  let newArr = []
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith(letter)) {
      newArr.push(words[i])
    }
  }
  console.log(newArr);
}
//Double the Values in Array
{
  const nums = [2, 4, 6];
  let newArr = []
  for (let i = 0; i < nums.length; i++) {
    newArr.push(nums[i] * 2)
  }
  console.log(newArr);
}
// Count How Many Strings Have More Than 3 Letters
{
  const words = ["hi", "car", "apple", "java"];
  let countStrNum = []
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 3) {
      countStrNum.push(words[i])
    }
  }
  console.log(countStrNum);
}
// Count Digits in a Number
{
  const num = 9387;
  let newStr = num.toString();
  let count = 0;
  for (let i = 0; i < newStr.length; i++) {
    count++;
  }
  console.log(count);
}
// Sum of All Odd Numbers
{
  const nums = [1, 2, 3, 4, 5, 6];
  let SumOdd = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      SumOdd += nums[i]
    }
  }
  console.log(SumOdd);
}
//Find Word with Max Characters
{
  const words = ["hi", "banana", "apple", "grape"];
  let maxLength = words[0]
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength.length) {
      maxLength = words[i]
    }
  }
  console.log(maxLength);
}
//Count How Many Numbers Are Greater Than a Given Value
{
  const nums = [5, 10, 15, 20, 25];
  const threshold = 12;
  let newArr = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > threshold) {
      newArr.push(nums[i])
    }
  }
  console.log(newArr);
}
//Convert Array of Numbers to Strings
{
  const nums = [1, 2, 3];
  let newArr = []
  for (let i = 0; i < nums.length; i++) {
    newArr.push(nums[i].toString())
  }
  console.log(newArr);
}
//Get All Characters from a String in an Array
{
  const word = "loop";
  // let newArr = word.split("")
  // console.log(newArr);
  let newArr = []
  for (let i = 0; i < word.length; i++) {
    newArr.push(word[i])
  }
  console.log(newArr);
}
//Find How Many Words End with a Specific Letter
{
  const words = ["cat", "hat", "map", "tap"];
  const target = "p";
  let newArr = []
  for (let i = 0; i < words.length; i++) {
    if (words[i].endsWith("p")) {
      newArr.push(words[i])
    }
  }
  console.log(newArr);
}
//Find Second Largest Number in an Array
{
  const nums = [10, 40, 20, 30, 50];
  let Largest = 0;
  let secLargest = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > Largest) {
      secLargest = Largest
      Largest = nums[i]
    } else if (Largest < secLargest && nums[i] < Largest) {
      secLargest = Largest
    }
  }
  console.log(Largest);
  console.log(secLargest);
}
// Create an Array with Only First Letters of Each Word
{
  const words = ["apple", "banana", "cherry"];
  let word = []
  for (let i = 0; i < words.length; i++) {
    word.push(words[i][0])
  }
  console.log(word);
}
//Check if All Numbers Are Even
{
  const nums = [2, 4, 6, 8];
  let EvenNum = false
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      EvenNum = true;
      break;
    }
  }
  console.log(EvenNum);
}
//Add Two Arrays Element-Wise
{
  const a = [1, 2, 3];
  const b = [4, 5, 6];
  let SumNewArr = []
  for (let i = 0; i < a.length; i++) {
    SumNewArr.push(a[i] + b[i])
  }
  console.log(SumNewArr);
}
//Filter Words with Length Exactly 4
{
  const words = ["book", "pen", "lamp", "cup"];
  let newArr = []
  for (let i = 0; i < words.length; i++) {
    if (words[i].length === 4) {
      newArr.push(words[i])
    }
  }
  console.log(newArr);
}
// Print Every Alternate Character of a String
{
  const str = "sehar";
  let newStr = ""
  for (let i = 0; i < str.length; i += 2) {
    newStr += str[i]
  }
  console.log(newStr);
}
// Given an integer array nums, a reducer function fn, and an initial value init, return the final result
//  obtained by executing the fn function on each element of the array, 
// sequentially, passing in the return value from the calculation on the preceding element.
// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]),
//  val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
// If the length of the array is 0, the function should return init.
{
  var Customreduce = function (nums, fn, init) {
    let val = init;
    for (let i = 0; i < nums.length; i++) {
      val = fn(val, nums[i]);
    }
    return val;
  };

  let arr = [1, 2, 3, 4];
  console.log(Customreduce(arr, function (acc, curr) { return acc + curr }, 100));
}
//
// {
//   function sayHi() {
//     console.log(name);
//     console.log(age);
//     var name = 'Lydia';
//     let age = 21;
//   }
//   sayHi();
// }

// {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   }

//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
//   } //its good
// }
//
{
  const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
  };

  console.log(shape.diameter());
  console.log(shape.perimeter());
}
// Create a Fibonacci Sequence
{
  const n = 6;
  let FibonacciNumb = [0, 1]
  for (let i = 2; i < n; i++) {
    FibonacciNumb.push(FibonacciNumb[i - 1] + FibonacciNumb[i - 2])
  }
  console.log(FibonacciNumb);
}
// Count Occurrences of Each Character in a String
{
  const str = "aabcc";
  let newObj = {}
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (newObj[char]) {
      newObj[char] += 1
    } else {
      newObj[char] = 1
    }
  }
  console.log(newObj);
}
//
{
  function myName() {
    return console.log('asad ali');
  };

  console.log(myName());
}
//Find All Palindromes in an Array
{
  const words = ["level", "madam", "world", "noon"];
  let newArr = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i] === words[i].split("").reverse().join("")) {
      newArr.push(words[i])
    }
  }
  console.log(newArr);
}
//Sum of Digits of a Number
{
  const num = 1234;
  let newNum = num.toString().split("")
  let sum = 0;
  for (let i = 0; i < newNum.length; i++) {
    sum += Number(newNum[i])
  }
  console.log(sum);
}
//Print All Prime Numbers Between Two Numbers
{
  const start = 10, end = 30;
  let prime = []
  for (let i = start; i < end; i++) {
    let isprime = true;
    if (i < 2) {
      isprime = false;
    } else {
      for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
          isprime = false;
          break;
        }
      }
    }
    if (isprime) {
      prime.push(i)
    }
  }
  console.log(prime);
}
// Flatten a Nested Array
{
  const arr = [1, [2, 3], [4, 5], 6];
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        newArr.push(arr[i][j]);
      }
    } else {
      newArr.push(arr[i])
    }
  }
  console.log(newArr);
}
//Find the Longest Word in a Sentence
{
  const sentence = "I love programming with JavaScript";
  let newSentence = sentence.split(" ")
  let longest = "";
  for (let i = 0; i < newSentence.length; i++) {
    if (newSentence[i].length > longest.length) {
      longest = newSentence[i]
    }
  }
  console.log(longest);
}
//Find the Missing Number in a Sequence
{
  const nums = [1, 2, 3, 5];
  let n = 5;
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
  }
  const MissingNum = expectedSum - actualSum
  console.log(MissingNum);

}
//Reverse a String Without Using Built-in Methods
{
  const str = "hello";
  let newStr = ""
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }
  console.log(newStr);
}
//Generate an Array of Multiples of a Number
{
  const num = 3, length = 5;
  let newArr = []
  for (let i = 1; i <= length; i++) {
    newArr.push(i * num)
  }
  console.log(newArr);
}
// Count How Many Times Each Word Appears
{
  const sentence = "code with sehar code code logic with";
  let newSentence = sentence.split(" ");
  let newObj = {}
  console.log(newSentence);
  for (let i = 0; i < newSentence.length; i++) {
    let char = newSentence[i]
    if (newObj[char]) {
      newObj[char] += 1
    } else {
      newObj[char] = 1
    }
  }
  console.log(newObj);
}
// Remove Duplicates from an Array (Without Set)
{
  const arr = [1, 2, 3, 2, 4, 1];
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i])
    }
  }
  console.log(newArr);
}
//Find the Second Largest Number
{
  const nums = [3, 7, 1, 9, 5];
  let max = 0
  let secMax = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      secMax = max
      max = nums[i]
    } else if (max < secMax && nums[i] < max) {
      secMax = max
    }
  }
  console.log(max);
  console.log(secMax);
}
//Find Pairs with a Specific Sum
{
  const nums = [1, 2, 3, 4, 5];
  let newArr = []
  const target = 6;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        newArr.push([nums[i], nums[j]])
      }
    }
  }
  console.log(newArr);
}
//Find the Most Frequent Element
// Find the Most Frequent Element
{
  const arr = [3, 1, 3, 2, 3, 2, 1];
  const freqMap = {};
  let maxCount = 0;
  let mostFrequent;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    freqMap[num] = (freqMap[num] || 0) + 1
    if (freqMap[num] > maxCount) {
      maxCount = freqMap[num]
      mostFrequent = num
    }
  }
  console.log(mostFrequent);
}
//Replace Each Value with Its Square
{
  const arr = [2, 4, 6];
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * arr[i]);
  }
  console.log(newArr);

}
// Count How Many Vowels Are in a String
{
  const str = "programming is a fun";
let countVowel = 0
for (let i = 0; i < str.length; i++) {
  if("aeiou".includes(str[i])){
    countVowel += 1
  }
}
console.log(countVowel);
}
//Find All Indexes of a Given Element
{
  const arr = [1, 2, 3, 2, 4, 2];
  const target = 2;
  let  numOfIndex = []
for (let i = 0; i < arr.length; i++) {
  if(arr[i] === 2){
    numOfIndex.push(i)
  }
} 
console.log(numOfIndex);
}
// Create a Triangle Pattern Using *
{
  const rows = 4;
  let str = ""
for (let i = 0; i <= rows; i++) {
 str += '*'.repeat(i) + '\n'
}
console.log(str);
}
//Calculate the Factorial of a Number
{
  const n = 5;
let factorial = 1
for (let i = 1; i <= n; i++) {
  factorial *= i
}
console.log(factorial);
}
//
{
  
}