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
    <template v-slot:modal-footer>
      <b-button
        class="float-left"
        variant="info"
        size="lg"
        v-show="currIndex > 0"
        @click="$emit('previous')"
      >&lt;&lt; Previous</b-button>
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
      // type: Object,
      required: true
    },
    currIndex: {
      type: Number,
      required: true
    },
    totalItens: {
      type: Number,
      required: true
    }
  },
  computed: {
    gifUrl () {
      return this.gif.images.fixed_width_downsampled.url
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .modal-footer {
  display: block;
}
</style>