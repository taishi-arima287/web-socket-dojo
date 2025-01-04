import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { composeStory } from '@storybook/react';
import type { Meta } from '@storybook/react';
import * as stories from "./MessageContainer.stories";

const meta = stories.default as Meta;
const Default = composeStory(stories.Default, meta);

describe("src/components/molecules/MessageContainer/MessageContainer.test.tsx", () => {
  test("Molecule である", () => {
    const { container } = render(<Default />);
    expect(container).toBeMolecule();
  });

  test("[role=log]である", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("log", { name: "チャットメッセージ" })).toBeInTheDocument();
  });

  test("メッセージが表示される", () => {
    const { getAllByRole } = render(<Default />);
    const messages = getAllByRole("article");
    expect(messages).toHaveLength(2);
    expect(messages[0]).toHaveTextContent("こんにちは");
    expect(messages[1]).toHaveTextContent("お元気ですか？");
  });
}); 