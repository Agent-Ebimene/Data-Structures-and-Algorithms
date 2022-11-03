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

function recursiveBinarySearch(key, arr) {
  const sortedArr = arr.sort((a, b) => a - b);

  let mid = Math.floor(sortedArr.length / 2);
  if (sortedArr.length === 1 && sortedArr[0] !== key) {
    return -1;
  }
  if (sortedArr[mid] === key) {
    return mid;
  } else if (key < sortedArr[mid]) {
    return recursiveBinarySearch(key, sortedArr.slice(0, mid));
  } else if (key > sortedArr[mid]) {
    return recursiveBinarySearch(key, sortedArr.slice(mid));
  }
}

console.log(recursiveBinarySearch(3, [3, 5, 6, 7, 89, 1, 0]));
