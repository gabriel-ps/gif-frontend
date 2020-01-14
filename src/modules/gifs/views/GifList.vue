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

export default {
  components: {
    GifCard,
    GifSearchBar
  },
  data () {
    return {
      loading: false,
      gifs: [
        {
          id: '1',
          url: 'https://media.giphy.com/media/4Zo41lhzKt6iZ8xff9/giphy.gif'
        }
      ]
    }
  },
  methods: {
    searchGifs (search) {
      this.loading = true
    }
  }
}
</script>
