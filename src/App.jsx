import { useState } from 'react'
import WelcomeScreen from './components/WelcomeScreen'
import {GameplayScreen} from './components/GameplayScreen'
import './App.css'


function App() {
  const [screen, setScreen] = useState("WELCOME");

  return (
    <>
      {
        screen === "WELCOME" && <WelcomeScreen onStartGame={() => setScreen("GAMEPLAY")} />
      }
      {
        screen === "GAMEPLAY" && <GameplayScreen />
      }
    </>
  )
}

export default App
