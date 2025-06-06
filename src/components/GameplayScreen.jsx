import React, { useState, useEffect } from "react";
import { getDateTime, setStatistic } from "../services/statistic-service";

export const GameplayScreen = ({ startTime, onScreenChange }) => {
  const [answers, setAnswers] = useState([]);
  const letters = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯ";
  const [selectedLettersIndexes, setSelectedLettersIndexes] = useState([]);
  const MAXTURNS = 20;

  function get2RandomLetters() {
    const randomIndex = Math.floor(Math.random() * letters.length);
    const randomIndex2 =
      (randomIndex + 1 + Math.floor(Math.random() * (letters.length - 2))) %
      letters.length;
    setSelectedLettersIndexes([randomIndex, randomIndex2]);
  }

  function endGame() {
    setStatistic(
      startTime,
      getCorrectCount(),
      getIncorrectCount(),
      getAverageResponseTime(),
    );
    onScreenChange("STATISTICS");
  }

  async function checkAnswer(clickedLetterIndex) {
    const datetime = getDateTime();
    let newAnswers;
    if (
      clickedLetterIndex === 0 &&
      selectedLettersIndexes[0] <= selectedLettersIndexes[1]
    ) {
      newAnswers = [
        ...answers,
        {
          correct: true,
          datetime,
        },
      ];
    } else if (
      clickedLetterIndex === 1 &&
      selectedLettersIndexes[0] >= selectedLettersIndexes[1]
    ) {
      newAnswers = [
        ...answers,
        {
          correct: true,
          datetime,
        },
      ];
    } else {
      newAnswers = [
        ...answers,
        {
          correct: false,
          datetime,
        },
      ];
    }

    setAnswers(newAnswers);
  }

  function getCorrectCount() {
    return answers?.filter((item) => item.correct)?.length ?? 0;
  }

  function getIncorrectCount() {
    return answers?.filter((item) => !item.correct)?.length ?? 0;
  }

  function getAverageResponseTime() {
    const diffs = [];
    if (answers.length > 1) {
      for (let i = 0; i < answers.length - 1; i++) {
        diffs.push(
          answers[i].datetime - (i === 0 ? startTime : answers[i - 1].datetime),
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
    get2RandomLetters();
  }, []);

  useEffect(() => {
    if (answers.length >= MAXTURNS) {
      endGame();
    } else {
      get2RandomLetters();
    }
  }, [answers]);

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
          {letters[selectedLettersIndexes[0]]}
        </div>
        <div className="letter" onClick={() => checkAnswer(1)}>
          {letters[selectedLettersIndexes[1]]}
        </div>
      </div>
    </>
  );
};
