import GifList from './views/GifList.vue'
import isLoggedInGuard from '@/modules/auth/domain/isLoggedInGuard'
import RootLoggedInLayout from '@/modules/core/components/layout/RootLoggedInLayout'

export default [
  {
    path: '/gifs',
    component: RootLoggedInLayout,
    children: [
      {
        path: '',
        component: GifList,
        name: 'gif.list',
        meta: {
          title: 'Search Gifs'
        },
        beforeEnter: isLoggedInGuard
      }
    ]
  }
]
