function sortedFrequency(arr, target) {
  const [l, r] = [findFirst(arr, target), findLast(arr, target)]
  return (l !== -1 && r !== -1) ? r - l + 1 : -1;
}

function findFirst(arr, target) {
  let [l, r] = [0, arr.length - 1]
  let first = -1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (arr[mid] === target) {
      first = mid;
      r = mid - 1;
    } else if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return first;
}

function findLast(arr, target) {
  let [l, r] = [0, arr.length - 1]
  let last = -1;

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);

    if (arr[mid] === target) {
      last = mid;
      l = mid + 1;
    } else if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return last;
}


module.exports = sortedFrequency