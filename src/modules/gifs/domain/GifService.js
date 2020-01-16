import axios from '@/modules/core/domain/api-axios'

export default class GifService {
  get (search) {
    return axios.get('/gifs', { params: { search } })
  }

  fetchFavorites () {
    return axios.get('/gifs/favorites')
  }

  favorite (gifId) {
    return axios.post('/gifs/favorites', { gif_id: gifId })
  }

  unfavorite (gifId) {
    return axios.delete('/gifs/favorites/' + gifId)
  }

  fetchSearches () {
    return axios.get('/gifs/searches')
  }
}
