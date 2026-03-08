# Alphabet

A small React game for practicing **Ukrainian alphabet order**. You are shown two letters and choose which one comes first in the alphabet. The app tracks correct/incorrect answers and response time, and stores session statistics in the browser.

## Features

- **Welcome screen** — Short rules and a “Start game” button.
- **Gameplay** — 20 rounds per game; each round shows two random letters from the Ukrainian alphabet (А–Я). Click the letter that comes first. Live counters show correct/incorrect count and average response time.
- **Statistics** — After 20 rounds you see a summary. Past sessions are listed (date, correct/incorrect counts, average response time). Statistics are saved in `localStorage` and can be cleared.

## Tech Stack

- [React 19](https://react.dev/) with [Vite 6](https://vitejs.dev/)
- [PropTypes](https://www.npmjs.com/package/prop-types) for component props
- `useReducer` for game state (no Redux)
- Vitest + Testing Library for tests
- ESLint and Prettier for code style

## Project Structure

```
src/
├── App.jsx                 # Root app, screen routing, useReducer
├── main.jsx                # Entry point
├── consts.js               # Action types, screen names, LETTERS, MAXTURNS (20)
├── components/
│   ├── WelcomeScreen.jsx   # Intro and “Start game”
│   ├── GameplayScreen.jsx  # Two letters, counters, click handlers
│   └── StatisticsScreen.jsx # Session list and “Back” / “Clear stats”
├── actions/
│   └── game-actions.js     # addAnswer, clearGame (action creators)
├── reducers/
│   └── game-reducer.js     # State updates for all game actions
├── selectors/
│   └── game-selectors.js   # getCorrectCount, getIncorrectCount, getAverageResponseTime
└── services/
    ├── gameplay-service.js # get2RandomLetters, checkAnswer, prepareAnswer
    └── statistics-service.js # get/set/clear stats in localStorage, formatDate
```

- **State:** `screen`, `answers[]`, `selectedLettersIndexes`, `startTime` (set when game starts).
- **Screens:** `WELCOME_SCREEN` → `GAMEPLAY_SCREEN` → `STATISTICS_SCREEN` (after 20 answers).

## Scripts

| Command        | Description                    |
|----------------|--------------------------------|
| `npm run dev`  | Start dev server (port 3000)   |
| `npm run build`| Build for production → `docs/` |
| `npm run preview` | Preview production build   |
| `npm run test` | Run tests (Vitest)             |
| `npm run coverage` | Run tests with coverage    |
| `npm run lint` | Run ESLint                     |
| `npm run prettier` | Format code with Prettier  |

## Getting Started

### Prerequisites

- **Node.js**: Version 18.0.0 or higher (required by Vite 6).
- **npm**: Included with Node.js.

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the app:
   ```bash
   npm run dev
   ```
   The app opens at `http://localhost:3000` (or the URL shown in the terminal).

3. Build for deployment (output in `docs/`, suitable for static hosting e.g. GitHub Pages):
   ```bash
   npm run build
   ```

## Testing

- Unit tests live next to the code (e.g. `game-actions.test.js`, `GameplayScreen.test.jsx`) and in `src/` with `*.test.js(x)`.
- Run tests: `npm run test`
- Coverage: `npm run coverage`

## License

Private project (see `package.json`).
