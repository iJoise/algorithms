// Сортировка выбором
let count = 0;

const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallest_intex = 0;
  for (let i = 0; i < arr.length; i++) {
    count += 1;
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_intex = i;
    }
  }

  return smallest_intex;
};

const selectionSort = (arr) => {
  const newArr = [];
  while (arr.length) {
    newArr.push(...arr.splice(findSmallest(arr), 1));
  }

  return newArr;
};
const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 23, 6, 2, 35, 6, 3, 32];
const length = arr.length;

console.log(selectionSort(arr));
console.log("Длинна массива: ", length);
console.log("Количество операций: ", count); //O(n*n)
