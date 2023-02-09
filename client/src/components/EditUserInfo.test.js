import React from "react";
import axios from "axios";
import { render, fireEvent, waitFor } from "@testing-library/react";
import EditUserInfo from "./EditUserInfo";
import { screen } from "@testing-library/react";

jest.mock("axios");

const user = JSON.parse(localStorage.getItem("user")) || {};
const token = user.token;
const onUpdateSuccess = jest.fn();

describe("EditUserInfo component", () => {
  test("Matches the snapshot", () => {
    const { component } = render(
      <EditUserInfo onUpdateSuccess={onUpdateSuccess} />
    );
    expect(component).toMatchSnapshot();
  });
  test("updates user info in the database when fields are entered with values", async () => {
    const { component } = render(
      <EditUserInfo onUpdateSuccess={onUpdateSuccess} />
    );

    const fakeResponse = {
      data: {
        username: "newUsername",
        email: "newEmail",
        token: "newToken",
      },
    };
    axios.put.mockResolvedValue(fakeResponse);

    fireEvent.change(screen.getByTestId("new-username"), {
      target: { value: "newUsername" },
    });
    fireEvent.change(screen.getByTestId("new-email"), {
      target: { value: "newEmail" },
    });
    fireEvent.change(screen.getByTestId("current-password"), {
      target: { value: "currentPassword" },
    });
    fireEvent.change(screen.getByTestId("new-password"), {
      target: { value: "newPassword" },
    });

    fireEvent.click(screen.getByText("Save Changes"));

    await waitFor(() => {
      expect(axios.put).toHaveBeenCalledWith(
        "http://localhost:5000/users/updateuser",
        {
          newUsername: "newUsername",
          newEmail: "newEmail",
          currentPassword: "currentPassword",
          newPassword: "newPassword",
          token: token,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    });
    expect(onUpdateSuccess).toHaveBeenCalled();
  });
});
