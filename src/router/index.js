import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import model from '@/components/model'
import fault1 from '@/components/fault/fault1'
import fault2 from '@/components/fault/fault2'
import fault3 from '@/components/fault/fault3'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: resolve => require(['../components/home'],resolve),
    meta: {
      title:'home'
    }
  },
  {
    path: '/home',
    component: resolve => require(['../components/home'],resolve),
    meta: {
      title:'home'
    }
  },
  {
    path: '/HelloWorld',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path:'/model',
    name:'3dModel',
    component:model,
  },{
    path:'/fault1',
    name:'fault1',
    component:fault1,
  },{
    path:'/fault2',
    name:'fault2',
    component:fault2,
  },{
    path:'/fault3',
    name:'fault3',
    component:fault3,
  }
]

export default new Router({
  routes
})