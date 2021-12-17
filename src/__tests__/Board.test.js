import { render, screen } from "@testing-library/react"
import { Board } from "../board/Board"

test("Board screen debug", () => {
  let squares = Array(9).fill("X")

  render(<Board ticTacArray={squares} />)

  screen.debug()
})
