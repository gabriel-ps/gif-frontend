import Vue from 'vue'
import Vuex from 'vuex'

import core from '@/modules/core/store'
import auth from '@/modules/auth/store'
import gifs from '@/modules/gifs/store'

Vue.use(Vuex)

const modules = {
  core,
  auth,
  gifs
}

export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production'
  // state: {},
  // actions: {},
  // mutations: {},
  // getters: {}
})
