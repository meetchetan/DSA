// divide&ConquererTechnique
// find the index of given no in a sorted array 7
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] => index 6  -> output
//

// // Method 1 - basic approch
// let findIndex = (array) => {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == 7) {
//             return i;
//         }
//     }
//     return "element 7 is not persent in given array";
// };

// const res = findIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
// console.log(res);

// Method 2 - Divide & Conquerer Technique

const searchAlgo = (array, num) => {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let minIndex = Math.floor((min + max) / 2);
    if (array[minIndex] < num) {
      min = minIndex + 1;
    } else if (array[minIndex] > num) {
      max = minIndex - 1;
    } else {
      return minIndex;
    }
  }
  return -1;
};

const res = searchAlgo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7);
console.log(res);


// time complexity binary o(n)