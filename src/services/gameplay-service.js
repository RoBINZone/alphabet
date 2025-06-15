import { LETTERS } from "../consts.js";

function get2RandomLetters() {
  const randomIndex = Math.floor(Math.random() * LETTERS.length);
  const randomIndex2 =
    (randomIndex + 1 + Math.floor(Math.random() * (LETTERS.length - 2))) %
    LETTERS.length;
  return [randomIndex, randomIndex2];
}

function checkAnswer(index, letter1Index, letter2Index) {
  return (
    (index === 0 && letter1Index <= letter2Index) ||
    (index === 1 && letter1Index >= letter2Index)
  );
}

export const GameplayService = {
  get2RandomLetters,
  checkAnswer,
};
