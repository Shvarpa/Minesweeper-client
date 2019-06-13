export function randomInt(range: number): number {
  return Math.floor(Math.random() * range);
}

export function zip(a: any[], b: any[]) {
  let result = [];
  for (let key in a) result.push([a[key], b[key]]);
  return result;
}

export function cross(
  a: any[],
  b: any[],
  filter?: (x: any, y: any) => boolean
) {
  let result = [];
  for (let x of a)
    for (let y of b) if (!filter || filter(x, y)) result.push([x, y]);
  return result;
}

export function range(num: number): number[] {
  return [...Array(num).keys()];
}

export function objectDeepEqual(x: any, y: any): boolean {
  const ok = Object.keys,
    tx = typeof x,
    ty = typeof y;
  return x && y && tx === "object" && tx === ty
    ? ok(x).length === ok(y).length &&
        ok(x).every(key => objectDeepEqual(x[key], y[key]))
    : x === y;
}

export function popRandom(array: any[]): any {
  return array.splice(randomInt(array.length), 1);
}
