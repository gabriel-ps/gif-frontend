<template>
  <b-modal
    :visible="gif !== null"
    @change="$emit('close')"
    hide-header
  >
    <img
      v-if="gif"
      class="bd-placeholder-img card-img-top"
      :src="gifUrl"
    />
    <template
      v-if="gif"
      v-slot:modal-footer
    >
      <b-button
        class="float-left"
        variant="info"
        size="lg"
        v-show="currIndex > 0"
        @click="$emit('previous')"
      >&lt;&lt; Previous</b-button>

      <b-button
        v-if="!gif.favorite"
        variant="primary"
        size="lg"
        :disabled="loading"
        @click="favorite"
      >Favorite</b-button>
      <b-button
        v-else
        variant="danger"
        size="lg"
        :disabled="loading"
        @click="unfavorite"
      >Unfavorite</b-button>

      <b-button
        class="float-right"
        variant="info"
        size="lg"
        v-show="currIndex < totalItens - 1"
        @click="$emit('next')"
      >Next &gt;&gt;</b-button>
    </template>
  </b-modal>
</template>

<script>
export default {
  props: {
    gif: {
      required: true,
      validator: prop => typeof prop === 'object' || prop === null
    },
    currIndex: {
      type: Number,
      required: true
    },
    totalItens: {
      type: Number,
      required: true
    },
    gifService: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    gifUrl () {
      return this.gif.images.fixed_width_downsampled.url
    }
  },
  methods: {
    async favorite () {
      if (this.loading) {
        return
      }
      this.loading = true

      try {
        await this.gifService.favorite(this.gif.id)
        this.$emit('favorite')
      } catch (error) {

      } finally {
        this.loading = false
      }
    },
    async unfavorite () {
      if (this.loading) {
        return
      }
      this.loading = true

      try {
        await this.gifService.unfavorite(this.gif.id)
        this.$emit('unfavorite')
      } catch (error) {

      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .modal-footer {
  display: block;
  text-align: center;
}
</style>
