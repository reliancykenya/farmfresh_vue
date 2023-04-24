import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CropIndex from '../views/crops/CropIndex.vue'
import AddCrop from '../views/crops/AddCrop.vue'
import EditCrop from '../views/crops/EditCrop.vue'
import RegisterUser from '../views/Auth/RegisterUser.vue'
import LoginUser from '../views/Auth/LoginUser.vue'
const router = createRouter({
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
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/crops',
      name: 'crops',
      component: CropIndex
    },
    {
      path: '/addCrop',
      name: 'addCrop',
      component: AddCrop
    },
    {
      path: '/crop/:id/edit',
      name: 'editCrop',
      component: EditCrop
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterUser
    },
    {
      path: '/login',
      name: 'login',
      component: LoginUser
    }
  ]
})

export default router
