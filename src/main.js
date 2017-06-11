import Vue from 'vue'
import Vuefire from 'vuefire'
import App from './App.vue'
import VueRouter from 'vue-router'

// component
import home from './components/page-home.vue'
import about from './components/page-about.vue'
import menu from './components/page-menu.vue'

const routes = [
  { path: '/',
  	component: home
  },
  { path: '/about',
   component: about
  },
  {
  	path: '/menu',
  	component: menu
  }

]


const router = new VueRouter({
  routes,
  mode: 'history',
 	scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
}
})



Vue.use(VueRouter)
Vue.use(Vuefire)



new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')


