// For this to work, the array must be in sorted order
//Pseudocode
//Get the starting point,usually the zeroth index
//Take the square root of the arr length;
//Loop through the arrary
//if loop variable equals target, return that variable(i's value at that instant);
//check if target is greater or less than loop values,break or increment start by the jump value(sqrt of arr length);
//Perform a linear search on the block in which the value of the element  at the index of the  loop variable is greater than target,starting from the start value.

const jumpSearch = (arr, target) => {
  let start = 0;
  let jumpCount = 0;
  let jump = parseInt(Math.sqrt(arr.length));
  for (let i = 0; i < arr.length; i += jump) {
    if (arr[i] === target) return i;
    if (arr[i] < target) {
      jumpCount++;
      console.log("Jump Count" + jumpCount);
      start = i;
    }
    if (arr[i] > target) {
      break;
    }
  }
  for (let i = start; i < arr.length; i++) {
    console.log(start);
    if (arr[i] === target) {
      return i;
    } else {
      return -1;
    }
  }
};

console.log(jumpSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 15));
