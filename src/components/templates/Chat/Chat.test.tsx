import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Chat } from "./Chat";

// socket.io-clientのモックを修正
jest.mock('socket.io-client', () => {
  const socket = {
    on: jest.fn(),
    emit: jest.fn(),
    disconnect: jest.fn()
  };
  return jest.fn(() => socket);
});

// fetchのモック
global.fetch = jest.fn(() => 
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({})
  })
) as jest.Mock;

describe("src/components/templates/Chat/Chat.test.tsx", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Template である", () => {
    const { container } = render(<Chat />);
    expect(container).toBeTemplate();
  });

  test("チャットのタイトルが表示される", () => {
    const { getByRole } = render(<Chat />);
    expect(getByRole("heading", { name: "WebSocketチャットデモ" })).toBeInTheDocument();
  });

  test("メッセージ入力フォームが表示される", () => {
    const { getByRole } = render(<Chat />);
    expect(getByRole("textbox", { name: "メッセージを入力" })).toBeInTheDocument();
  });

  test("送信ボタンが表示される", () => {
    const { getByRole } = render(<Chat />);
    expect(getByRole("button", { name: "送信" })).toBeInTheDocument();
  });

  test("メッセージ一覧が表示される", () => {
    const { getByRole } = render(<Chat />);
    expect(getByRole("log", { name: "チャットメッセージ" })).toBeInTheDocument();
  });
}); 