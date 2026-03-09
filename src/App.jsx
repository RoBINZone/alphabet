import React, { useEffect, useReducer } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { GameplayScreen } from "./components/GameplayScreen";
import "./App.css";
import { StatisticsScreen } from "./components/StatisticsScreen";
import { initialState, reducer } from "./reducers/game-reducer.js";
import {
  CLEAR_GAME,
  GAMEPLAY_SCREEN,
  SET_SCREEN,
  SET_SELECTED_LETTERS_INDEXES,
  SET_START_TIME,
  STATISTICS_SCREEN,
  WELCOME_SCREEN,
} from "./consts.js";
import { StatisticsService } from "./services/statistics-service.js";
import { GameplayService } from "./services/gameplay-service.js";
import { ThemeToggle } from "./components/ThemeToggle.jsx";

function App() {
  const [gameState, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", gameState.theme);
  }, [gameState.theme]);

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
      screen: GAMEPLAY_SCREEN,
    });
  };

  const screens = {
    [WELCOME_SCREEN]: () => (
      <WelcomeScreen onStart={onStart} dispatch={dispatch} />
    ),
    [GAMEPLAY_SCREEN]: () => (
      <GameplayScreen gameState={gameState} dispatch={dispatch} />
    ),
    [STATISTICS_SCREEN]: () => <StatisticsScreen dispatch={dispatch} />,
  };

  return (
    <>
      <ThemeToggle theme={gameState.theme} dispatch={dispatch} />
      {(screens[gameState.screen] && screens[gameState.screen]()) ?? null}
    </>
  );
}

export default App;
