import { Square } from "./Square"

interface Props {}

export const Board: React.FC<Props> = ({}) => {
  return (
    <div className="grid grid-cols-3  grid-rows-3 h-96 w-96">
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
      <Square />
    </div>
  )
}