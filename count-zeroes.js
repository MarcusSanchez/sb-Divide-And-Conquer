function countZeroes(arr) {
  let [l, r] = [0, arr.length - 1]
  let count = 0

  while (l <= r) {
    let m = Math.floor((l + r) / 2)
    if (arr[m] === 0) {
      count += r - m + 1
      r = m - 1
    } else {
      l = m + 1
    }
  }
  return count
}

module.exports = countZeroes