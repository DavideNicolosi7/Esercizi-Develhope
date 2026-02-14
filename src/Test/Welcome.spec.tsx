import { expect } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";
import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import Welcome from "./Welcome";

expect.extend(matchers as any);

describe("<Welcome />", () => {
  it("renders a welcome message with a name passed as prop and a message with the age passed as prop", () => {
    const { container } = render(<Welcome name="Davide" age={25} />);

    expect(container).toHaveTextContent("Welcome, Davide! Your age is 25");
  });
});
