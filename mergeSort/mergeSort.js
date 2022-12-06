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

console.log(merge_Arrays([2, 4], [1, 5]));
