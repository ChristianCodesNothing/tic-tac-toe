import { useState } from "react"

interface Props {
  playerTurn: "x" | "o"
  setPlayerTurn: React.Dispatch<React.SetStateAction<"x" | "o">>
}

export const Square: React.FC<Props> = ({ playerTurn, setPlayerTurn }) => {
  const [tileValue, setTileValue] = useState<"" | "x" | "o">("")
  return (
    <button
      onClick={() => {
        setTileValue(playerTurn)
        setPlayerTurn(playerTurn === "x" ? "o" : "x")
      }}
      className="h-full w-full border border-black"
    >
      {tileValue}
    </button>
  )
}
