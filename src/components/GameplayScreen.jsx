import React, { useEffect } from "react";
import { StatisticsService } from "../services/statistics-service.js";
import {
  LETTERS,
  MAXTURNS,
  SET_SCREEN,
  SET_SELECTED_LETTERS_INDEXES,
  STATISTICS_SCREEN,
} from "../consts.js";
import { GameplayService } from "../services/gameplay-service.js";
import { GameSelectors } from "../selectors/game-selectors.js";
import { GameActions } from "../actions/game-actions.js";

export const GameplayScreen = ({ gameState, dispatch }) => {
  useEffect(() => {
    dispatch({
      type: SET_SELECTED_LETTERS_INDEXES,
      selectedLettersIndexes: GameplayService.get2RandomLetters(),
    });
  }, [dispatch]);

  useEffect(() => {
    if (gameState?.answers.length >= MAXTURNS) {
      StatisticsService.setStatistic(
        gameState.startTime,
        GameSelectors.getCorrectCount(gameState),
        GameSelectors.getIncorrectCount(gameState),
        GameSelectors.getAverageResponseTime(gameState),
      );
      dispatch({ type: SET_SCREEN, screen: STATISTICS_SCREEN });
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
          <div className="correct">
            Правильно: {GameSelectors.getCorrectCount(gameState)}
          </div>
          <div className="incorrect">
            Неправильно: {GameSelectors.getIncorrectCount(gameState)}
          </div>
          <div className="average-response-time">
            Середній час відповіді:{" "}
            {GameSelectors.getAverageResponseTime(gameState)}c
          </div>
        </div>
      </div>
      <div>Яка з цих літер іде першою в алфавіті?</div>
      <div className="container">
        <div
          className="letter"
          onClick={() => dispatch(GameActions.addAnswer(gameState, 0))}
        >
          {LETTERS[gameState.selectedLettersIndexes[0]]}
        </div>
        <div
          className="letter"
          onClick={() => dispatch(GameActions.addAnswer(gameState, 1))}
        >
          {LETTERS[gameState.selectedLettersIndexes[1]]}
        </div>
      </div>
    </>
  );
};
