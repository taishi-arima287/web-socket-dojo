import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { composeStory } from "@storybook/react";
import type { Meta } from "@storybook/react";
import * as stories from "./Button.stories";

const meta = stories.default as Meta;
const Default = composeStory(stories.Default, meta);
const Disabled = composeStory(stories.Disabled, meta);

describe("src/components/atoms/Button/Button.test.tsx", () => {
  const options = { name: "送信する" };
  test("Atom である", () => {
    const { container } = render(<Default />);
    expect(container).toBeAtom();
  });
  test("[role=button]である", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("button", options)).toBeInTheDocument();
  });
  test("[disabled=true]である", () => {
    const { getByRole } = render(<Disabled />);
    expect(getByRole("button", options)).toBeDisabled();
  });
});
