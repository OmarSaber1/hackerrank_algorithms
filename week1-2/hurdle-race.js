function hurdleRace(maxJumpHeight, height) {
  const highestHurdle = Math.max(...height);

  if (maxJumpHeight >= highestHurdle) return 0;

  return highestHurdle - maxJumpHeight;
}

const maxDoses = hurdleRace(7, [1, 6, 3, 5, 2]);

console.log(maxDoses);
