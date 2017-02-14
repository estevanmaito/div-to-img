// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import store from './store'

import ImageForm from './components/Form/ImageForm.vue'
import TextForm from './components/Form/TextForm.vue'
import FiltersForm from './components/Form/FiltersForm.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: ImageForm },
  { path: '/text', component: TextForm },
  { path: '/filters', component: FiltersForm }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
