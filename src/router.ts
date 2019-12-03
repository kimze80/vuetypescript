import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Calculo from './views/Calculo.vue';
import Clock from './views/Clock.vue';
import List from './views/List.vue';
import ListCardView from './views/ListCardView.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/todo',
      name: 'todo',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Todo.vue'),
    },
    {
      path: '/calculo',
      name: 'calculo',
      component: Calculo,
    },
    {
      path: '/clock',
      name: 'clock',
      component: Clock,
    },
    {
      path: '/list',
      name: 'list',
      component: List,
    },
    {
      path: '/list-card-view',
      name: 'list-card-view',
      component: ListCardView,
    },
  ],
});
