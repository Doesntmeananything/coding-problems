function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  // Pivot is the first element
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length + 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // Left side
    quickSort(arr, left, pivotIndex - 1);
    // Right side
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
