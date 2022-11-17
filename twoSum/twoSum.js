//Every input has one solution means the array cannot be empty and we don't need to write conditions for where there is no solution
//funtion receives an array of integers and a target
//Create an object to store the difference between target and array elements whose values will be their indices.
//check weather the element's complement is already in the object
//If not, continue
//if it is return an array of the value of the element and the index where that occurs.

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

// solution of storing array elements and comparing with complement
const anotherTwoSum = (arr, target) => {
  let hasMap = {};
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (hasMap[complement] !== undefined) {
      return [hasMap[complement], i];
    }
    hasMap[arr[i]] = i;
  }
};
console.log(anotherTwoSum([1, 2, 3, 4, 5, 6], 11));
