/*
 * @Descripttion: 
 * @Author: dj
 * @Date: 2020-06-25 20:12:06
 */ 
import Vue from 'vue'
import Vuex from 'vuex'
import { setStorage, getStorage } from '@/utils/storage'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getStorage('user')
  },
  mutations: {
    setUser(state, data) {
      state.user = data
      setStorage('user', JSON.stringify(state.user))
    }
  },
  actions: {
  },
  modules: {
  }
})
