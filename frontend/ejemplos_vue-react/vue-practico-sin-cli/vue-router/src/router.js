import Home from './components/Home.vue'
import About from './components/About.vue'
import Error404 from './components/404.vue'
import VueRouter from 'vue-router'

const routes = [
   { path: '/home', component: Home }, 
   { path: '/about', component: About }, 
   { path: '*', component: Error404 }, 
]

const router = new VueRouter({
    routes: routes
})

export default router;