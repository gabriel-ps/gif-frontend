import Login from './views/Login.vue'
import isGuestGuard from './domain/isGuestGuard'

export default [
  {
    path: '/login',
    component: Login,
    name: 'auth.login',
    meta: {
      title: 'Login'
    },
    beforeEnter: isGuestGuard
  }
]
