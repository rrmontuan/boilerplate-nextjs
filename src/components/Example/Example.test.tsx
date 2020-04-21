import "@testing-library/jest-dom"
// NOTE: jest-dom adds handy assertions to Jest (like toBeInTheDocument) and is recommended, but not required

import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import ExampleComponent from "./Example"

test("shows the children when the checkbox is checked", () => {
  const testMessage = "Test Message"
  render(<ExampleComponent>{testMessage}</ExampleComponent>)

  expect(screen.queryByText(testMessage)).toBeNull()

  fireEvent.click(screen.getByLabelText(/show/i))

  expect(screen.getByText("Test Message")).toBeInTheDocument()
})
