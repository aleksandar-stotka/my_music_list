import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/auth/LoginView.vue"
import SignupView from "@/views/auth/SignupView.vue"
import CreatePlayList from '@/views/playlist/CreatePlayList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/playlist/create',
    name: 'createPlayList',
    component: CreatePlayList
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
