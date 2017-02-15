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
  textAlignChange(state, value) {
    state.textAlign = value
  }
}
