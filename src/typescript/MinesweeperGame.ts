import { randomInt, objectDeepEqual } from "./utils";

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

  generateBombs(bombCount: number, start: Point | null): Array<Point> {
    // TODO: manage bomb overflow
    let bombLocations: Array<Point> = [];
    const validCandidate = (candidate: Point): boolean => {
      return (
        !bombLocations.every(bomb => !objectDeepEqual(candidate, bomb)) &&
        !objectDeepEqual(candidate, start)
      );
    };

    while (bombLocations.length < bombCount) {
      let candidate: Point = {
        x: randomInt(this.columns),
        y: randomInt(this.rows)
      };
      if (validCandidate) bombLocations.push(candidate);
    }
    return bombLocations;
  }
}
