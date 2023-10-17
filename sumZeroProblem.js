// Checking sum zero
//  [-5, -4, -3, -2, 0, 2, 4, 6, 8] => input
//  [?, ?] => Output [-4, 4]

let sumPairZero = (array) => {
  //   for (let i = 0; i < array.length; i++) {
  for (let i of array) {
    for (let j = 1; j < array.length; j++) {
      if (i - array[j] == 0) {
        return [i, array[j]];
      }
      break;
    }
  }
};

let res = sumPairZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(res);


// time complexity will be o(n^2), as there is a loop insite a loop