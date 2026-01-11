export type CellType =
  | "wall"
  | "path"
  | "start"
  | "end"
  | "visited"
  | "solution";
export type MazeGrid = CellType[][];

export type MazeCellType = {
  type: CellType;
  row: number;
  col: number;
};

export interface MazeRowProps {
  row: CellType[];
  rowIndex: number;
}

export interface MazeBoardProps {
  mazeGrid: MazeGrid;
}
