import React from "react";

import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";

import { GameplayScreen } from "./GameplayScreen";

describe("Gameplay", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(<GameplayScreen />);
    expect(asFragment()).toMatchSnapshot();
  });
});
