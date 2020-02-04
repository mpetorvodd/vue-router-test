import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Inner from '@/components/Inner'

Vue.use(Router)

const routes = [
    {
      path: '/', 
      component: HelloWorld
    },
    {
      path: '/inner',
      component: Inner
    }
  ];

const router = new Router({
  routes,
  mode: 'history'
});

export default router;