//Trivial Solution

const swap = (arr, left, right) => {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
};

const burbleSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

const optimizedBubbleSort = (arr) => {
  let hasSwapped = false;
  let outerLoopIterationCount = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        hasSwapped = true;
      }
    }
    if (!hasSwapped) {
      return outerLoopIterationCount;
    } else {
      hasSwapped = false;
    }
    outerLoopIterationCount++;
  }
  return outerLoopIterationCount;
};

console.log(optimizedBubbleSort([2, 5, 7, 8, 9, 0]));
console.log(optimizedBubbleSort([1, 0, 7, 8, 9, 10]));
console.log(optimizedBubbleSort([0, 1, 7, 8, 9, 10]));
