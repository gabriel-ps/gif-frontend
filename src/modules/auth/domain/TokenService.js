const key = 'authToken'

export default class TokenService {
  hasToken () {
    return !!this.getToken()
  }

  setToken (token) {
    window.localStorage.setItem(key, JSON.stringify(token))
  }

  getToken () {
    return JSON.parse(window.localStorage.getItem(key))
  }

  getTokenString () {
    const token = this.getToken()
    if (token) {
      return `Bearer ${token.access_token}`
    }
    return ''
  }

  removeToken () {
    window.localStorage.removeItem(key)
  }
}
