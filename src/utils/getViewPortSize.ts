export default function getViewPortSize() {
  const doc = document.documentElement
  return {
    width: Math.max(doc.clientWidth, window.innerWidth || 0),
    height: Math.max(doc.clientHeight, window.innerHeight || 0),
  }
}
