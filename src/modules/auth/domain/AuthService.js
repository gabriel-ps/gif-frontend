import axios from '@/modules/core/domain/api-axios'
import TokenService from './TokenService'

export default class AuthService {
  constructor () {
    this.tokenService = new TokenService()
  }

  isLoggedIn () {
    return this.tokenService.hasToken()
  }

  login (credentials) {
    return axios.post('/auth/login', credentials).then((response) => {
      this.tokenService.setToken(response.data)
      return response
    })
  }

  logout () {}
}
