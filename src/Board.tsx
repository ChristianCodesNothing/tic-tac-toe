import { useState } from "react"
import { Square } from "./Square"

interface Props {}

export const Board: React.FC<Props> = ({}) => {
  const [playerTurn, setPlayerTurn] = useState<"x" | "o">("x")
  return (
    <div className="grid grid-cols-3  grid-rows-3 h-96 w-96">
      <Square playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} />
      <Square playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} />
      <Square playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} />
      <Square playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} />
      <Square playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} />
      <Square playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} />
      <Square playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} />
      <Square playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} />
      <Square playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} />
    </div>
  )
}
