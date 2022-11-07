// Trivial solutionlllllllllllllllll;;;;;;;;;;;;;
function binarySearch(arr, element) {
  const sortedArr = arr.sort((a, b) => a - b);
  let start = 0;
  let lastIndex = sortedArr.length - 1;
  console.log(sortedArr);
  while (start <= lastIndex) {
    let middle = Math.floor((start + lastIndex) / 2);
    if (sortedArr[middle] === element) {
      return middle;
    } else if (sortedArr[middle] > element) {
      lastIndex = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
}
// console.log(binarySearch([3, 5, 6, 7, 89, 1, 0], 89));

function recursiveBinarySearch(arr, value) {
  if (!arr.length) {
    return -1;
  }

  let midIndex = Math.floor(arr.length - 1 / 2);

  if (value === arr[midIndex]) return midIndex;

  if (value > arr[midIndex]) {
    return recursiveBinarySearch(arr.slice(midIndex + 1), value);
  }
  if (value < arr[midIndex]) {
    return recursiveBinarySearch(arr.slice(0, midIndex), value);
  }
}

//optimize the function without javascript slice function

function binaryRecursion(arr, val, start = 0, stop = arr.length - 1) {
  let midPoint = (start + stop) / 2;
  if (start > stop) {
    return false;
  }
  if (val === arr[midPoint]) {
    return midPoint;
  } else {
    if (val > arr[midPoint]) {
      return binaryRecursion(arr, val, midPoint + 1, stop);
    } else {
      return binaryRecursion(arr, val, start, midPoint - 1);
    }
  }
}
console.log(binaryRecursion([1, 2, 3, 4, 5, 6, 7, 8], 6));
