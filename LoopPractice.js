// Find All Numbers That Are Repeated More Than Once
{
  const arr = [1, 2, 3, 2, 4, 5, 1, 6, 2];
  let frequency = {};
  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    let countNum = arr[i]
    frequency[countNum] = (frequency[countNum] || 0) + 1
  }
  console.log(frequency);
  for (const key in frequency) {
    if (frequency[key] > 1) {
      duplicates.push(Number(key));
    }
  }
  console.log(duplicates);

}
// Merge Two Arrays Without Duplicates
{
  const a = [1, 2, 3];
  const b = [3, 4, 5];
  const result = [...a];
  for (let i = 0; i < b.length; i++) {
    if (!result.includes(b[i])) {
      result.push(b[i])
    }

  }
  console.log(result);

}
// Shift All Zeros to the End of an Array
{
  const arr = [0, 1, 0, 3, 12];
  let newArr = []
  let newArr2 = []
  let newArr3 = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      newArr.push(arr[i])
    } else {
      newArr2.push(arr[i])
    }
  }
  newArr3 = [...newArr, ...newArr2];
  console.log(newArr3);
}
{
  const arr = [0, 1, 0, 3, 12];
  const nonZeros = arr.filter(n => n !== 0);
  const zeros = arr.filter(n => n === 0);
  const result = [...nonZeros, ...zeros];
  console.log(result);
}
// Count How Many Times Each Digit Occurs in a Number
{
  const num = 1122334455666;
  let newObj = {}
  let count = 0
  let newNum = String(num).split("")
  for (let i = 0; i < newNum.length; i++) {
    newObj[newNum[i]] = (newObj[newNum[i]] || 0) + 1
  }
  console.log(newObj);

}
//Find the Longest Substring Without Repeating Characters
{
  const str = "abcabcbb";
  let longest = "";
  let current = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let index = current.indexOf(char);

    if (index !== -1) {
      // If char is repeated, cut string from next to the first occurrence
      current = current.slice(index + 1);
    }

    current += char;

    if (current.length > longest.length) {
      longest = current;
    }
  }

  console.log(longest);
}
// Find All Even Numbers from 1 to 100 That Are Divisible by 4
{
  let n = 100
  for (let i = 1; i < n; i++) {
    if (i % 4 === 0 && i % 2 === 0) {
      console.log(i);
    }
  }
}
// Count Capital and Small Letters in a String
{
  const str = "CodeWiThSeHaR";
  let upperCaseCount = 0
  let lowerCaseCount = 0
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (char >= 'A' && char <= 'Z') {
      upperCaseCount++
    } else if (char >= 'a' && char <= 'z') {
      lowerCaseCount++
    }
  }
  console.log("upper:", upperCaseCount);
  console.log("lower:", lowerCaseCount);
}
//Print Numbers That Are Power of 2 (Till 1000)
{
  let n = 1000
  for (let i = 0, num = 1; num <= n; i++) {
    console.log(num);
    num = 2 ** (i + 1)
  }
}
// Create a Checkerboard Pattern (8x8 Grid of # and Space)
{
  // Alternate # and space
  for (let row = 0; row < 8; row++) {
    let line = "";
    for (let col = 0; col < 8; col++) {
      // If the sum of row and column is even, print "#", else " "
      if ((row + col) % 2 === 0) {
        line += "#";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}
// Find the Intersection of Two Arrays
{
  const a = [1, 2, 3, 4];
  const b = [3, 4, 5, 6];

}
//Print Reverse of an Array
{
  const nums = [1, 2, 3, 4];
  let newArr = []
  for (let i = nums.length - 1; i >= 0; i--) {
    newArr.push(nums[i])
  }
  console.log(newArr);
}
//Count How Many Times ‘a’ Appears
{
  const word = "banana";
  let count = 0
  for (let i = 0; i < word.length; i++) {
    if (word[i] === 'a') {
      count++;
    }
  }
  console.log(count);
}
//Count Numbers Divisible by Both 2 and 3 (1 to 30)
{
  let n = 30
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 && i % 3 === 0) {
      console.log('c', i);
    }
  }
}
// Calculate Product of All Numbers in an Array
{
  const arr = [1, 2, 3, 4];
  
}