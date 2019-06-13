import { range, popRandom, cross } from "./utils";

interface Point {
  x: number;
  y: number;
}

export class MinesweeperGame {
  rows: number;
  columns: number;

  constructor(rows: number, columns: number) {
    this.rows = rows;
    this.columns = columns;
  }

  generateBombs(bombCount: number, start?: Point): Array<Point> {
    let filter = start ? (x, y) => x != start.x && y != start.y : undefined;
    let bombLocations = cross(range(this.columns), range(this.rows), filter);
    while(bombLocations.length>bombCount){
      popRandom(bombLocations);
    }
    return bombLocations;
  }
}
