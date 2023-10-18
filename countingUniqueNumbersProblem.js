// Count Unique Numbers
//
// [1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]
// O/P -> 8

let countUniqueNumber = (array) => {
  //     // Method 1
  //   let counter = {};
  //   for (let num of array) {
  //     counter[num] = (counter[num] || 0) + 1;
  //   }
  //   let keys = [];
  //   for (let key in counter) {
  //     keys.push(key);
  //   }
  //   return keys.length;

  //   //   Method 2
  //   let counter = {};
  //   for (let items of array) {
  //     counter[items] = (counter[items] || 0) + 1;
  //   }
  //   return Object.keys(counter).length;

  // Method 3
  if (array.length > 0) {
    let i = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] != array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  }else{
    return "Error: Array is empty"
  }
};

let res = countUniqueNumber([1, 1, 2, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8]);
console.log(res);
