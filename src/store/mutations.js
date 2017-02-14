export default {
  textChange(state, value) {
    state.text = value
  },
  textBoxSizeChange(state, payload) {
    state.textBoxSize = payload.value
  },
  fontChange(state, value) {
    state.selectedFont = value
  },
  fontColorChange(state, value) {
    state.fontColor = value
  },
  fontSizeChange(state, value) {
    state.fontSize = value
  },
  filterChange(state, payload) {
    state.filters[payload.name].value = payload.value
  },
  urlChange(state, value) {
    state.imageUrl = value
  },
  imageHeightChange(state, value) {
    state.imageHeight = value
  },
  imageWidthChange(state, value) {
    state.imageWidth = value
  },
  textAlignChange(state, value) {
    state.textAlign = value
  },
  overlayColorChange(state, value) {
    state.overlayColor = value
  },
  overlayOpacityChange(state, payload) {
    state.overlayOpacity = payload.value
  },
  imageAlignChange(state, value) {
    state.imageAlign = value
  }
}
