import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { GameActions } from "../actions/game-actions.js";

export const WelcomeScreen = ({ onStart, dispatch }) => {
  useEffect(() => {
    dispatch(GameActions.clearGame());
  }, [dispatch]);
  return (
    <div>
      <p>
        Вітаємо в грі "Алфавіт". Правила прості: вибирайте з двох літер ту, що
        йде першою в алфавіті.
      </p>
      <button onClick={() => onStart()}>Почати гру</button>
    </div>
  );
};

WelcomeScreen.propTypes = {
  onStart: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
};
