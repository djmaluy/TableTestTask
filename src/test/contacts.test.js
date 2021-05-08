import React from "react";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Contacts } from "../pages/Contacts/Contacts";

describe("contacts get data", () => {
  test("loading", async () => {
    render(<Contacts />);

    const loader = screen.getByTestId("contacts-loader");
    expect(loader).toBeInTheDocument();
    await waitForElementToBeRemoved(loader);
  });
  test("success", async () => {
    render(<Contacts />);

    const loader = screen.getByTestId("contacts-loader");

    await waitForElementToBeRemoved(loader);

    expect(loader).not.toBeInTheDocument();
    expect(screen.getByTestId("contacts-table-container")).toBeInTheDocument();
  });
  // test("fail", async () => {
  //   server.use(
  //     rest.get("https://randomuser.me/api/?results=8", (req, res, ctx) => {
  //       return res(
  //         ctx.status(500),
  //         ctx.json({
  //           error: "Internal server error",
  //         })
  //       );
  //     })
  //   );
  //   render(<Contacts />);
  //   const loader = screen.getByTestId("contacts-loader");

  //   await waitForElementToBeRemoved(loader);

  //   expect(loader).not.toBeInTheDocument();
  //   expect(screen.getByTestId("contacts-error")).toBeInTheDocument();
  // });
});
describe("contacts data view mode", () => {
  test("should be equal table", async () => {
    render(<Contacts />);

    const loader = screen.getByTestId("contacts-loader");

    await waitForElementToBeRemoved(loader);

    expect(screen.getByTestId("contacts-table-container")).toBeInTheDocument();
    expect(screen.getByTestId("contacts-viewmode-table")).toHaveClass(
      "Mui-selected"
    );
    expect(
      screen.getByTestId("contacts-grid-container")
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("contacts-viewmode-grid")).not.toHaveClass(
      "Mui-selected"
    );
  });
});