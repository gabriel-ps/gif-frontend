<template>
  <div class="gifs-list">
    <section class="jumbotron text-center">
      <b-container>
        <h2>Your search history</h2>
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
        v-else-if="!searches.length"
        class="text-danger"
      >No search made yet.</h3>
      <b-table
        v-else
        :items="tableItems"
        :fields="tableFields"
      />
    </b-container>

  </div>
</template>

<script>
import GifService from '../domain/GifService'

export default {
  components: {},
  data () {
    return {
      gifService: new GifService(),
      searches: [],
      loading: false,
      tableFields: [
        {
          key: 'search',
          label: 'Search'
        },
        {
          key: 'created_at',
          label: 'Search time'
        }
      ]
    }
  },
  created () {
    this.fetchSearches()
  },
  methods: {
    async fetchSearches () {
      if (this.loading) {
        return
      }
      this.loading = true
      this.fetchError = ''

      try {
        const response = await this.gifService.fetchSearches()
        this.searches = response.data
      } catch (error) {
        this.searchError = 'Failed to fetch searches.'
      } finally {
        this.loading = false
      }
    }
  },
  computed: {
    tableItems () {
      return this.searches.map(search => {
        return {
          search: search.search,
          created_at: search.created_at
        }
      })
    }
  }
}
</script>
