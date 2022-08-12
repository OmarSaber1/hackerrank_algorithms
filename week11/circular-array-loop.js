var circularArrayLoop = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    const isForward = arr[i] >= 0;

    let slow = i,
      fast = i;

    while (true) {
      slow = get_next_index(arr, isForward, slow);

      fast = get_next_index(arr, isForward, fast);

      if (fast !== -1) {
        fast = get_next_index(arr, isForward, fast);
      }
      if (slow == -1 || fast == -1 || fast == slow) break;
    }

    if (slow !== -1 && slow == fast) return true;
  }

  return false;
};

function get_next_index(arr, outerDirection, currentIdx) {
  const direction = arr[currentIdx] >= 0;

  if (direction !== outerDirection) return -1;

  let nextIdx = (currentIdx + arr[currentIdx]) % arr.length;

  if (nextIdx < 0) nextIdx += arr.length;

  // loop in same index
  if (currentIdx == nextIdx) return -1;

  return nextIdx;
}
