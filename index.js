//Sum of positive
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
      }
  }
  return sum;
}
//What's the real floor?
if (n <= 0) {
  return n;
} else if (n === 1) {
  return 0;
} else if (n <= 12) {
  return n - 1;
} else {
  return n - 2;
}