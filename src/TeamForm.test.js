import { fireEvent, render, wait } from "@testing-library/react";

import { MemoryRouter as MockRouter } from "react-router-dom";
import React from "react";
import TeamForm from "./TeamForm";
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
      <TeamForm onSubmit={mockSubmit} />
    </MockRouter>
  );

  /** Ensure we have the desired form controls */
  const teamNameInput = getByLabelText(/team name/i);
  const locationInput = getByLabelText(/location/i);
  const submitButton = getByText(/submit/i);

  // First field is focused by default
  expect(teamNameInput).toHaveFocus();

  // Ensure validation fires
  fireEvent.blur(teamNameInput);
  expect(await findByText(/team name is required/i)).not.toBeNull();

  // Fill out the form
  await userEvent.type(teamNameInput, "Average Joe's");
  await userEvent.type(locationInput, "Towson");

  // Valid form - ensure there are no error messages
  await wait(() => {
    expect(queryByText(/team name is required/i)).toBeNull();
    expect(queryByText(/location is required/i)).toBeNull();
  });

  // Submit the form
  userEvent.click(submitButton);

  await wait(() => {
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toBeCalledWith({
      name: "Average Joe's",
      location: "Towson"
    });
  });
});
