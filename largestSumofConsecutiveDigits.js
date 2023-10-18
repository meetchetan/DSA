// [1, 2, 3, 4, 3, 5, 4, 6, 7, 8] => Total elements - 10
//  count largent sum of consecutive digits
// num = 4
//  O/P 25

// Conditions
//  num > array => error message
// 10-4+1 => formula

let findLargest = (array, num) => {
  if (num > array.length) {
    return "number cannot be greater then the length of an array";
  }
  let sum = 0;
  for (let i = 0; i < array.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp = temp + array[i + j];
    }
    if (temp > sum) {
      sum = temp;
    }
  }
  return sum;
};

let res = findLargest([9, 9, 9, 9, 3, 5, 6, 6, 17, 8], 4);
console.log(res);


// time complexity is 0(n^2) - Quadratic