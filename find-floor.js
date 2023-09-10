function findFloor(arr, target) {
  let [l, r] = [0, arr.length - 1];
  let floor = -1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] === target) return arr[m];

    if (arr[m] < target) {
      floor = arr[m];
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return floor;
}

module.exports = findFloor