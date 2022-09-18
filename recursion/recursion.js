// Рекурсия
const factorial = (num) => {
  if (num === 1) return 1
  return num * factorial(num - 1)
}

const fibonacci = (num) => {
  if (num <= 1) return num
  return fibonacci(num - 1) + fibonacci(num - 2)
}

const binarySearch = (list, item, low, height) => {
  if (low > height) return null
  let mid = Math.floor((low + height) / 2);
  let guess = list[mid];
  if (guess === item) return mid;
  if (guess > item) {
    return binarySearch(list, item, low, mid - 1)
  } else {
    return binarySearch(list, item, mid + 1, height)
  }
};

const arr = [1, 2, 3, 5, 9, 12, 15, 18, 23, 27, 28, 33, 42, 49];
console.log(binarySearch(arr, 12, 0, arr.length - 1));
