const climbingLeaderboard = (scores, alice) => {
  const uniqueScores = Array.from(new Set(scores)).reverse();

  const result = [];
  let index = 0;
  alice.forEach(value => {
    while (value >= uniqueScores[index]) {
      index++;
    }
    result.push(uniqueScores.length - index + 1);
  });

  return result;
};

scores1 = [100, 90, 90, 80, 75, 60];
alice1 = [50, 65, 77, 90, 102];
console.log(climbingLeaderboard(scores1, alice1));
