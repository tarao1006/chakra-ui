import { render, screen, testA11y } from "@chakra-ui/test-utils"
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "."

test("passes a11y test", async () => {
  await testA11y(
    <Alert>
      <AlertIcon />
      <AlertTitle>Alert title</AlertTitle>
      <AlertDescription>Alert description</AlertDescription>
    </Alert>,
  )
})

test("should have role='alert'", () => {
  render(
    <Alert>
      <AlertIcon />
      <AlertTitle>Alert title</AlertTitle>
      <AlertDescription>Alert description</AlertDescription>
    </Alert>,
  )

  expect(screen.getByRole("alert")).toBeInTheDocument()
})
