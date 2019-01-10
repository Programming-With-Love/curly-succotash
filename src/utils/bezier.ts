function division(x: number, t1: number, t2: number, epsilon: number, func: (num: number) => number) {
  //计算x的近似值
  let t0: number, x2: number, i: number
  t2 = x
  if (t2 < t0) return t0
  if (t2 > t1) return t1
  while (t0 < t1) {
    x2 = func(t2)
    if (Math.abs(x2 - x) < epsilon) return t2
    if (x > x2) t0 = t2
    else t1 = t2
    t2 = (t1 - t0) * 0.5 + t0
  }
  return t2
}
class Bezier {
  private cx: number
  private bx: number
  private ax: number
  private cy: number
  private by: number
  private ay: number
  constructor(p1x: number, p1y: number, p2x: number, p2y: number) {
    this.cx = 3.0 * p1x
    this.bx = 3.0 * (p2x - p1x) - this.cx
    this.ax = 1.0 - this.cx - this.bx
    this.cy = 3.0 * p1y
    this.by = 3.0 * (p2y - p1y) - this.cy
    this.ay = 1.0 - this.cy - this.by
  }
  private curveX(t: number) {
    return ((this.ax * t + this.bx) * t + this.cx) * t
  }
  private curveY(t: number) {
    return ((this.ay * t + this.by) * t + this.cy) * t
  }

  solve(t: number) {
    this.curveY(this.curveX(t))
  }
}
