function merge_Arrays(left_sub_array, right_sub_array) {
  // left_sub_array and right_sub_array must be sorted
  let array = [];
  while (left_sub_array.length && right_sub_array.length) {
    if (left_sub_array[0] <= right_sub_array[0]) {
      array.push(left_sub_array.shift());
    } else {
      array.push(right_sub_array.shift());
    }
  }
  return [...array, ...left_sub_array, ...right_sub_array];
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length) / 2;
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);
  return merge_Arrays(mergeSort(leftArr), mergeSort(rightArr));
}

console.log(mergeSort([2, 34, 0, 1, 8, 12]));
