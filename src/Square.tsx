import { useEffect, useState } from "react"
import { GrInstagram } from "react-icons/gr"
import { GrBitcoin } from "react-icons/gr"

interface Props {
  id: number
  playerTurn: "x" | "o"
  setPlayerTurn: React.Dispatch<React.SetStateAction<"x" | "o">>
  board: string[]
  setBoard: React.Dispatch<React.SetStateAction<string[]>>
  checkForWinner: (newBoard: string[]) => void
  winner: "x" | "o" | ""
  newGame: boolean
}

export const Square: React.FC<Props> = ({
  id,
  playerTurn,
  setPlayerTurn,
  board,
  setBoard,
  checkForWinner,
  winner,
  newGame,
}) => {
  const [tileValue, setTileValue] = useState<"" | "x" | "o">("")
  useEffect(() => {
    setTileValue("")
  }, [newGame])
  return (
    <button
      onClick={() => {
        if (tileValue === "" && !winner) {
          setTileValue(playerTurn)
          setPlayerTurn(playerTurn === "x" ? "o" : "x")
          let newBoard = board
          newBoard[id] = playerTurn
          setBoard(newBoard)
          checkForWinner(newBoard)
        }
      }}
      className="h-full w-full border border-black"
    >
      {tileValue === "x" && <GrInstagram size="100%" />}
      {tileValue === "o" && <GrBitcoin size="100%" />}
    </button>
  )
}
