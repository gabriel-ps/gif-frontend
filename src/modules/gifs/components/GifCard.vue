<template>
  <div class="col-md-4 gif-card">
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
      return this.gif.images.downsized.url
    }
  }
}
</script>

<style lang="scss" scoped>
.gif-card {
  margin-bottom: 3em;
}
</style>
