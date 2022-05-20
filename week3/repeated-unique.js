function solution(a) {
  a.sort();
  if (a[0] == a[1]) return a[0];
  if (a[a.length - 1] === a[a.length - 2]) return a[a.length - 1];
  return a[Math.floor(a.length / 2)];
}
