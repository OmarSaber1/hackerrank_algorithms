function climbingLeaderboard(ranked, player) {
  const playerRanks = [];

  for (var i = 0; i < player.length; i++) {
    const playerRankIndex = [...new Set([...ranked, player[i]])]
      .sort((a, b) => b - a)
      .indexOf(player[i]);

    playerRanks[i] = playerRankIndex + 1;
  }

  return playerRanks;
}

const scores = climbingLeaderboard(
  [100, 100, 50, 40, 40, 20, 10],
  [5, 25, 50, 120]
);

console.log(scores);
