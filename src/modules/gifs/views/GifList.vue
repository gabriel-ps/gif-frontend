<template>
  <div class="gifs-list">
    <section class="jumbotron text-center">
      <div class="container">
        <gif-search-bar
          :loading="loading"
          @search="searchGifs"
        />
        <b-alert
          :show="searchError.length"
          variant="danger"
          dismissible
        >
          {{ searchError }}
        </b-alert>
      </div>
    </section>

    <div
      v-if="gifs.length"
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
      @close="selectedGifIndex = -1"
      @previous="selectedGifIndex--"
      @next="selectedGifIndex++"
    />
  </div>
</template>

<script>
import GifCard from '../components/GifCard'
import GifSearchBar from '../components/GifSearchBar'
import GifModal from '../components/GifModal'
import GifService from '../domain/GifService'

export default {
  components: {
    GifCard,
    GifSearchBar,
    GifModal
  },
  data () {
    return {
      loading: false,
      searchError: '',
      gifService: new GifService(),
      gifs: [],
      selectedGifIndex: -1
    }
  },
  methods: {
    async searchGifs (search) {
      this.loading = true
      this.searchError = ''
      this.selectedGifIndex = -1

      try {
        const response = await this.gifService.get(search)
        this.gifs = response.data.data
      } catch (error) {
        /* if (error.response.status === 422) {
          // Error message from server
          this.searchError = error.response.data.message
        } */
        this.searchError = 'Failed to fetch gifs.'
      } finally {
        this.loading = false
      }
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
