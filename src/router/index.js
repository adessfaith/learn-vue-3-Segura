import { createRouter, createWebHistory } from "vue-router";

import { getUserRole, isAuthenticated } from "@/apis/auth";

const router = createRouter({
  //provide the history implementation to use
  history: createWebHistory(),

  scrollBehavior(to, from, savedPosition) {
    scrollBehaviorOptions = {
      top: 0,
      behavior: "smooth",
    };

    if ((to.meta, scrollToElement)) {
      scrollBehaviorOptions.e1 = to.meta.scrollToElement;
    }

    return savedPosition ?? scrollBehaviorOptions;
    // ...
  },

  //define wraps, each route mapper should be mapped to a component
  routes: [
    {
      path: "/",
      name: "mainLayout",
      component: () => import("@/views/MainLayout.vue"),
      redirect: { name: "home" },
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("@/views/Home.vue"),
          meta: { requiresAuth: false, title: "Home", isNavLink: true },
        },
        {
          path: "/blogPosts",
          name: "blogPosts",
          component: () => import("@/views/BlogPosts.vue"),
          meta: {
            title: "BlogPosts",
            isNavLink: true,
            enterAnimation: "animate__animated animate__bounceIn",
            leaveAnimation: "animate__animated animate__bounceOut",
          },
          redirect: { name: "blogPostsGreeting" },
          children: [
            {
              path: "",
              name: "blogPostsGreeting",
              component: () => import("@/views/BlogPostsGreeting.vue"),
              meta: { requiresAuth: false },
            },
            {
              path: "/blogPosts/:id(\\d+)",
              name: "blogPost",
              components: {
                default: () => import("@/views/BlogPost.vue"),
                sidebar: () => import("@/views/Ads.vue"),
              },
              meta: {
                requiresAuth: true,
                scrollToElement: ".blog-posts-layout",
              },
            },
          ],
        },
        {
          path: "/about",
          name: "about",
          component: () => import("@/views/About.vue"),
          meta: { requiresAuth: false, title: "About", isNavLink: true },
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue"),
      meta: { requiresAuth: false },
    },
    {
      path: "/:pathMatch(.*)*", // Match any path that hasn't been matched by a previous route
      name: "notFound",
      component: () => import("@/views/NotFound.vue"),
      meta: { requiresAuth: false },
    },
  ],
});

router.beforeEach((to, from) => {
  console.log(from.name, "->", to.name);
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    return { name: "login", query: { redirect: to.fullPath } };
  }

  const userRole = getUserRole();

  if (to.meta.roles && !to.meta.roles.includes(userRole)) {
    return { name: "home" };
  }
});
router.afterEach((to, from) => {
  console.log(`Successfully navigated to: ${to.fullPath}`);
});

//Export router instance

export default router;
