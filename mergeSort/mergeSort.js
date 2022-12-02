//This algorithm combines two major ideas for its implementation
//A helper merge function and sorting

function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.push(right.shift()));
    }
  }
  return [...sortedArr, ...left, ...right];
}

console.log([4, 5, 6, 7], [3, 0, 10, 12]);
