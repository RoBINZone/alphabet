import React from "react";
import { render } from "@testing-library/react";
import { expect, it, describe } from "vitest";
import { WelcomeScreen } from "./WelcomeScreen.jsx";

describe("Welcome Screen", () => {
  it("should match snapshot", () => {
    const { asFragment } = render(
      <WelcomeScreen onStart={() => undefined} dispatch={() => undefined} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
