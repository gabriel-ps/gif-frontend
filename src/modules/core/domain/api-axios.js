import axios from 'axios'
import TokenService from '@/modules/auth/domain/TokenService'
import router from '@/router'

const tokenService = new TokenService()

const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_END_POINT + '/api',
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})

axiosInstance.interceptors.request.use(function (config) {
  config.headers.Authorization = tokenService.getTokenString()
  return config
})

axiosInstance.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response.status === 401) {
    // Unauthenticated, remove expired token and send to login page
    tokenService.removeToken()
    router.push({ name: 'auth.login' })
  }
  return Promise.reject(error)
})

export default axiosInstance
