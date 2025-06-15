import React from "react";
import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { GameplayScreen } from "./GameplayScreen";
import { GAMEPLAY_SCREEN } from "../consts.js";
import { initialState } from "../reducers/game-reducer.js";

describe("Gameplay", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(
      <GameplayScreen gameState={initialState} dispatch={() => undefined} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
