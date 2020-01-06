import { fireEvent, render, wait } from "@testing-library/react";

import { MemoryRouter as MockRouter } from "react-router-dom";
import PlayerForm from "./PlayerForm";
import React from "react";
import userEvent from "@testing-library/user-event";

/**
 * Mocks a valid form submission
 * @param {object} values
 */
const mockSubmit = values => console.log(values);

beforeEach(() => {
  console.log = jest.fn();
});

afterAll(() => {
  console.log.mockRestore();
});

test("should submit form", async () => {
  const { getByText, findByText, queryByText, getByLabelText } = render(
    <MockRouter>
      <PlayerForm onSubmit={mockSubmit} />
    </MockRouter>
  );

  /** Ensure we have the desired form controls */
  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);
  const submitButton = getByText(/submit/i);

  // First field is focused by default
  expect(firstNameInput).toHaveFocus();

  // Ensure validation fires
  fireEvent.blur(firstNameInput);
  expect(await findByText(/first name is required/i)).not.toBeNull();

  // Fill out the form
  await userEvent.type(firstNameInput, "Ron");
  await userEvent.type(lastNameInput, "Swanson");

  // Valid form - ensure there are no error messages
  await wait(() => {
    expect(queryByText(/first name is required/i)).toBeNull();
    expect(queryByText(/last name is required/i)).toBeNull();
  });

  // Submit the form
  userEvent.click(submitButton);

  await wait(() => {
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toBeCalledWith({
      firstName: "Ron",
      lastName: "Swanson"
    });
  });
});
