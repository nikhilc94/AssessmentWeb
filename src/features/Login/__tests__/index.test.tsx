import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";

import Login from "..";
import { StateContext } from "../../../context/context";
import { COUNTRY, LANGUAGE } from "../../../constants";

jest.mock("../../../locales/i18n", () => ({
  __esModule: true,
  use: () => {},
  init: () => {},
  default: {
    t: (k: any) => k,
  },
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("User credential validations for UAE (Username must be alphanumeric & atleast 5 characters)", () => {
  beforeEach(() => {
    render(
      <StateContext.Provider
        value={{
          country: COUNTRY.AE,
          lang: LANGUAGE.EN,
        }}
      >
        <Login />
      </StateContext.Provider>
    );
  });
  test("login button is disabled when an invalid username is passed", () => {
    const usernameInput = screen.getByTestId("username-input") as HTMLInputElement;
    const passwordInput = screen.getByTestId("password-input") as HTMLInputElement;
    const loginButton = screen.getByTestId("login-button");

    fireEvent.change(usernameInput, { target: { value: "Test123@" } });
    fireEvent.change(passwordInput, { target: { value: "12345678" } });

    expect(loginButton).toHaveClass("Mui-disabled");
  });

  test("login button is enabled when an valid username is passed", () => {
    const usernameInput = screen.getByTestId("username-input") as HTMLInputElement;
    const passwordInput = screen.getByTestId("password-input") as HTMLInputElement;
    const loginButton = screen.getByTestId("login-button");

    fireEvent.change(usernameInput, { target: { value: "Test123" } });
    fireEvent.change(passwordInput, { target: { value: "12345678" } });

    expect(loginButton).not.toHaveClass("Mui-disabled");
  });
});

describe("User credential validations for India (Username must have atleast 6 characters & have one '@' or '_')", () => {
  beforeEach(() => {
    render(
      <StateContext.Provider
        value={{
          country: COUNTRY.IN,
          lang: LANGUAGE.EN,
        }}
      >
        <Login />
      </StateContext.Provider>
    );
  });
  test("login button is disabled when an invalid username is passed", () => {
    const usernameInput = screen.getByTestId("username-input") as HTMLInputElement;
    const passwordInput = screen.getByTestId("password-input") as HTMLInputElement;
    const loginButton = screen.getByTestId("login-button");

    fireEvent.change(usernameInput, { target: { value: "Test12345" } });
    fireEvent.change(passwordInput, { target: { value: "12345678" } });

    expect(loginButton).toHaveClass("Mui-disabled");
  });

  test("login button is enabled when an valid username is passed", () => {
    const usernameInput = screen.getByTestId("username-input") as HTMLInputElement;
    const passwordInput = screen.getByTestId("password-input") as HTMLInputElement;
    const loginButton = screen.getByTestId("login-button");

    fireEvent.change(usernameInput, { target: { value: "Test_123" } });
    fireEvent.change(passwordInput, { target: { value: "12345678" } });

    expect(loginButton).not.toHaveClass("Mui-disabled");
  });
});

describe("User credential validations for Saudi Arabia (Username must be alphanumeric & atleast 6 characters & have 1 number)", () => {
  beforeEach(() => {
    render(
      <StateContext.Provider
        value={{
          country: COUNTRY.SA,
          lang: LANGUAGE.EN,
        }}
      >
        <Login />
      </StateContext.Provider>
    );
  });
  test("login button is disabled when an invalid username is passed", () => {
    const usernameInput = screen.getByTestId("username-input") as HTMLInputElement;
    const passwordInput = screen.getByTestId("password-input") as HTMLInputElement;
    const loginButton = screen.getByTestId("login-button");

    fireEvent.change(usernameInput, { target: { value: "Tester@" } });
    fireEvent.change(passwordInput, { target: { value: "12345678" } });

    expect(loginButton).toHaveClass("Mui-disabled");
  });

  test("login button is enabled when an valid username is passed", () => {
    const usernameInput = screen.getByTestId("username-input") as HTMLInputElement;
    const passwordInput = screen.getByTestId("password-input") as HTMLInputElement;
    const loginButton = screen.getByTestId("login-button");

    fireEvent.change(usernameInput, { target: { value: "Tester123" } });
    fireEvent.change(passwordInput, { target: { value: "12345678" } });

    expect(loginButton).not.toHaveClass("Mui-disabled");
  });
});

describe("User credential validations for Egypt (Username must be alphanumeric & atleast 9 characters)", () => {
  beforeEach(() => {
    render(
      <StateContext.Provider
        value={{
          country: COUNTRY.EG,
          lang: LANGUAGE.EN,
        }}
      >
        <Login />
      </StateContext.Provider>
    );
  });
  test("login button is disabled when an invalid username is passed", () => {
    const usernameInput = screen.getByTestId("username-input") as HTMLInputElement;
    const passwordInput = screen.getByTestId("password-input") as HTMLInputElement;
    const loginButton = screen.getByTestId("login-button");

    fireEvent.change(usernameInput, { target: { value: "Tester" } });
    fireEvent.change(passwordInput, { target: { value: "12345678" } });

    expect(loginButton).toHaveClass("Mui-disabled");
  });

  test("login button is enabled when an valid username is passed", () => {
    const usernameInput = screen.getByTestId("username-input") as HTMLInputElement;
    const passwordInput = screen.getByTestId("password-input") as HTMLInputElement;
    const loginButton = screen.getByTestId("login-button");

    fireEvent.change(usernameInput, { target: { value: "Tester123456" } });
    fireEvent.change(passwordInput, { target: { value: "12345678" } });

    expect(loginButton).not.toHaveClass("Mui-disabled");
  });
});
