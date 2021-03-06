import AuthService from '../domain/AuthService'

const authService = new AuthService()

export default (to, from, next) => {
  if (!authService.isLoggedIn()) {
    next({ name: 'auth.login' })
    return
  }
  next()
}
