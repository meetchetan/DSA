// String Anagram Problem
// "hello" => "hlleo"

// condition
// length check (for both strings)
//  String 'hello'
//  {h:1, e:1, l:2, o:1}

let isAnagram = (str1, str2) => {
  if (str1.length != str2.length) {
    return false;
  }

  let counter = {};
  for (let letter of str1) {
    counter[letter] = (counter[letter] || 0) + 1;
  }
  for (let item of str2) {
    if (!counter[item]) {
      return false;
    }
    counter[item] = counter[item] - 1;
  }
  return true;
};

let res = isAnagram("hello", "llheo");
console.log(res);
