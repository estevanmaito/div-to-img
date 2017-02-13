export default {
  imageWidth(state) {
    return `${state.imageWidth}px`
  },
  imageHeight(state) {
    return `${state.imageHeight}px`
  },
  backgroundImage(state) {
    return `url(${state.imageUrl})`
  },
  fontSize(state) {
    return `${state.fontSize}px`
  },
  overlayOpacity(state) {
    return state.overlayOpacity / 100
  }
}
