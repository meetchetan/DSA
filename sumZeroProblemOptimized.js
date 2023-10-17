// Checking sum zero
//  [-5, -4, -3, -2, 0, 2, 4, 6, 8] => input
//  [?, ?] => Output [-4, 4]

let sumZeroProblemOptimized = (array) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[left] + array[right] > 0) {
      right--;
      console.log("right called");
    } else if (array[left] + array[right] < 0) {
      left++;
      console.log("left called");
    } else if (array[left] + array[right] === 0) {
      console.log("sum zero called");
      return [array[left], array[right]];
    }
  }
};

let res = sumZeroProblemOptimized([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(res);

// o(n) linear time complexity