export default {
  overlayColorChange(state, value) {
    state.overlayColor = value
  },
  overlayOpacityChange(state, payload) {
    state.overlayOpacity = payload.value
  },
  filterChange(state, payload) {
    state.filters[payload.name].value = payload.value
  }
}
