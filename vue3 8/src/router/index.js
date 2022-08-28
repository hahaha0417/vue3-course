import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '../views/AboutView.vue'
// import a from '../views/about/a.vue'
const router = createRouter({
  //http://127.0.0.1:5173/#/address
  // history: createWebHashHistory(),
  // 原來的方法
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // 靜態載入
      // component: AboutView,
      // 動態載入
      component: () => import('../views/AboutView.vue'),
      children: [
        // {
        //   path: '',
        //   name: '',
        //   component: () => import('../views/AboutView.vue'),
    
        // },
        {
          path: 'aaa',
          name: 'aaa',
          component: () => import('../views/about/a.vue'),
    
        },
        {
          path: 'bbb',
          name: 'bbb',
          component: () => import('../views/about/b.vue'),
    
        },
        {
          path: 'ccc',
          name: 'ccc',
          component: () => import('../views/about/c.vue'),
    
        },
      ]
    },
    {
      path: '/address',
      name: 'address',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AddressView.vue'),
    },
    {
      path: '/:id',
      name: 'userdata',
      component: import('../views/[id].vue'),

    },
    // https://router.vuejs.org/guide/essentials/dynamic-matching.html#catch-all-404-not-found-route
    // will match everything and put it under `$route.params.pathMatch`
  { path: '/:domain(.*)*', name: 'NotFound', component: import('../views/404.vue') },
  ]
})

export default router
