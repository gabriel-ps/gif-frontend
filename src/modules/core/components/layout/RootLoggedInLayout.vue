<template>
  <div class="root">
    <the-header />
    <main>
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
