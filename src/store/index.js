// export const ADD_AGE = 'addAge'
import { MUTATION_ADD_AGE } from './mutation_type'
export { MUTATION_ADD_AGE }
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  //data
  state: {
    userinfo: {
      nickname: '$$',
      age: 0,
      gender: '',
      money: 0
    }
    // firstname: '独孤',
    // lastname: '化雨'
  },
  //computed
  getters: {
    // realname: state => state.firstname + state.lastname,
    money_us(state) {
      return (state.userinfo.money / 10).toFixed(2)
    }
  },
  //methods
  //this.$store.commit("mutationName")
  mutations: {
    //载荷
    [MUTATION_ADD_AGE](state, payLoad) {
      state.money += payLoad.num
    },
    setUserInfo(state, info) {
      state.userinfo = info
      // state.nickname = info.nickname
      // state.age = info.age
      // state.gender = info.gender
      // state.money = info.money
    }
  },
  actions: {
    // async getUserInfo(context) {
    //   var res = await axios.get('/user/getuserinfo')
    //   context.commit('setUserInfo', res)
    //   // return { nickname: 'Simba', age: 20 }
    // }
    //解构
    // async getToken({ commit }) {
    //   var res = await axios.get('/user/getToken')
    //   commit('setToken', res)
    // },
    // async getUserInfo({ commit, dispatch }) {
    //   var res = await axios.get('/user/getuserinfo')
    //   commit('setUserInfo', res)
    //   dispatch('getToken')
    // }
    async getUserInfo({ commit, dispatch }) {
      commit('setUserInfo', {
        nickname: 'Simba',
        age: 20,
        gender: '男',
        money: 100
      })
    }
  }
})
