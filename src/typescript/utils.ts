export function randomInt(range: number): number {
  return Math.floor(Math.random() * range);
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
