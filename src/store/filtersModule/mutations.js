export default {
  overlayColorChange(state, value) {
    state.overlayColor = value
  },
  overlayOpacityChange(state, payload) {
    state.overlayOpacity = payload.value
  },
  filterChange(state, payload) {
    state.filters[payload.name].value = payload.value
  },
  resetFilters(state) {
    const FILTERS_INITIAL_STATE = [0, 100, 100, 0, 0, 0, 100, 0]
    let i = 0
    for (let filter in state.filters) {
      state.filters[filter].value = FILTERS_INITIAL_STATE[i]
      i++
    }
    state.overlayColor = '#000000'
    state.overlayOpacity = 0
  }
}
