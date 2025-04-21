import {createRouter,createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import BlogPosts from '@/views/BlogPosts.vue'
import About from '@/views/About.vue'
import BlogPost from '@/views/BlogPost.vue'
import BlogPostsGreeting from '@/views/BlogPostsGreeting.vue'
import NotFound from '@/views/NotFound.vue'
const router = createRouter({

    //provide the history implementation to use
    history: createWebHistory(),

    //define wraps, each route mapper should be mapped to a component
    routes: [
        { path: '/', name: 'home', component: Home },
        {
          path: '/blogposts',
          name: 'blogPosts',
          component: BlogPosts,
          redirect: {name: 'blogPostsGreeting'},
          children:[  
            { path: '/blogPostsGreeting', name: 'blogPostsGreeting', component: BlogPost },
            { path: '/blogPosts/:id(\\d+)', name: 'blogPost', component: BlogPostsGreeting },
           
          ],
        },
        { path: '/about', name: 'about', component: About },
        {path: '/:pathMatch(.*)*',
          name: 'notFound',
          component: NotFound
        },
      ],
})

//Export router instance

export default router