import React, { useState, useReducer } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { GameplayScreen } from "./components/GameplayScreen";
import "./App.css";
import { StatisticsScreen } from "./components/StatisticsScreen";
import { initialState, reducer } from "./reducers/game-reducer.js";
import {
  GAMEPLAY_SCREEN,
  SET_SCREEN,
  SET_SELECTED_LETTERS_INDEXES,
  SET_START_TIME,
  STATISTICS_SCREEN,
  WELCOME_SCREEN,
} from "./consts.js";
import { StatisticsService } from "./services/statistics-service.js";
import { GameplayService } from "./services/gameplay-service.js";

function App() {
  const [startTime, setStartTime] = useState(null);
  const [gameState, dispatch] = useReducer(reducer, initialState);

  const setScreen = (screen) => {
    dispatch({
      type: SET_SCREEN,
      screen,
    });
  };

  const onStart = () => {
    dispatch({
      type: SET_START_TIME,
      startTime: StatisticsService.getDateTime(),
    });
    dispatch({
      type: SET_SELECTED_LETTERS_INDEXES,
      selectedLettersIndexes: GameplayService.get2RandomLetters(),
    });
    dispatch({
      type: SET_SCREEN,
      screen,
    });
  };

  return (
    <>
      {gameState.screen === WELCOME_SCREEN && (
        <WelcomeScreen onStart={onStart} />
      )}
      {gameState.screen === GAMEPLAY_SCREEN && (
        <GameplayScreen
          gameState={gameState}
          onScreenChange={setScreen}
          dispatch={dispatch()}
        />
      )}
      {gameState.screen === STATISTICS_SCREEN && (
        <StatisticsScreen onScreenChange={setScreen} />
      )}
    </>
  );
}

export default App;
