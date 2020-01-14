<template>
  <form
    class="search-bar mx-auto"
    @submit.prevent="emitSearch"
  >
    <app-input
      class="search-bar__input"
      input-class="search-bar__input__text"
      placeholder="Search GIFs"
      v-model="$v.search.$model"
      :state="!$v.search.$dirty ? null : !$v.search.$invalid"
      error-message="Please inform a search string with a least 3 chars."
      :disabled="loading"
    />
    <b-button
      type="submit"
      class="search-bar__submit"
      :disabled="loading"
      variant="primary"
    >Go!</b-button>
  </form>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  validations: {
    search: { required, minLength: minLength(3) }
  },
  data () {
    return {
      search: ''
    }
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    emitSearch () {
      if (this.loading) {
        return
      }

      this.$v.$touch()

      if (this.$v.$invalid) {
        // Errors, do not emit
        return
      }

      this.$emit('search', this.search)
    }
  }
}
</script>

<style lang="scss" scoped>
.search-bar {
  display: flex;

  ::v-deep &__input {
    margin: 0;
    padding: 0;
    flex: 1;

    &__text {
      padding: 1em;
      font-size: 2em;
    }
  }

  ::v-deep &__submit {
    margin-left: 1em;
    padding: 0em 1em;
    font-size: 2em;
  }
}
</style>
