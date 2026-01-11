import { MazeCellType } from "@/types/maze/maze";
import React from "react";

function MazeCell(cell: MazeCellType) {
  const baseClasses = "w-6 h-6 border border-gray-300";
  let typeClasses = "";

  switch (cell.type) {
    case "wall":
      typeClasses = "bg-gray-800";
      break;
    case "path":
      typeClasses = "bg-white";
      break;
    case "start":
      typeClasses = "bg-green-500";
      break;
    case "end":
      typeClasses = "bg-red-500";
      break;
    case "visited":
      typeClasses = "bg-blue-200 transition-colors duration-300";
      break;
    case "solution":
      typeClasses = "bg-yellow-400";
      break;
    default:
      typeClasses = "bg-white";
  }

  return <div className={`${baseClasses} ${typeClasses}`}></div>;
}

export default MazeCell;
