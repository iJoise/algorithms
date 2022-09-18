let count = 0;

const quickSort = (arr) => {
  if (arr.length < 2) return arr
  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = arr[pivotIndex];
  const less = [];
  const greater = [];
  for (let i = 0; i < arr.length; i++) {
    count += 1;
    if (i === 0) continue;
    if (arr[i] < pivot) less.push(arr[i]);
    else greater.push(arr[i]);
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

const arr = [0, 3, 2, 5, 6, 88, 90, -2, -5, 8, 1, 9, 4, 2, 1, 2, 9, 6, 23, 6, 2, 35, 6, 3, 32];
console.log(quickSort(arr))

console.log('Длинна массива: ', arr.length);
console.log('Количество операций: ', count); // O(n log n)
