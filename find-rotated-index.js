function findRotatedIndex(arr, target) {
  let [l, r] = [0, arr.length - 1];

  while (l <= r) {
    let m = Math.floor((l + r) / 2)
    if (target === arr[m]) return m;

    // left side
    if (arr[l] <= arr[m]) {
      if (target > arr[m] || target < arr[l]) {
        l = m + 1 ;
      } else {
        r = m - 1;
      }
    // right side
    } else {
      if (target < arr[m] || target > arr[r]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }
  }
  return -1;
}

module.exports = findRotatedIndex