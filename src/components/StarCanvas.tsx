import * as React from 'react'

export interface StarCanvasProps {
  width?: number | null
  height?: number | null
}
export default class StarCanvas extends React.Component<StarCanvasProps> {
  state: any
  constructor(props: StarCanvasProps) {
    super(props)
    this.state = {
      id: 0,
      pause: false,
    }
  }

  componentDidMount() {
    const tWin = window as any
    tWin.requestAnimFrame = (function() {
      return (
        tWin.requestAnimationFrame ||
        tWin.webkitRequestAnimationFrame ||
        tWin.mozRequestAnimationFrame ||
        function(callback: TimerHandler) {
          window.setTimeout(callback, 6000 / 60)
        }
      )
    })()
    var canvas = this.refs.canvas as HTMLCanvasElement,
      ctx = canvas.getContext('2d'),
      w = (canvas.width = this.props.width || window.innerWidth),
      h = (canvas.height = this.props.height || window.innerHeight),
      hue = 217,
      stars = new Array(),
      count = 0,
      maxStars = 120
    if (w <= 720) {
      return
    }
    window.onresize = () => {
      w = canvas.width = this.props.width || window.innerWidth
      if (w <= 720) {
        this.setState({ pause: true })
      } else {
        this.setState({ pause: false })
      }
      h = canvas.height = this.props.height || window.innerHeight
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

    // End cache

    function random(min: number, max?: number) {
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

    function maxOrbit(x: number, y: number) {
      var max = Math.max(x, y),
        diameter = Math.round(Math.sqrt(max * max + max * max))
      return diameter / 2
    }

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
      if (!_this.state.pause) {
        ctx.globalCompositeOperation = 'source-over'
        ctx.globalAlpha = 0.8
        ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 1)'
        ctx.fillRect(0, 0, w, h)

        ctx.globalCompositeOperation = 'lighter'
        for (var i = 1, l = stars.length; i < l; i++) {
          stars[i].draw()
        }
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
