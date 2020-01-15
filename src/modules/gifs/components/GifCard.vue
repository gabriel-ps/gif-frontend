<template>
  <div
    class="col-md-4 gif-card"
    @click="$emit('click')"
  >
    <img
      class="bd-placeholder-img card-img-top"
      :src="gifUrl"
    />
  </div>
</template>

<script>
export default {
  props: {
    gif: {
      // type: Object,
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
.gif-card {
  margin-bottom: 3em;
  cursor: pointer;
}
</style>
