export default {
  textChange(state, value) {
    state.text = value
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
  filterChange(state, value) {
    if (value === 'none') {
      state.filter = ''
      return
    }
    if (value === 'blur') {
      state.filter = 'blur(5px)'
      return
    }
    if (value === '1977') {
      state.filter = 'sepia(0%) brightness(110%) contrast(110%) saturate(130%)'
      return
    }
    if (value === 'grayscale') {
      state.filter = 'grayscale(100%)'
      return
    }
    if (value === 'brooklyn') {
      state.filter = 'contrast(90%) brightness(110%)'
      return
    }
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
  overlayOpacityChange(state, value) {
    state.overlayOpacity = value
  },
  imageAlignChange(state, value) {
    state.imageAlign = value
  }
}
