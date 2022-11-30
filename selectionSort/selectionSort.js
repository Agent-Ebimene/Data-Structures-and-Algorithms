// Pseudocode
// Accept an array
// create an outer loop to arr.length -1
// create a variable to store the assumed index of the lowest number (the first element);
// create a second loop to compare elements with the variable created above starting from the next element;
// if the element is smaller than the variable, change index to the index of that element
// swap the position of the element found with the variable's(index of the assumed smallest element);
// Repeat;

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let smallestNo = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestNo]) {
        smallestNo = j;
      }
    }
    [arr[i], arr[smallestNo]] = [arr[smallestNo], arr[i]];
  }
  return arr;
}

function anotherSelection(inputArr) {
  const len = inputArr.length;
  for (let i = 0; i < len; i++) {
    let assumedMin = i;
    for (let j = i + 1; j < len; j++) {
      if (inputArr[assumedMin] > inputArr[j]) {
        assumedMin = j;
      }
    }
    if (assumedMin !== i) {
      let temp = inputArr[i];
      inputArr[i] = inputArr[assumedMin];
      inputArr[assumedMin] = temp;
    }
  }
  return inputArr;
}

console.log(anotherSelection([9, 2, 4, 6, 0]));
