import { beforeEach, describe, expect, it, vi } from "vitest";
import { createRoot } from "react-dom/client";

vi.mock("react-dom/client", async () => {
  const actual = await vi.importActual("react-dom/client");
  return {
    ...actual,
    createRoot: vi.fn(() => ({
      render: vi.fn(),
    })),
  };
});

describe("main.jsx", () => {
  beforeEach(() => {
    // Setup DOM node for root
    document.body.innerHTML = '<div id="root"></div>';
  });

  it("should create a root and render App", async () => {
    await import("./main.jsx"); // Run the file

    expect(createRoot).toHaveBeenCalledTimes(1);
    expect(createRoot).toHaveBeenCalledWith(document.getElementById("root"));
    const instance = createRoot.mock.results[0].value;
    expect(instance.render).toHaveBeenCalledTimes(1);
  });
});
