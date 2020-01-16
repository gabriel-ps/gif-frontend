<template>
  <div class="login">
    <b-form
      class="login__form mx-auto"
      @submit.prevent="login"
    >
      <h1 class="text-center">GIF API</h1>
      <b-alert
        show
        variant="light"
      >
        E-mail: test@test.com
        <br />
        Password: 123456
      </b-alert>
      <b-alert
        :show="showErrorAlert"
        variant="danger"
        dismissible
      >
        {{loginError}}
      </b-alert>
      <app-input
        input-class="login__form__input"
        placeholder="Email"
        type="email"
        v-model="$v.email.$model"
        :state="!$v.email.$dirty ? null : !$v.email.$invalid"
        error-message="Please inform a valid email address."
        :disabled="sending"
      />

      <app-input
        input-class="login__form__input"
        placeholder="Password"
        type="password"
        v-model="$v.password.$model"
        :state="!$v.password.$dirty ? null : !$v.password.$invalid"
        error-message="Please inform your password."
        :disabled="sending"
      />

      <b-button
        type="submit"
        variant="primary"
        block
        class="login__form__submit"
        :disabled="sending"
      >Login</b-button>
    </b-form>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import AuthService from '../domain/AuthService'

export default {
  data () {
    return {
      email: 'test@test.com',
      password: '',
      authService: new AuthService(),
      sending: false,
      loginError: ''
    }
  },
  validations: {
    email: { required, email },
    password: { required }
  },
  methods: {
    async login () {
      if (this.sending) {
        return
      }

      this.$v.$touch()

      if (this.$v.$invalid) {
        // Errors, do not send
        return
      }

      this.sending = true
      this.loginError = ''

      try {
        await this.authService.login({
          email: this.email,
          password: this.password
        })

        this.$router.push({ name: 'gif.list' })
      } catch (error) {
        if (error.response.status === 401) {
          // Error message from server
          this.loginError = error.response.data.error
        }
      } finally {
        this.sending = false
      }
    }
  },
  computed: {
    showErrorAlert () {
      return this.loginError.length > 0
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  padding-top: 14em;
  padding-bottom: 4em;

  &__form {
    max-width: 420px;

    ::v-deep &__input {

      // height: 5em;
      padding: .8em;
      font-size: 2em;
    }

    &__submit {
      padding: .4em;
      font-size: 1.9em;
    }
  }
}
</style>
