import axios from '@/modules/core/domain/api-axios'

export default class GifService {
  get (search) {
    return axios.get('/gifs', { params: { search } })
  }

  favorite (gifId) {
    return axios.post('/gifs/favorite', { gif_id: gifId })
  }

  unfavorite (gifId) {
    return axios.delete('/gifs/favorite/' + gifId)
  }

  fetchSearches () {
    return axios.get('/gifs/searches')
  }
}
