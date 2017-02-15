export default {
  overlayOpacity(state) {
    return state.overlayOpacity / 100
  },
  filter(state) {
    let filter = state.filters
    let filters = ''
    filters += `blur(${filter.blur.value}px) `
    filters += `brightness(${filter.brightness.value}%) `
    filters += `contrast(${filter.contrast.value}%) `
    filters += `grayscale(${filter.grayscale.value}%) `
    filters += `hue-rotate(${filter.hueRotate.value}deg) `
    filters += `invert(${filter.invert.value}%) `
    filters += `saturate(${filter.saturate.value}%) `
    filters += `sepia(${filter.sepia.value}%)`
    return filters
  }
}
