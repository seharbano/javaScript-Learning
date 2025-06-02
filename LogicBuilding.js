//Reverse a string without using extra space.
{
  const str = "hello"
  let newStr = str.split("")
  let reverseStr = ""
  console.log(newStr);
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i]
  }
  console.log(reverseStr);
}
//Check if a string is a palindrome. 'madam.level'
// {
//   const str = 'madam';
//   let newStr = ''
//   let palindrome = false;
//   newStr = str.split("").reverse().join("")
//   if (str == newStr) {
//     palindrome = true;
//   }
//   console.log(palindrome);
// }
{
  const str = 'madam';
  let newStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i]
  }
  if (str === newStr) {
    console.log(true);
  } else {
    console.log(false);
  }
}
//Find the first non-repeating character in a string.
{
  const str = "aabccde"
  let firstNonRepeatingCh = ''
  for (let i = 0; i < str.length; i++) {
    firstNonRepeatingCh = (str[i] || 0)
  }
  console.log(firstNonRepeatingCh);
}

{
  const str = "aabccde";
  const countMap = {};

  // Step 1: Count characters
  for (let char of str) {
    countMap[char] = (countMap[char] || 0) + 1;
  }

  // Step 2: Find first non-repeating character
  let firstNonRepeatingCh = '';
  for (let char of str) {
    if (countMap[char] === 1) {
      firstNonRepeatingCh = char;
      break;
    }
  }

  console.log(firstNonRepeatingCh); // Output: b
}
//
{
  const str = "aabbcde";
  let firstNonRepeatingCh = '';

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      firstNonRepeatingCh = char;
      break;
    }
  }
  console.log(firstNonRepeatingCh);
}
//Count the frequency of each character in a string
{
  const str = 'programming';
  let newObj = {}
  for (let i = 0; i < str.length; i++) {
    let cha = str[i]
    newObj[cha] = (newObj[cha] || 0) + 1
  }
  console.log(newObj);
}
//Check if two strings are anagrams.
{
  const str1 = "salar"
  const str2 = "aalrs"
  let newObj = {}
  for (let i = 0; i < str1.length; i++) {
    let cha = str1[i]
    newObj[cha] = (newObj[cha] || 0) + 1
  }
  for (let i = 0; i < str2.length; i++) {
    let cha = str2[i]
    if (!newObj[cha]) {
      console.log(false);
      return
    }
    newObj[cha]--;
  }
  console.log(true);
}
//Implement a basic string compression algorithm.
{
  let str = "aaabbbccdd"
  let newStr = ""
  let count = 1
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      newStr += str[i] + count
      count = 1
    }
  }
  console.log(newStr);
}
//Find the longest common prefix among a set of strings.
{
  function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""; // Agar koi string nahi hai, toh empty string return karo.

    let prefix = strs[0]; // Pehli string ko as prefix assume karo.

    // Ab hum baaki strings se compare karenge.
    for (let i = 1; i < strs.length; i++) {
      let j = 0; // String ko compare karne ka pointer.

      // Prefix aur current string ko compare karte hain.
      while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
        j++; // Agar characters match karte hain, toh pointer ko aage badhate hain.
      }

      // Ab hum prefix ko shorten karte hain based on matching characters.
      prefix = prefix.slice(0, j);

      // Agar prefix empty ho gaya, toh return karo.
      if (prefix === "") return "";
    }

    return prefix; // Last mein, longest common prefix return karo.
  }

}

// {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000);
//   }
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000);
//   }
// }
{
  function once(fn) {
    let called = false;
    let result;

    return function (...args) {
      if (!called) {
        console.log("Calling fn for the first time...");
        called = true;
        result = fn(...args);
        console.log("Result from fn:", result);
        return result;
      } else {
        console.log("fn was already called. Returning undefined.");
        return undefined;
      }
    };
  }
  function Sname() {
    return "hello World";
  }
  const newName = once(Sname)
  console.log(newName());
  console.log(newName());
}
//Replace all spaces in a string with $20.
{
  let str = "js is a programming language"
  let newStr = ""
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      newStr += '$20'
    } else {
      newStr += str[i]
    }
  }
  console.log(newStr);

}
//Find the longest palindromic substring.
{
  function expand(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    return str.slice(left + 1, right);
  }
  let str = "lelsmadam";
  let longest = "";

  for (let i = 0; i < str.length; i++) {
    let odd = expand(str, i, i);       // like "aba"
    let even = expand(str, i, i + 1);  // like "abba"

    if (odd.length > longest.length) longest = odd;
    if (even.length > longest.length) longest = even;
  }

  console.log(longest);

}
{
  function expand(str, left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    return str.slice(left + 1, right);
  }
  let str = "rar"
  let shortest = null;

  for (let i = 0; i < str.length; i++) {
    let odd = expand(str, i, i);
    let even = expand(str, i, i + 1);

    [odd, even].forEach(pal => {
      if (pal.length > 1) {
        if (shortest === null || pal.length < shortest.length) {
          shortest = pal
        }
      }
    });
  }

  console.log(shortest);

}

