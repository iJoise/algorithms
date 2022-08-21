const binarySearch = (list, item) => {
  let low = 0;
  let hight = list.length - 1;

  while (low <= hight) {
    let mid = Math.floor((low + hight) / 2);
    let guess = list[mid];
    if (guess === item) {
      return mid;
    } else if (guess > item) {
      hight = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return null;
};

const arr = [1, 2, 3, 5, 9];
console.log(binarySearch(arr, 1));
console.log(binarySearch(arr, -1));
