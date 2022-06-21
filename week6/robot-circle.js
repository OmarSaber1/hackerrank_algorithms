var judgeCircle = function (moves) {
  const movesArray = [0, 0];

  for (var i = 0; i < moves.length; i++) {
    if (moves[i] === "U") {
      movesArray[0]++;
    } else if (moves[i] === "D") {
      movesArray[0]--;
    } else if (moves[i] === "R") {
      movesArray[1]++;
    } else {
      movesArray[1]--;
    }
  }

  return movesArray[0] == 0 && movesArray[1] == 0;
};
