import * as React from 'react'

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
  if (arguments.length < 2) {
    max = min
    min = 0
  }

  if (min > max) {
    var hold = max
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
  var max = Math.max(x, y),
    diameter = Math.round(Math.sqrt(max * max + max * max))
  return diameter / 2
}

//requestAnimationFrame兼容
const requestAnimationFrame: (callback: FrameRequestCallback) => number =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  ((callback: FrameRequestCallback): number => {
    return window.setTimeout(callback, 6000 / 60)
  })

//cancelAnimationFrame兼容
const cancelAnimationFrame: (handle: number) => void =
  window.cancelAnimationFrame ||
  window.webkitCancelAnimationFrame ||
  ((handle: number) => {
    window.clearTimeout(handle)
  })
class Star {}

class CanvasLap {
  constructor(
    canvas: HTMLCanvasElement,
    options: LapOptions = {
      rejectDistance: 0,
      width: 0,
      height: 0,
    }
  ) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.options = options
  }
  private options: LapOptions
  private canvas: HTMLCanvasElement
  private animationId: number = 0
  private ctx: CanvasRenderingContext2D
  private stars: Array<Star> = []
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

  private handleResize = () => {
    let canvas = this.refs.canvas as HTMLCanvasElement
    let w = (canvas.width = this.props.width || window.innerWidth)
  }

  /**
   * 生命周期提前
   * @param props 接收到的props
   */
  static getDerivedStateFromProps(props: StarCanvasProps) {}
  /**
   * 总是阻止更新，因为xml没有任何更新，全部更新来自于数据处理的api变化
   * 计算如果
   */
  shouldComponentUpdate(nextProps: StarCanvasProps) {
    //触发动画的计算更新即可
    if (nextProps.height !== this.props.height || nextProps.width !== this.props.width) {
      this.handleResize()
    }
    return false
  }

  componentDidMount() {
    var canvas = this.refs.canvas as HTMLCanvasElement,
      ctx = canvas.getContext('2d'),
      w = (canvas.width = this.props.width || window.innerWidth),
      h = (canvas.height = this.props.height || window.innerHeight),
      hue = 287,
      stars = new Array(),
      count = 0,
      maxStars = 120
    if (w <= 720) {
      return
    }
    const _this = this
    var canvas2 = document.createElement('canvas'),
      ctx2 = canvas2.getContext('2d')
    canvas2.width = 100
    canvas2.height = 100
    var half = canvas2.width / 2,
      gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half)
    gradient2.addColorStop(0.025, '#fff')
    gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)')
    gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)')
    gradient2.addColorStop(1, 'transparent')

    ctx2.fillStyle = gradient2
    ctx2.beginPath()
    ctx2.arc(half, half, half, 0, Math.PI * 2)
    ctx2.fill()

    class Star {
      constructor() {
        this.orbitRadius = random(maxOrbit(w, h))
        this.radius = random(60, this.orbitRadius) / 12
        this.orbitX = w / 2
        this.orbitY = h / 2
        this.timePassed = random(0, maxStars)
        this.speed = random(this.orbitRadius) / 900000
        this.alpha = random(2, 10) / 10

        count++
        stars[count] = this
      }
      orbitRadius: number
      radius: number
      orbitX: number
      orbitY: number
      timePassed: number
      speed: number
      alpha: number
      draw() {
        w = _this.props.width || window.innerWidth
        h = _this.props.height || window.innerHeight
        if (this.orbitX != w / 2 || this.orbitY != h / 2) {
          this.orbitX = w / 2
          this.orbitRadius = random(maxOrbit(w, h))
          this.orbitY = h / 2
          this.radius = random(60, this.orbitRadius) / 12
          this.speed = random(this.orbitRadius) / 900000
        }
        var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
          y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
          twinkle = random(10)

        if (twinkle === 1 && this.alpha > 0) {
          this.alpha -= 0.05
        } else if (twinkle === 2 && this.alpha < 1) {
          this.alpha += 0.05
        }

        ctx.globalAlpha = this.alpha
        ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius)
        this.timePassed += this.speed
      }
    }

    for (var i = 0; i < maxStars; i++) {
      new Star()
    }
    function animation() {
      ctx.globalCompositeOperation = 'source-over'
      ctx.globalAlpha = 0.8
      ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)'
      ctx.fillRect(0, 0, w, h)

      ctx.globalCompositeOperation = 'lighter'
      for (var i = 1, l = stars.length; i < l; i++) {
        stars[i].draw()
      }
      var id = window.requestAnimationFrame(animation)
      _this.setState({ id: id })
    }
    animation()
  }
  componentWillUnmount() {
    window.cancelAnimationFrame(this.state.id)
  }
  render() {
    return <canvas ref="canvas" />
  }
}
