// Implementation Details of Merge Sort
//Assume that the first element is sorted
// start comparison from the second element (outer loop starts from index1)
//use an inner loop that has to compare previous elements.We can do this by decreasing the loop variable
//Swap elements where ever possible.

const insertionSort = (array) => {
  const arr = array.slice();
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
};

console.log(insertionSort([10, 8, 2, 9, 0]));
