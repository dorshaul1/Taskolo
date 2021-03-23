import Vue from 'vue'
import Vuex from 'vuex'

import { userStore } from './user.store.js'
import { boardStore } from './board.store.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  modules: {
    userStore,
    boardStore, 
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
