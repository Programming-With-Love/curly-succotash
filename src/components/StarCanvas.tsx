import * as React from 'react'
import { debounce, throttle } from 'lodash'
/* tslint:disable */
export interface StarCanvasProps extends LapOptions {}

interface LapOptions {
  width: number
  height: number
  // 与鼠标排斥距离，0无互动，正数排除，负数吸引
  rejectDistance?: {
    width: number
    height: number
  }
  rejectClient?: {
    x: number
    y: number
  }
  // hsl中的色相
  hue?: number
  // 星星的最大数量
  max?: number
  // 缓动系数
  easing?: number
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
  // 透明度
  alpha: number
  // x坐标
  sx: number
  // y坐标
  sy: number
  // 裁剪宽度
  swidth: number
  // 裁剪高度
  sheight: number
}

class Star {
  private orbitRadius: number
  private radius: number
  // 原点x坐标
  private orbitX: number
  // 远点y坐标
  private orbitY: number
  private timePassed: number
  // 速度
  private speed: number
  // 透明度
  alpha: number
  constructor(w: number, h: number, maxStars: number) {
    this.timePassed = random(0, maxStars)

    this.resize(w, h)

    this.radius = random(60, this.orbitRadius) / 12
    this.speed = random(this.orbitRadius) / 300000
    this.alpha = random(2, 10) / 10
  }
  /**
   * 更新画布宽高，重新绘制
   * @param w 画布宽度
   * @param h 画布高度
   */
  resize(w: number, h: number) {
    this.orbitX = w / 2
    this.orbitY = h / 2
    this.orbitRadius = random(maxOrbit(w, h))
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
    rejectDistance: {
      width: 0,
      height: 0,
    },
    width: 0,
    height: 0,
    hue: 217,
    max: 200,
    easing: 0.15,
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
    canvas2.width = 50
    canvas2.height = 50
    canvas2.style.borderRadius = '50%'
    let half = canvas2.width / 2,
      gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half)
    gradient2.addColorStop(0, '#fff')
    gradient2.addColorStop(0.1, 'hsl(' + options.hue + ', 61%, 33%)')
    gradient2.addColorStop(0.3, 'transparent')

    ctx2.fillStyle = gradient2
    ctx2.beginPath()
    ctx2.arc(half, half, half, 0, Math.PI * 2)
    ctx2.fill()
    this.cacheCanvas = canvas2
    this.canvas = canvas
    if (options.rejectDistance != null) {
      if (options.rejectClient == null) {
        options.rejectClient = {
          x: options.width / 2,
          y: options.height / 2,
        }
      }
      this.rejectX = options.rejectDistance.width * (options.rejectClient.x - options.width / 2)
      this.rejectY = options.rejectDistance.height * (options.rejectClient.y - options.height / 2)
    }
  }
  private options: LapOptions
  private animationId: number = 0
  private ctx: CanvasRenderingContext2D
  private stars: Star[]
  private cacheCanvas: HTMLCanvasElement
  private canvas: HTMLCanvasElement
  private rejectX: number = 0
  private rejectY: number = 0
  // requestAnimationFrame兼容
  private requestAnimationFrame: (callback: FrameRequestCallback) => number =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    ((callback: FrameRequestCallback): number => window.setTimeout(callback, 6000 / 60))

  // cancelAnimationFrame兼容
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
  resize = debounce((w: number, h: number) => {
    this.stop()
    this.canvas.width = w
    this.canvas.height = h
    this.options.width = w
    this.options.height = h
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i].resize(w, h)
    }
    this.start()
  }, 300)
  rereject = throttle((rejectClient: { x: number; y: number }) => {
    const options = this.options
    if (rejectClient == null) {
      this.rejectX = 0
      this.rejectY = 0
      return
    }
    this.rejectX = options.rejectDistance.width * (rejectClient.x - options.width / 2)
    this.rejectY = options.rejectDistance.height * (rejectClient.y - options.height / 2)
  }, 20)

  private animation = () => {
    const ctx = this.ctx
    // ctx.globalCompositeOperation = 'source-over'
    ctx.clearRect(0, 0, this.options.width, this.options.height)
    // ctx.globalCompositeOperation = 'lighter'
    for (let i = 0; i < this.stars.length; i++) {
      let p = this.stars[i].next()
      ctx.globalAlpha = p.alpha
      ctx.drawImage(this.cacheCanvas, p.sx, p.sy, p.swidth, p.sheight)
    }
    this.animationId = this.requestAnimationFrame.call(window, this.animation)
  }
}

export default class StarCanvas extends React.Component<StarCanvasProps> {
  private lap: CanvasLap
  /**
   * 总是阻止更新，全部更新来自于数据处理的api变化
   */
  shouldComponentUpdate(nextProps: StarCanvasProps) {
    if (nextProps.width !== this.props.width || nextProps.height !== this.props.height) {
      this.lap.resize(nextProps.width || window.innerWidth, nextProps.height || window.innerHeight)
    }
    if (nextProps.rejectClient != null && this.props.rejectClient != null) {
      if (
        nextProps.rejectClient.x !== nextProps.rejectClient.x ||
        nextProps.rejectClient.y !== nextProps.rejectClient.y
      ) {
        this.lap.rereject(nextProps.rejectClient)
      }
    } else if (nextProps.rejectClient == null && this.props.rejectClient != null) {
      this.lap.rereject(null)
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
    return <canvas ref="canvas" width={this.props.width} height={this.props.height} />
  }
}
