import GifList from './views/GifList.vue'
import GifSearchHistory from './views/GifSearchHistory.vue'
import GifFavorites from './views/GifFavorites.vue'
import isLoggedInGuard from '@/modules/auth/domain/isLoggedInGuard'
import RootLoggedInLayout from '@/modules/core/components/layout/RootLoggedInLayout'

export default [
  {
    path: '/gifs',
    component: RootLoggedInLayout,
    beforeEnter: isLoggedInGuard,
    children: [
      {
        path: '',
        component: GifList,
        name: 'gif.list',
        meta: {
          title: 'Search Gifs'
        }
      },
      {
        path: 'search-history',
        component: GifSearchHistory,
        name: 'gif.search-history',
        meta: {
          title: 'Gifs Search History'
        }
      },
      {
        path: 'favorites',
        component: GifFavorites,
        name: 'gif.favorites',
        meta: {
          title: 'Favorite Gifs'
        }
      }
    ]
  }
]
