import { useEffect, useState } from "react"
import { Board } from "./Board"

export const App: React.FC = () => {
  return (
    <div className="grid h-full w-full place-content-center ">
      <Board />
    </div>
  )
}
