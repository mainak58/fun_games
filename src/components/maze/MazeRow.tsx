import { MazeRowProps } from "@/types/maze/maze";
import React from "react";
import MazeCell from "./MazeCell";

function MazeRow({ row, rowIndex }: MazeRowProps) {
  return (
    <>
      <div className="flex">
        {row.map((cell, colIndex) => (
          <MazeCell
            key={`${rowIndex}-${colIndex}`}
            type={cell}
            row={rowIndex}
            col={colIndex}
          />
        ))}
      </div>
    </>
  );
}

export default MazeRow;
