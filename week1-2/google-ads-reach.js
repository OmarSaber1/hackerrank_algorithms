function viralAdvertising(n) {
  let totalLikes = 0;
  let peopleSeen = 5;

  for (var i = 0; i < n; i++) {
    let likes = Math.floor(peopleSeen / 2);
    totalLikes += likes;
    peopleSeen = likes * 3;
  }

  return totalLikes;
}

console.log(viralAdvertising(6));
console.log(viralAdvertising(2));
console.log(viralAdvertising(1));
