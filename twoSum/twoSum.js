// create an object to store array values and indices
// store the current element in the object
// create a variable called difference
// check if diff.is in object
// if no,continue iteration
// if yes return the value of diff and the current index.

// OR
// Create an object
// check if the array value is in object
//if no, store obj[arr[i]]=i;
// if yes return,the value of the element in the obj and the current index

const twoSum = (arr, target) => {
  let map = {};
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    if (map[arr[i]] !== undefined) {
      return [map[arr[i]], i];
    }
    map[target - arr[i]] = i;
  }
};

const trivialTwoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) return [i, j];
    }
  }
};

//Solution of storing array elements and comparing with complement
const anotherTwoSum = (arr, target) => {
  let hasMap = {};
  for (let i = 0; i < arr.length; i++) {
    hasMap[arr[i]] = i;
    let complement = target - arr[i];
    if (hasMap[complement] !== undefined) {
      return [hasMap[complement], i];
    }
  }
};

console.log(anotherTwoSum([4, 8, 12, 16, 20], 36));

function twoSum(arr, target) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i;
    let complement = target - arr[i];
    if (map[complement] !== undefined) {
      return [map[complement], i];
    }
  }
}
