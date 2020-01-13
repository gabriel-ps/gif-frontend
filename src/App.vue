<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '@/assets/styles/main.scss';
</style>

<style lang="scss" scoped>
@import '@/assets/styles/design/index.scss';

#app {
  font-family: $system-default-font-family;
}
</style>
