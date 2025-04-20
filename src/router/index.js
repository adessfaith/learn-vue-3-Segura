import {createRouter,createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import BlogPosts from '@/views/BlogPosts.vue'
import About from '@/views/About.vue'
const router = createRouter({

    //provide the history implementation to use
    history: createWebHistory(),

    //define wraps, each route mapper should be mapped to a component
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/blogPosts', name: 'blogPosts', component: BlogPosts },
        { path: '/about', name: 'about', component: About },
      ],
})

//Export router instance

export default router