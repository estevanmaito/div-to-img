import Vue from 'vue'
import Vuex from 'vuex'
import filtersModule from './filtersModule'
import imageModule from './imageModule'
import textModule from './textModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    filtersModule,
    imageModule,
    textModule
  }
})
