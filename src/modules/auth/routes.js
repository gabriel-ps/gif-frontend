import Login from './views/Login.vue'
import isGuestGuard from './domain/isGuestGuard'
import isLoggedInGuard from './domain/isLoggedInGuard'
import AuthService from './domain/AuthService'

const authService = new AuthService()

export default [
  {
    path: '/login',
    component: Login,
    name: 'auth.login',
    meta: {
      title: 'Login'
    },
    beforeEnter: isGuestGuard
  },
  {
    path: '/logout',
    name: 'auth.logout',
    meta: {
      title: ''
    },
    beforeEnter: (to, from, next) => {
      isLoggedInGuard(to, from, async (to, from) => {
        await authService.logout()
        next({ name: 'auth.login' })
      })
    }
  }
]
