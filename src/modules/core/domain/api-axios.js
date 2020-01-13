import axios from 'axios'
import TokenService from '@/modules/auth/domain/TokenService'

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

export default axiosInstance
