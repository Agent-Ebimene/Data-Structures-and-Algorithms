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
console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));

function binaryRecursion(arr, val) {
  if (arr.length === 0) return -1;
  let middle = Math.floor(arr.length - 1 / 2);
  if (arr[middle] === val) return middle;
  if (val > arr[middle]) {
    return binaryRecursion(arr.slice(middle + 1), val);
  }
  if (val < arr[middle]) {
    return binaryRecursion(arr.slice(0, middle), val);
  }
}
