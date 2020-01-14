<template>
  <div class="root">
    <the-header />
    <main class="bg-light">
      <router-view />
    </main>
</div>
</template>

<script>
import TheHeader from './TheHeader'

export default {
  components: {
    TheHeader
  }
}
</script>
