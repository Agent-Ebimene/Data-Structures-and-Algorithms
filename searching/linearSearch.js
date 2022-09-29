function linearSearch(arr, element) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      console.log(`${element} is in index ${i} of the arr`);
      return i;
    }
  }
  return -1;
}
linearSearch([3, 4, 5, 6, 7, 8, 9, 0, 2], 9);

// Cases where search items appear more than once.

function globalSearch(arr, element) {
  let occurencies = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      occurencies.push(i);
      count++;
      console.log(`${count} occurence`);
    }
    if (!occurencies) return -1;
  }
  return occurencies;
}
globalSearch([1, 2, 3, 4, 5, 6, 6, 6, 7, 8, 9, 6], 6);
