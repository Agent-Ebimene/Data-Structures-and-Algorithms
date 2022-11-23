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

console.log(selectionSort([9, 2, 4, 6, 0]));
