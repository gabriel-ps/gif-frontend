<template>
  <header class="header">
    <b-navbar
      toggleable="md"
      type="dark"
      variant="dark"
      class="header__navbar"
    >
      <b-container class="d-flex justify-content-between">
        <b-navbar-brand
          :to="{ name: 'gif.list' }"
          class="header__navbar__brand d-flex align-items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
            <circle cx="12" cy="13" r="4"></circle>
          </svg>
          <strong>GIF API</strong>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <b-nav-item
                :to="{ name: 'gif.list' }"
                class="header__navbar__nav-item text-white"
              >Search</b-nav-item>
              <b-nav-item
                :to="{ name: 'gif.search-history' }"
                class="header__navbar__nav-item text-white"
              >Search history</b-nav-item>
              <b-nav-item
                :to="{ name: 'gif.favorites' }"
                class="header__navbar__nav-item text-white"
              >Favorites</b-nav-item>
              <b-nav-item
                :to="{ name: 'auth.logout' }"
                class="header__navbar__nav-item text-white"
              >Log out</b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  &__navbar {
    padding: 1em 0em;

    &__brand {
      font-size: 2em;
    }
    &__nav-item .nav-link {
      font-weight: bold;
      color: #fff;
    }
  }
}
</style>
