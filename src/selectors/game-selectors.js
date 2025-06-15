const getCorrectCount = (gameState) => {
  return gameState?.answers?.filter((item) => item.correct)?.length ?? 0;
};

const getIncorrectCount = (gameState) => {
  return gameState?.answers?.filter((item) => !item.correct)?.length ?? 0;
};

const getAverageResponseTime = (gameState) => {
  const diffs = [];
  if (gameState?.answers.length > 1) {
    for (let i = 0; i < gameState?.answers.length - 1; i++) {
      diffs.push(
        gameState?.answers[i].datetime -
          (i === 0 ? gameState.startTime : gameState?.answers[i - 1].datetime),
      );
    }
  }

  const avg =
    diffs.length > 0
      ? diffs.reduce((el, acc) => acc + el, 0) / diffs.length
      : 0;

  return Math.floor(avg / 10) / 100;
};

export const GameSelectors = {
  getCorrectCount,
  getIncorrectCount,
  getAverageResponseTime,
};
