export default {
  textChange(state, value) {
    state.text = value
  },
  textAlignChange(state, value) {
    state.textAlign = value
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
  fontStyleChange(state) {
    state.fontStyle = state.fontStyle === 'normal' ? 'italic' : 'normal'
  },
  fontWeightChange(state) {
    state.fontWeight = state.fontWeight === 'normal' ? 'bold' : 'normal'
  },
  textDecorationChange(state) {
    state.textDecoration = state.textDecoration === 'none' ? 'underline' : 'none'
  }
}
