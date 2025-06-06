import React, { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { GameplayScreen } from "./components/GameplayScreen";
import "./App.css";
import { StatisticsScreen } from "./components/StatisticsScreen";
import { getDateTime } from "./services/statistic-service";

function App() {
  const [screen, setScreen] = useState("WELCOME");
  const [startTime, setStartTime] = useState(null);

  return (
    <>
      {screen === "WELCOME" && (
        <WelcomeScreen
          onStart={() => {
            setStartTime(getDateTime());
            setScreen("GAMEPLAY");
          }}
        />
      )}
      {screen === "GAMEPLAY" && (
        <GameplayScreen startTime={startTime} onScreenChange={setScreen} />
      )}
      {screen === "STATISTICS" && (
        <StatisticsScreen onScreenChange={setScreen} />
      )}
    </>
  );
}

export default App;