//Print all permutations of a string.
{
  function permute(current, remaining) {
    if (remaining.length === 0) {
      console.log(current);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      let char = remaining[i];
      let newRemaining = remaining.slice(0, i) + remaining.slice(i + 1);
      permute(current + char, newRemaining);
    }
  }
  let str = "ab";
  permute("", str);
}

// Recursive Logic

// Recursion Problems

// Compute the factorial of a number.
{
  let n = 5
  let fac = 1
  for (let i = 1; i <= n; i++) {
    fac = fac * i
  }
  console.log(fac);
}
// Generate the Fibonacci sequence up to n.//----- Jo do number hain, unka sum karo, naya number banao, aur numbers ko aage badhao.
{
  let n = 13
  let num1 = 0
  console.log(num1);
  let num2 = 1
  console.log(num2);

  for (let i = 2; i <= n; i++) {
    let nextNum = num1 + num2
    console.log(nextNum);
    num1 = num2
    num2 = nextNum
  }
}
// Solve the Tower of Hanoi forn disks.
{
  function towerOfHanoi(n, source, helper, destination) {
    if (n === 1) {
      console.log(`Move disk 1 from ${source} to ${destination}`);
      return;
    }

    // Step 1: Move n-1 disks from source to helper
    towerOfHanoi(n - 1, source, destination, helper);

    // Step 2: Move nth disk from source to destination
    console.log(`Move disk ${n} from ${source} to ${destination}`);

    // Step 3: Move n-1 disks from helper to destination
    towerOfHanoi(n - 1, helper, source, destination);
  }

  // Call the function like this:
  towerOfHanoi(3, 'A', 'B', 'C');

}
// Print all subsets of a given
{
  function Subset(arr, index = 0, current = []) {
    if (index === arr.length) {
      console.log(current);
      return
    }
    Subset(arr, index + 1, [...current, arr[index]])
    Subset(arr, index + 1, current)
  }
  Subset([1, 2, 3]);
}
// Find the nth term of a geometric pregression using recursion.
{
  function geometricProgression(a, r, n) {
    if (n === 1) {
      return a;
    }
    return r * geometricProgression(a, r, n - 1)
  }
  console.log(geometricProgression(2, 3, 1));
}
// Solve the N-Queens problem for a chessboard of size nxn.
{
  function solveNQueens(n) {
    const result = [];
  
    function isSafe(position, row, col) {
      for (let prevRow = 0; prevRow < row; prevRow++) {
        const prevCol = position[prevRow];
  
        // Check same column
        if (prevCol === col) return false;
  
        // Check diagonals
        if (Math.abs(prevCol - col) === Math.abs(prevRow - row)) return false;
      }
      return true;
    }
  
    function placeQueens(row = 0, position = []) {
      if (row === n) {
        // Convert position array to board
        const board = position.map(col => {
          return '.'.repeat(col) + 'Q' + '.'.repeat(n - col - 1);
        });
        result.push(board);
        return;
      }
  
      for (let col = 0; col < n; col++) {
        if (isSafe(position, row, col)) {
          position[row] = col;
          placeQueens(row + 1, position);
        }
      }
    }
    placeQueens();
    return result;
  }
  console.log(solveNQueens(4));
}
// Generate all valid combinations of n pairs of parentheses.

// Perform binary search recursively.


// tips
{
  let obj = {};
  let asad = 'age';
  obj[asad] = 15;
  console.log(obj);

  //=====================

  let obj2 = {};
  obj2['a'] = 3;
  obj2['b'] = 5;
  obj2['a'] = 5;
  console.log(obj2);
}
{
  let arr1 = [1,2,3]
  console.log(arr1);
  let str1 = "1,2,3"
  console.log(str1);
  console.log(arr1 == str1);
  
}