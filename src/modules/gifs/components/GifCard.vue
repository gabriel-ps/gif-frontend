<template>
  <div class="col-md-4 gif-card">
    <img
      class="bd-placeholder-img card-img-top"
      :src="gif.url"
    />
  </div>
</template>

<script>
export default {
  props: {
    gif: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.gif-card {
  margin-bottom: 3em;
}
</style>
