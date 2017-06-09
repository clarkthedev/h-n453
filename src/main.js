import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
// component
import home from './components/page-home.vue'
import about from './components/page-about.vue'

const routes = [
  { path: '/',
  	component: home
  },
    { path: '/about', component: about }

]


const router = new VueRouter({
  routes // short for routes: routes
})


Vue.use(VueRouter)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')


