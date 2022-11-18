// Trivial solution

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

// // console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8], 7));
// // //optimize the function without javascript slice function

// // function binaryRecursion(arr, val, start = 0, stop = arr.length - 1) {
// //   let midPoint = (start + end) / 2;
// //   if (start > stop) return false;
// //   if (value === arr[midPoint]) {
// //     return midPoint;
// //   } else {
// //     if (value > arr[midPoint]) {
// //       return binaryRecursion(arr, val, midPoint + 1, stop);
// //     } else {
// //       return binaryRecursion(arr, val,start, stop);
// //     }
// //   }
// // }

// const search = (arr, target, leftIndex, rightIndex) => {
//   if (leftIndex > rightIndex) {
//     return -1;
//   }
//   let middle = Math.floor((leftIndex + rightIndex) / 2);
//   if (target > arr[middle]) {
//     return search(arr, target, leftIndex, middle - 1);
//   } else {
//     return search(arr, target, middle + 1, rightIndex);
//   }
// };

// const recursiveBinary = (arr, target) => {
//   return search(arr, target, 0, arr.length - 1);
// };

// console.log(recursiveBinary([2, 4, 6, 8, 10, 12, 14], 8));

function recursiveBinarySearch(n, arr) {
  if (arr.length === 1 && arr[0] != n) {
    return false;
  }
  let mid = Math.floor(arr.length / 2);
  if (n === arr[mid]) {
    return mid;
  } else if (n < arr[mid]) {
    return recursiveBinarySearch(n, arr.slice(0, mid));
  } else if (n > arr[mid]) {
    return recursiveBinarySearch(n, arr.slice(mid));
  }
}

console.log(recursiveBinarySearch(8, [2, 5, 7, 8, 9, 10, 5]));
