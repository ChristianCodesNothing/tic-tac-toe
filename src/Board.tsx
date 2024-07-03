import { useState } from "react"
import { Square } from "./Square"

interface Props {}

export const Board: React.FC<Props> = ({}) => {
  const [playerTurn, setPlayerTurn] = useState<"x" | "o">("x")
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])
  const [winner, setWinner] = useState<"" | "x" | "o">("")
  const [newGame, setNewGame] = useState(true)
  const checkForWinner = (newBoard: string[]) => {
    const doesWin = (nums: number[]) =>
      newBoard[nums[0]] &&
      newBoard[nums[0]] === newBoard[nums[1]] &&
      newBoard[nums[0]] === newBoard[nums[2]]

    ;[
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ].forEach((dub) => {
      if (doesWin(dub)) setWinner(playerTurn)
    })
  }
  return (
    <div>
      <div className="grid grid-cols-3 grid-rows-3 h-96 w-96">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <Square
            key={i}
            id={i}
            playerTurn={playerTurn}
            setPlayerTurn={setPlayerTurn}
            board={board}
            setBoard={setBoard}
            checkForWinner={checkForWinner}
            winner={winner}
            newGame={newGame}
          />
        ))}
      </div>
      <div className="flex justify-between">
        <div>
          {winner ? (
            <p>{winner} is better. </p>
          ) : (
            <p>{playerTurn} is moving...</p>
          )}
        </div>
        <button
          onClick={() => {
            setBoard(["", "", "", "", "", "", "", "", ""])
            setWinner("")
            setNewGame(!newGame)
          }}
        >
          New Game
        </button>
      </div>
    </div>
  )
}
