import Vue from 'vue'
import Vuex from 'vuex'

import { userStore } from './user.store.js'
import { boardStore } from './board.store.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';

export const store = new Vuex.Store({
  strict: debug,
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
