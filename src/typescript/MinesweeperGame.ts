import { range, popRandom, cross, genFilter, genMap } from "./utils";

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

  generateBombs(bombCount: number, start?: Point): Point[] {
    let grid = cross(range(this.columns), range(this.rows));
    let bombGen = genMap(grid, point => {
      return <Point>{
        x: point[0],
        y: point[1]
      };
    });
    bombGen = start
      ? genFilter(bombGen, point => !(point.x == start.x && point.y == start.y))
      : bombGen;
    let bombLocations = [...bombGen];
    while (bombLocations.length > bombCount) {
      popRandom(bombLocations);
    }
    return bombLocations;
  }
}
