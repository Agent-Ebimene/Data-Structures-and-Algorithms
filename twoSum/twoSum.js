//Every input has one solution means the array cannot be empty.
//funtion receives an array of integers and a target
//

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
console.log(twoSum([2, 7, 11, 15], 17));
