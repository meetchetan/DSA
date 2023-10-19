// [1, 2, 3, 4, 3, 5, 4, 6, 7, 8] => Total elements - 10
//  count largent sum of consecutive digits
// num = 4
//  O/P 25

// Conditions
//  num > array => error message
// 10-4+1 => formula

let largestSum = (array, num) => {
  if (num > array.length) {
    return "number can not be greater then an array";
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

let res = largestSum([1, 2, 3, 114, 3, 5, 4, 6, 7, 1008], 4);
console.log(res);
