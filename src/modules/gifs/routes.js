import GifsList from './views/GifsList.vue'
import isLoggedInGuard from '@/modules/auth/domain/isLoggedInGuard'

export default [
  {
    path: '/gifs',
    component: GifsList,
    name: 'gifs.list',
    meta: {
      title: 'Search Gifs'
    },
    beforeEnter: isLoggedInGuard
  }
]
