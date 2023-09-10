function findRotationCount(arr) {
  let [l, r] = [0, arr.length - 1]

  while (l < r) {
    let mid = Math.floor((l + r) / 2)
    if (arr[mid] > arr[r]) {
      l = mid + 1
    } else {
      r = mid
    }
  }
  return l
}

module.exports = findRotationCount