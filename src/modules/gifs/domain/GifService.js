import axios from '@/modules/core/domain/api-axios'

export default class GifService {
  get (search) {
    return axios.get('/gifs', { params: { search } })
  }
}
