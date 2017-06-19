import './firebase';
import Vue from 'vue'
import Vuefire from 'vuefire'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueLazyload from 'vue-lazyload'



// component
import home from './components/page-home.vue'
import about from './components/page-about.vue'
import menu from './components/page-menu.vue'
import contact from './components/page-contact.vue'
import form from './components/page-form.vue'

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
  },
  {
  	path: '/contact',
  	component: contact
  },
    {
    path: '/zxc',
    component: form
  }
]


const router = new VueRouter({
  routes,
 	scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
}
})


Vue.use(VueRouter)
Vue.use(Vuefire)
Vue.use(VueLazyload)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: '/static/img/loading.gif',
  attempt: 1,
  // the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
  listenEvents: [ 'scroll' ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')


