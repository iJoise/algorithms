// Бинарный поиск
let count = 0;

const binarySearch = (list, item) => {
  let low = 0;
  let height = list.length - 1;

  while (low <= height) {
    let mid = Math.floor((low + height) / 2);
    let guess = list[mid];
    if (guess === item) {
      return mid;
    } else if (guess > item) {
      height = mid - 1;
    } else {
      low = mid + 1;
    }
    count += 1;
  }
  return null;
};

const arr = [1, 2, 3, 5, 9, 12, 15, 18, 23, 27, 28, 33, 42, 49];
console.log(binarySearch(arr, 33));

console.log("Длинна массива: ", arr.length);
console.log("Колличество операций: ", count);
