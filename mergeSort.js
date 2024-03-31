const EXAMPLE1 = [3, 2, 1, 13, 8, 5, 0, 1];
const EXAMPLE2 = [105, 79, 100, 110];

function merge(left = [], right = []) {
  const sorted = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return [...sorted, ...left, ...right];
}

function mergeSort(arr = []) {
  if (arr.length <= 1) return arr;

  const midIndex = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, midIndex));
  const right = mergeSort(arr.slice(midIndex));

  return merge(left, right);
}

console.log(mergeSort(EXAMPLE1));
console.log(mergeSort(EXAMPLE2));
