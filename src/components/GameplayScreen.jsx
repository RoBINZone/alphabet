import React, { useEffect } from "react";
import { StatisticsService } from "../services/statistics-service.js";
import {
  LETTERS,
  MAXTURNS,
  SET_ANSWERS,
  SET_SELECTED_LETTERS_INDEXES,
  STATISTICS_SCREEN,
} from "../consts.js";
import { GameplayService } from "../services/gameplay-service.js";

export const GameplayScreen = ({ gameState, onScreenChange, dispatch }) => {
  function endGame() {
    StatisticsService.setStatistic(
      gameState.startTime,
      getCorrectCount(),
      getIncorrectCount(),
      getAverageResponseTime(),
    );
    onScreenChange(STATISTICS_SCREEN);
  }

  function setAnswers(answers) {
    dispatch({
      type: SET_ANSWERS,
      answers,
    });
  }

  function checkAnswer(clickedLetterIndex) {
    setAnswers([
      ...gameState.answers,
      {
        correct: GameplayService.checkAnswer(
          clickedLetterIndex,
          gameState.selectedLettersIndexes[0],
          gameState.selectedLettersIndexes[1],
        ),
        datetime: StatisticsService.getDateTime(),
      },
    ]);
  }

  function getCorrectCount() {
    return gameState?.answers?.filter((item) => item.correct)?.length ?? 0;
  }

  function getIncorrectCount() {
    return gameState?.answers?.filter((item) => !item.correct)?.length ?? 0;
  }

  function getAverageResponseTime() {
    const diffs = [];
    if (gameState?.answers.length > 1) {
      for (let i = 0; i < gameState?.answers.length - 1; i++) {
        diffs.push(
          gameState?.answers[i].datetime -
            (i === 0
              ? gameState.startTime
              : gameState?.answers[i - 1].datetime),
        );
      }
    }

    const avg =
      diffs.length > 0
        ? diffs.reduce((el, acc) => acc + el, 0) / diffs.length
        : 0;

    return Math.floor(avg / 10) / 100;
  }

  useEffect(() => {
    dispatch({
      type: SET_SELECTED_LETTERS_INDEXES,
      selectedLettersIndexes: GameplayService.get2RandomLetters(),
    });
  }, []);

  useEffect(() => {
    if (gameState?.answers.length >= MAXTURNS) {
      endGame();
    } else {
      dispatch({
        type: SET_SELECTED_LETTERS_INDEXES,
        selectedLettersIndexes: GameplayService.get2RandomLetters(),
      });
    }
  }, [gameState?.answers]);

  return (
    <>
      <div className="counter">
        <div>
          <div className="correct">Правильно: {getCorrectCount()}</div>
          <div className="incorrect">Неправильно: {getIncorrectCount()}</div>
          <div className="average-response-time">
            Середній час відповіді: {getAverageResponseTime()}c
          </div>
        </div>
      </div>
      <div>Яка з цих літер іде першою в алфавіті?</div>
      <div className="container">
        <div className="letter" onClick={() => checkAnswer(0)}>
          {LETTERS[gameState.selectedLettersIndexes[0]]}
        </div>
        <div className="letter" onClick={() => checkAnswer(1)}>
          {LETTERS[gameState.selectedLettersIndexes[1]]}
        </div>
      </div>
    </>
  );
};
