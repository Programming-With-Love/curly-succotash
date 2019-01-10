import * as React from 'react'
import { throttle } from 'lodash'

export interface StarCanvasProps {
  width?: number | null
  height?: number | null
}

interface LapOptions {
  width: number
  height: number
  //与鼠标排斥距离，0无互动，正数排除，负数吸引
  rejectDistance?: number
  //hsl中的色相
  hue?: number
  //星星的最大数量
  max?: number
}

/**
 * 获取随机数
 * @param min 最小值，如果不传递max，则此参数为最大值
 * @param max 最大值
 */
const random = (min: number, max?: number): number => {
  if (max == null) {
    max = min
    min = 0
  }

  if (min > max) {
    let hold = max
    max = min
    min = hold
  }

  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * 获取最大轨道半径
 * @param x x坐标
 * @param y y坐标
 */
const maxOrbit = (x: number, y: number): number => {
  let max = Math.max(x, y),
    diameter = Math.round(Math.sqrt(max * max + max * max))
  return diameter / 2
}

interface StarPosition {
  //透明度
  alpha: number
  //x坐标
  sx: number
  //y坐标
  sy: number
  //裁剪宽度
  swidth: number
  //裁剪高度
  sheight: number
}

class Star {
  private orbitRadius: number
  private radius: number
  //原点x坐标
  private orbitX: number
  // 远点y坐标
  private orbitY: number
  private timePassed: number
  // 速度
  private speed: number
  //透明度
  alpha: number
  constructor(w: number, h: number, maxStars: number) {
    this.timePassed = random(0, maxStars)
    this.resize(w, h)
  }
  /**
   * 更新画布宽高，重新绘制
   * @param w 画布宽度
   * @param h 画布高度
   */
  resize(w: number, h: number) {
    this.orbitRadius = random(maxOrbit(w, h))
    this.radius = random(60, this.orbitRadius) / 12
    this.orbitX = w / 2
    this.orbitY = h / 2
    this.speed = random(this.orbitRadius) / 300000
    this.alpha = random(2, 10) / 10
  }
  next(): StarPosition {
    let x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
      y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
      twinkle = random(10)

    if (twinkle === 1 && this.alpha > 0) {
      this.alpha -= 0.05
    } else if (twinkle === 2 && this.alpha < 1) {
      this.alpha += 0.05
    }
    this.timePassed += this.speed
    return {
      sx: x - this.radius / 2,
      sy: y - this.radius / 2,
      swidth: this.radius,
      sheight: this.radius,
      alpha: this.alpha,
    }
  }
}

class CanvasLap {
  static defaultOptions = {
    rejectDistance: 0,
    width: 0,
    height: 0,
    hue: 217,
    max: 1000,
  }
  constructor(canvas: HTMLCanvasElement, options: LapOptions) {
    this.ctx = canvas.getContext('2d')
    options = {
      ...CanvasLap.defaultOptions,
      ...options,
    }
    canvas.width = options.width
    canvas.height = options.height
    this.options = options
    if (options.width !== 0 && options.height !== 0 && options.max > 0) {
      this.stars = new Array(options.max)
      for (let i = 0; i < options.max; i++) {
        this.stars[i] = new Star(options.width, options.height, options.max)
      }
    } else {
      this.stars = []
    }

    let canvas2 = document.createElement('canvas'),
      ctx2 = canvas2.getContext('2d')
    canvas2.width = 100
    canvas2.height = 100
    let half = canvas2.width / 2,
      gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half)
    gradient2.addColorStop(0.025, '#fff')
    gradient2.addColorStop(0.1, 'hsl(' + options.hue + ', 61%, 33%)')
    gradient2.addColorStop(0.25, 'hsl(' + options.hue + ', 64%, 6%)')
    gradient2.addColorStop(1, 'transparent')

    ctx2.fillStyle = gradient2
    ctx2.beginPath()
    ctx2.arc(half, half, half, 0, Math.PI * 2)
    ctx2.fill()
    this.cacheCanvas = canvas2
  }
  private options: LapOptions
  private animationId: number = 0
  private ctx: CanvasRenderingContext2D
  private stars: Array<Star>
  private cacheCanvas: HTMLCanvasElement
  //requestAnimationFrame兼容
  private requestAnimationFrame: (callback: FrameRequestCallback) => number =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    ((callback: FrameRequestCallback): number => window.setTimeout(callback, 6000 / 60))

  //cancelAnimationFrame兼容
  private cancelAnimationFrame: (handle: number) => void =
    window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    ((handle: number) => {
      window.clearTimeout(handle)
    })
  start() {
    this.animation()
  }
  stop() {
    this.cancelAnimationFrame.call(window, this.animationId)
  }
  resize = throttle((w: number, h: number) => {
    this.options.width = w
    this.options.height = h
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i].resize(w, h)
    }
  })
  private animation = () => {
    const ctx = this.ctx
    const hue = this.options.hue
    ctx.globalCompositeOperation = 'source-over'
    ctx.globalAlpha = 0.8
    ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)'
    ctx.fillRect(0, 0, this.options.width, this.options.height)

    ctx.globalCompositeOperation = 'lighter'
    for (let i = 0; i < this.stars.length; i++) {
      let p = this.stars[i].next()
      if (
        p.sx > this.options.width ||
        p.sy > this.options.height ||
        p.sx < -this.options.width ||
        p.sy < -this.options.height
      ) {
        //屏幕外的不再绘制
        continue
      }
      ctx.globalAlpha = p.alpha
      ctx.drawImage(this.cacheCanvas, p.sx, p.sy, p.swidth, p.sheight)
    }
    this.animationId = this.requestAnimationFrame.call(window, this.animation)
  }
}

export default class StarCanvas extends React.Component<StarCanvasProps> {
  constructor(props: StarCanvasProps) {
    super(props)
    this.state = {
      id: 0,
      width: 0,
      height: this.props.height,
    }
  }
  private lap: CanvasLap
  /**
   * 总是阻止更新，全部更新来自于数据处理的api变化
   */
  shouldComponentUpdate(nextProps: StarCanvasProps) {
    if (nextProps.width !== this.props.width || nextProps.height !== this.props.height) {
      this.lap.resize(this.props.width || window.innerWidth, this.props.height || window.innerHeight)
    }
    return false
  }

  componentDidMount() {
    const canvas = this.refs.canvas as HTMLCanvasElement
    this.lap = new CanvasLap(canvas, {
      width: this.props.width || window.innerWidth,
      height: this.props.height || window.innerHeight,
    })
    this.lap.start()
  }
  componentWillUnmount() {
    this.lap.stop()
  }
  render() {
    return <canvas ref="canvas" />
  }
}
