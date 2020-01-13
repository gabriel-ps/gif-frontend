import AuthService from '../domain/AuthService'

const authService = new AuthService()

export default (to, from, next) => {
  if (!authService.isLoggedIn()) {
    next({
      name: 'login',
      redirectTo: to.path
    })
    return
  }
  next()
}
