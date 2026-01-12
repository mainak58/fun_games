"use client";
import React, { JSX, useState } from "react";

function ChessBoard() {
  const [board, setBoard] = useState<string[][]>([]);

  const makeBoard = () => {
    const board: string[][] = [];
    for (let i = 0; i < 8; i++) {
      const row = [];
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2) row.push("black");
        else row.push("white");
      }
      board.push(row);
    }
    setBoard(board);
  };

  let key = 0;
  const squares: JSX.Element[] = [];

  for (const r of board) {
    for (const c of r) {
      squares.push(
        <div
          key={key++}
          className={`size-10 border border-gray-500 ${
            c === "black" ? "bg-black" : "bg-white"
          }`}
        />
      );
    }
  }

  console.log("board", board);

  return (
    <>
      <div className="inline-block border-2 border-gray-700 shadow-lg">
        <div className="grid grid-cols-8">{squares}</div>
      </div>

      <button onClick={makeBoard}>makeBoard</button>
    </>
  );
}

export default ChessBoard;
