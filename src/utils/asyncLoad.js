export function loadScript(src, fn) {
  if (!fn && window.Promise) {
    return new Promise((resolve, reject) => {
      loadScript(src, (err, node) => {
        if (err) {
          reject(err)
        } else {
          resolve(node)
        }
      })
    })
  }
  if (!fn) {
    fn = function() {}
  }
  let node = document.createElement('script')
  node.setAttribute('async', 'async')
  let timeId
  let supportLoad = 'onload' in node
  var onEvent = supportLoad ? 'onload' : 'onreadystatechange'
  node[onEvent] = function onLoad() {
    if (!supportLoad && !timeId && /complete|loaded/.test(node.readyState)) {
      timeId = setTimeout(onLoad)
      return
    }
    if (supportLoad || timeId) {
      clearTimeout(timeId)
      fn(null, node)
    }
  }
  let container = document.head || document.body
  container.append(node)
  node.src = src
  node.onerror = function(e) {
    fn(e)
  }
}
export function loadCss(src, fn) {
  if (!fn && window.Promise) {
    return new Promise((resolve, reject) => {
      loadCss(src, (err, node) => {
        if (err) {
          reject(err)
        } else {
          resolve(node)
        }
      })
    })
  }
  let node = document.createElement('link')
  node.rel = 'stylesheet'
  node.href = src
  let container = document.head || document.body
  container.insertBefore(node, container.firstChild)
  if (node.attachEvent) {
    node.attachEvent('onload', function() {
      fn(null, node)
    })
  } else {
    setTimeout(function() {
      poll(node, fn)
    }, 0)
  }
  function poll(node, callback) {
    let isLoaded = false
    if (/webkit/i.test(navigator.userAgent)) {
      if (node['sheet']) {
        isLoaded = true
      }
    } else if (node['sheet']) {
      try {
        if (node['sheet'].cssRules) {
          isLoaded = true
        }
      } catch (ex) {
        if (ex.code === 1000) {
          isLoaded = true
        }
      }
    }
    if (isLoaded) {
      setTimeout(function() {
        callback(null, node)
      }, 1)
    } else {
      setTimeout(function() {
        poll(node, callback)
      }, 10)
    }
  }
  node.onLoad = function() {
    fn(null, node)
  }
}
