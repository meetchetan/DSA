// String Anagram Problem
// "hello" => "hlleo"

// condition
// length check (for both strings)
//  String 'hello'
//  {h:1, e:1, l:2, o:1}

let isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false + ", length is both strings are not equal";
  }
  let counter = {};
  for (let letter of str1) {
    counter[letter] = (counter[letter] || 0) + 1;
    console.log(counter[letter]);
  }
  for (let items of str2) {
    if (!counter[items]) {
      return false + ", strings are not Anagram";
    }
    counter[items] = counter[items] - 1;
  }
  console.log(counter);
  return true + ", strings are Anagram";
};

let res = isAnagram("hello", "hlleo");
console.log(res);

// o(n) linear time complexity