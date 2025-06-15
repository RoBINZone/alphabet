import { ADD_ANSWER, CLEAR_GAME } from "../consts.js";
import { GameplayService } from "../services/gameplay-service.js";

function clearGame() {
  return {
    type: CLEAR_GAME
  }
}

function addAnswer(gameState, clickedLetterIndex) {
  return {
    type: ADD_ANSWER,
    answer: GameplayService.prepareAnswer(gameState, clickedLetterIndex),
  };
}

export const GameActions = {
  addAnswer,
  clearGame,
};
