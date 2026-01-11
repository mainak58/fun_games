import { MazeBoardProps } from "@/types/maze/maze";
import MazeRow from "./MazeRow";

function MazeBoard({ mazeGrid }: MazeBoardProps) {
  return (
    <div className="flex flex-col gap-1">
      {mazeGrid.map((row, rowIndex) => (
        <MazeRow key={rowIndex} row={row} rowIndex={rowIndex} />
      ))}
    </div>
  );
}

export default MazeBoard;
