<template>
  <div class="gifs-list">
    <section class="jumbotron text-center">
      <b-container>
        <h2>Your favorite GIFs</h2>
      </b-container>
    </section>

    <b-container>
      <h3
        v-if="loading"
        class="text-info"
      >
        Loading...
      </h3>
      <h3
        v-else-if="fetchError"
        class="text-danger"
      >{{ fetchError }}</h3>
      <h3
        v-else-if="gifs.length === 0"
        class="text-danger"
      >No gif favorited yet.</h3>
    </b-container>

    <div
      v-if="gifs.length && !loading"
      class="album py-5"
    >
      <div class="container">
        <div class="row">
          <gif-card
            v-for="(gif, i) in gifs"
            :key="gif.id"
            :gif="gif"
            @click="selectedGifIndex = i"
          />
        </div>
      </div>
    </div>

    <gif-modal
      :gif="selectedGif"
      :currIndex="selectedGifIndex"
      :totalItens="gifs.length"
      :gifService="gifService"
      @close="selectedGifIndex = -1"
      @previous="selectedGifIndex--"
      @next="selectedGifIndex++"
      @favorite="favoriteGif"
      @unfavorite="unfavoriteGif"
    />
  </div>
</template>

<script>
import GifCard from '../components/GifCard'
import GifModal from '../components/GifModal'
import GifService from '../domain/GifService'

export default {
  components: {
    GifCard,
    GifModal
  },
  data () {
    return {
      loading: false,
      fetchError: '',
      gifService: new GifService(),
      gifs: [],
      selectedGifIndex: -1
    }
  },
  created () {
    this.fetchFavorites()
  },
  methods: {
    async fetchFavorites () {
      if (this.loading) {
        return
      }
      this.loading = true
      this.fetchError = ''
      this.selectedGifIndex = -1

      try {
        const response = await this.gifService.fetchFavorites()
        this.gifs = response.data.data
      } catch (error) {
        this.fetchError = 'Failed to fetch gifs.'
      } finally {
        this.loading = false
      }
    },
    async favoriteGif () {
      this.selectedGif.favorite = true
    },
    async unfavoriteGif () {
      this.selectedGif.favorite = false
    }
  },
  computed: {
    hasSelectedGif () {
      return this.selectedGifIndex > -1
    },
    selectedGif () {
      return this.hasSelectedGif ? this.gifs[this.selectedGifIndex] : null
    }
  }
}
</script>
