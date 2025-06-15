import React, { useState } from "react";
import { StatisticsService } from "../services/statistics-service.js";
import { SET_SCREEN, WELCOME_SCREEN } from "../consts.js";

export const StatisticsScreen = ({ dispatch }) => {
  const [statistics, setStatistics] = useState(
    StatisticsService.getStatistic(),
  );

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }

  return (
    <div className="statistics-screen">
      <div> дата / правильно / неправильно / середній час відповіді</div>
      {statistics &&
        statistics.reverse().map((item, index) => (
          <div className="statistics-list-item" key={index}>
            <div className="statistics-list-item-cell datetime">
              {formatDate(item.datetime)}
            </div>
            <div className="statistics-list-item-cell correct">
              {item.correct}
            </div>
            <div className="statistics-list-item-cell incorrect">
              {item.incorrect}
            </div>
            <div className="statistics-list-item-cell average-response-time">
              {item.averageResponseTime} c.
            </div>
          </div>
        ))}
      <div>
        <button
          onClick={() => dispatch({ type: SET_SCREEN, screen: WELCOME_SCREEN })}
        >
          На початок
        </button>
        <button
          onClick={() => {
            StatisticsService.clearStatistics();
            setStatistics([]);
          }}
        >
          Очистити статистику
        </button>
      </div>
    </div>
  );
};
