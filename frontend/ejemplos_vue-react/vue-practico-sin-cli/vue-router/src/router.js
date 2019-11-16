import Home from './components/Home.vue'
import About from './components/About.vue'
import Error404 from './components/404.vue'
import Show from './components/Show.vue'
import VueRouter from 'vue-router'

const routes = [
   { path: '/home', component: Home }, 
   { path: '/about', component: About }, 
   { path: '*', component: Error404 },
   {
       path: '/show/:Pid',
       name: 'details',
       component: Show

   } 
]

const router = new VueRouter({
    routes: routes
})

export default router;