import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { composeStory } from '@storybook/react';
import type { Meta } from '@storybook/react';
import * as stories from "./TextBox.stories";

const meta = stories.default as Meta;
const Default = composeStory(stories.Default, meta);
const WithValue = composeStory(stories.WithValue, meta);

describe("src/components/atoms/TextBox/TextBox.test.tsx", () => {
  const options = { name: "メッセージを入力" };

  test("Atom である", () => {
    const { container } = render(<Default />);
    expect(container).toBeAtom();
  });

  test("[role=textbox]である", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("textbox", options)).toBeInTheDocument();
  });

  test("初期値が設定されている", () => {
    const { getByRole } = render(<WithValue />);
    expect(getByRole("textbox", options)).toHaveValue("テストメッセージ");
  });
}); 