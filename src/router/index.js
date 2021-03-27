import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/home-page.vue'
import boardList from '../views/board-list'
import boardDetails from '../views/board-details'
import taskDetails from '../views/task-details'
import login from '../views/login'
import signup from '../views/signup'
import dashboard from '../views/dashboard'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePage
  },
  {
    path: '/board',
    name: 'boardList',
    component: boardList
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/board/:boardId',
    name: 'boardDetails',
    component: boardDetails,
    children: [
      {
        path: 'task/:taskId',
        name: 'taskDetails',
        component: taskDetails
      },
    ]
  },
  {
    path: '/board/:boardId/dashboard',
    name: 'dashboard',
    component: dashboard
  },
]






const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
