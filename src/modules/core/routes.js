import NotFound from './views/NotFound.vue'

export default [
  {
    path: '/',
    redirect: { name: 'gifs.list' }
  },
  {
    path: '*',
    component: NotFound,
    meta: {
      title: 'Not Found'
    }
  }
]
