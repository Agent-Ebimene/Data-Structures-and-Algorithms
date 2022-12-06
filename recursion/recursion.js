// Recursion is the science of invoking a function inside the function
//The rescursive approach of doing a task repetitively takes less space
// There must be a base case and a change of variable at the end to call the function
const countDown = (number) => {
  if (number === 0) return;
  console.log(number);
  countDown(number - 1);
};

countDown(7);

const factorial = (n) => {
  if (n === 1 || n === 0) return 1;
  return n * factorial(n - 1);
};

console.log(factorial(3));
