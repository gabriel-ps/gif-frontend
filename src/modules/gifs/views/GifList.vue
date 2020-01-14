<template>
  <div class="gifs-list">
    <section class="jumbotron text-center">
      <div class="container">
        <gif-search-bar
          :loading="loading"
          @search="searchGifs"
        />
      </div>
    </section>

    <div class="album py-5">
      <div class="container">
        <div class="row">
          <gif-card
            v-for="gif in gifs"
            :key="gif.id"
            :gif="gif"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GifCard from '../components/GifCard'
import GifSearchBar from '../components/GifSearchBar'
import GifService from '../domain/GifService'

export default {
  components: {
    GifCard,
    GifSearchBar
  },
  data () {
    return {
      loading: false,
      searchError: '',
      gifService: new GifService(),
      gifs: [
        {
          id: '1',
          url: 'https://media.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif'
        }
      ]
    }
  },
  methods: {
    async searchGifs (search) {
      this.loading = true

      try {
        const response = await this.gifService.get(search)
        this.gifs = response.data.data
      } catch (error) {
        if (error.response.status === 401) {
          // Error message from server
          this.searchError = error.response.data.error
        } else {
          this.searchErro = 'Unkown error.'
        }
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
