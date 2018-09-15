import Vue from 'vue';
import Router from 'vue-router';
import HomeView from './views/HomeView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/DetailView.vue')
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('./views/PostView.vue')
    },
    {
      path: '/camera',
      name: 'camera',
      component: () => import('./views/CameraView.vue')
    }
  ]
});
